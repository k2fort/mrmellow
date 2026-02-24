import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { client } from '../lib/shopify';

export interface CartItem {
  id: string; // The Shopify checkout line item ID (for updating/removing)
  variantId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (variantId: string, quantity: number, originalPrice?: number) => Promise<void>;
  removeFromCart: (lineItemId: string) => Promise<void>;
  updateQuantity: (lineItemId: string, quantity: number) => Promise<void>;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  checkoutUrl: string | null;
  isUpdating: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutId, setCheckoutId] = useState<string | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  // Store prices passed from the UI to override Shopify's discounted checkout prices
  const [localPriceMap, setLocalPriceMap] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('shopify_cart_prices');
    return saved ? JSON.parse(saved) : {};
  });

  // Helper to map Shopify line items to our local CartItem interface
  const mapLineItems = (checkout: any, pricesMap: Record<string, number> = localPriceMap) => {
    if (!checkout || !checkout.lineItems) return [];
    return checkout.lineItems.map((item: any) => {
      // Prioritize our locally saved, un-discounted unit price from when they added it
      let finalPrice = pricesMap[item.variant?.id] || Number(item.variant?.price?.amount || item.variant?.price || 0);

      if (item.discountAllocations && item.discountAllocations.length > 0) {
        const discountAmount = item.discountAllocations.reduce((acc: number, cur: any) => {
          return acc + Number(cur.allocatedAmount?.amount || 0);
        }, 0);
        // Add the discounted amount back per item
        finalPrice += (discountAmount / item.quantity);
      } else if (item.variant?.compareAtPrice) {
        finalPrice = Number(item.variant.compareAtPrice.amount || item.variant.compareAtPrice);
      }

      return {
        id: item.id,
        variantId: item.variant?.id,
        name: item.title + (item.variant?.title && item.variant.title !== 'Default Title' ? ` - ${item.variant.title}` : ''),
        price: finalPrice,
        quantity: item.quantity,
        image: item.variant?.image?.src || ''
      };
    });
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      setIsUpdating(true);
      try {
        const storedId = localStorage.getItem('shopify_checkout_id');
        let checkout: any = null;

        if (storedId) {
          try {
            checkout = await client.checkout.fetch(storedId);
            if (checkout && checkout.completedAt) {
              checkout = null; // Completed, need a new one
            }
          } catch (e) {
            checkout = null;
          }
        }

        if (!checkout) {
          checkout = await client.checkout.create();
          localStorage.setItem('shopify_checkout_id', checkout.id);
        }

        setCheckoutId(checkout.id);
        setCheckoutUrl(checkout.webUrl);
        const mappedItems = mapLineItems(checkout);
        setItems(mappedItems);
        // Calculate total manually since checkout total includes the server discount
        const realTotal = mappedItems.reduce((sum: number, i: any) => sum + (i.price * i.quantity), 0);
        setTotalPrice(realTotal);
      } catch (err) {
        console.error("Failed to initialize checkout", err);
      } finally {
        setIsUpdating(false);
      }
    };

    initializeCheckout();
  }, []);

  const addToCart = async (variantId: string, quantity: number, originalPrice?: number) => {
    if (!checkoutId) return;
    setIsUpdating(true);
    try {
      // Save original price straight away to bypass Shopify automatic discounts
      const updatedPriceMap = { ...localPriceMap };
      if (originalPrice !== undefined) {
        updatedPriceMap[variantId] = originalPrice;
        setLocalPriceMap(updatedPriceMap);
        localStorage.setItem('shopify_cart_prices', JSON.stringify(updatedPriceMap));
      }

      const lineItemsToAdd = [{ variantId, quantity }];
      const checkout: any = await client.checkout.addLineItems(checkoutId, lineItemsToAdd);

      const mappedItems = mapLineItems(checkout, updatedPriceMap);
      setItems(mappedItems);
      const realTotal = mappedItems.reduce((sum: number, i: any) => sum + (i.price * i.quantity), 0);
      setTotalPrice(realTotal);
      setIsCartOpen(true);
    } catch (err) {
      console.error("Failed to add to cart", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const removeFromCart = async (lineItemId: string) => {
    if (!checkoutId) return;
    setIsUpdating(true);
    try {
      const checkout: any = await client.checkout.removeLineItems(checkoutId, [lineItemId]);
      const mappedItems = mapLineItems(checkout);
      setItems(mappedItems);
      const realTotal = mappedItems.reduce((sum: number, i: any) => sum + (i.price * i.quantity), 0);
      setTotalPrice(realTotal);
    } catch (err) {
      console.error("Failed to remove from cart", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const updateQuantity = async (lineItemId: string, quantity: number) => {
    if (!checkoutId) return;
    if (quantity <= 0) {
      return removeFromCart(lineItemId);
    }
    setIsUpdating(true);
    try {
      const lineItemsToUpdate = [{ id: lineItemId, quantity }];
      const checkout: any = await client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
      const mappedItems = mapLineItems(checkout);
      setItems(mappedItems);
      const realTotal = mappedItems.reduce((sum: number, i: any) => sum + (i.price * i.quantity), 0);
      setTotalPrice(realTotal);
    } catch (err) {
      console.error("Failed to update quantity", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const clearCart = () => {
    localStorage.removeItem('shopify_checkout_id');
    localStorage.removeItem('shopify_cart_prices');
    window.location.reload();
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setIsCartOpen,
        checkoutUrl,
        isUpdating,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
