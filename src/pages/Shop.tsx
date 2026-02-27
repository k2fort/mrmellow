import { Plus, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';
import { client } from '../lib/shopify';
import ScrollReveal from '../components/ScrollReveal';
import img01 from '../assets/01.png';
import img001 from '../assets/001.png';
import giftImg from '../assets/gift.png';



export default function Shop() {
  const { addToCart } = useCart();
  const [shopifyProducts, setShopifyProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from Shopify
    client.product.fetchAll().then((products) => {
      setShopifyProducts(products);
      setLoading(false);
    }).catch(err => {
      console.error("Error fetching shopify products", err);
      setLoading(false);
    });
  }, []);

  const baseProduct = {
    tag: 'חדש במלאי',
    tagColor: 'text-secondary',
    animation: 'floating-slow',
    borderColor: 'border-mallow-pink/10',
    hoverShadow: 'hover:shadow-mallow-pink/30',
  };

  // Filter to only show products with Custom Product Type 'Candy', or 'סוכריות'
  // Alternatively search title since tags aren't retrieved by the basic API
  const displayProducts = shopifyProducts.filter(product => {
    const typeStr = String(product.productType || '').toLowerCase();
    const titleStr = String(product.title || '').toLowerCase();

    // Check if it's a bucket/gifting item based on type or title
    const isCandyBucket = typeStr.includes('bucket') || typeStr.includes('מארז') || titleStr.includes('מארז');

    // For Shop page, it must have 'candy'/'סוכריות' in type, OR it's just NOT a bucket
    const isCandyType = typeStr.includes('candy') || typeStr.includes('סוכריות');

    // If they haven't set any custom type, default to showing it here UNLESS it's a bucket
    return isCandyType || (typeStr === '' && !isCandyBucket);
  });

  return (
    <div className="pt-40 pb-24 px-6 relative mt-10" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <ScrollReveal direction="up" delay={0.1}>
            <h3 className="text-5xl font-display text-slate-800 mb-4">מזווה הקסמים</h3>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-slate-600">בחרו טעם מרחף כדי להתחיל את המסע שלכם</p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 relative items-stretch">
          {loading ? (
            <div className="col-span-full text-center py-20 text-mallow-pink font-bold">טוען מוצרים מ-Shopify...</div>
          ) : displayProducts.length === 0 ? (
            <div className="col-span-full text-center py-20 text-slate-500 font-bold">לא נמצאו מוצרים. יש להוסיף מוצרים לחנות השופיפיי שלך.</div>
          ) : (
            displayProducts.map((product, index) => {
              // Extract Shopify data or use fallback format
              const isShopify = !!product.variants;
              const title = product.title || product.name;
              const price = isShopify ? product.variants[0].price.amount : product.price;
              const imageSrc = isShopify && product.images.length > 0 ? product.images[0].src : product.image || img01;
              const productId = isShopify ? product.id : product.id;

              // Check availability
              const isAvailable = isShopify ? product.availableForSale !== false : true;

              return (
                <ScrollReveal key={productId} direction="up" delay={0.1 + (index * 0.1)} className={`w-full group ${product.animation || baseProduct.animation} ${!isAvailable ? 'opacity-70 grayscale-[30%]' : ''}`}>
                  <div className={`bg-white h-full p-4 md:p-6 flex flex-col rounded-[2rem] md:rounded-[3rem] shadow-xl transition-all border-b-4 md:border-b-8 border-r-4 md:border-r-8 ${product.borderColor || baseProduct.borderColor} ${product.hoverShadow || baseProduct.hoverShadow}`}>
                    <div className="aspect-square rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-4 md:mb-6 bg-slate-50 flex items-center justify-center relative">
                      <img
                        src={imageSrc}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                      {!isShopify && product.hoverImage && (
                        <img
                          src={product.hoverImage}
                          alt={`${title} hover`}
                          className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        />
                      )}

                      {!isAvailable && (
                        <div className="absolute inset-0 bg-white/40 flex items-center justify-center font-bold text-slate-700 text-sm md:text-xl backdrop-blur-[2px] z-10 rounded-[1.5rem] md:rounded-2xl">
                          אזל במלאי
                        </div>
                      )}
                    </div>
                    <div className="text-center flex-grow flex flex-col">
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${!isAvailable ? 'text-slate-400' : (product.tagColor || baseProduct.tagColor)}`}>
                        {!isAvailable ? 'אזל מהמלאי' : (isShopify ? 'חדש' : product.tag || baseProduct.tag)}
                      </span>
                      <h4 className="text-lg md:text-2xl font-display text-slate-800 mt-1 line-clamp-2 md:line-clamp-none h-[2.8rem] md:h-auto">{title}</h4>
                      <p className="text-mallow-pink font-bold text-base md:text-xl mt-1 md:mt-2">
                        {isShopify ? `₪${Number(price).toFixed(2)}` : (product.priceDisplay || `₪${product.price.toFixed(2)}`)}
                      </p>

                      <div className="mt-auto pt-3 md:pt-4">
                        {isAvailable ? (
                          <Link
                            to={`/product/${productId.split('/').pop()}`}
                            aria-label={`בחירת גודל עבור ${title}`}
                            className="w-full bg-mallow-pink/10 hover:bg-mallow-pink hover:text-white text-mallow-pink py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2"
                          >
                            בחירת גודל
                          </Link>
                        ) : (
                          <button
                            disabled
                            className="w-full bg-slate-100 text-slate-400 py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm cursor-not-allowed flex items-center justify-center gap-2"
                          >
                            אזל במלאי
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })
          )}

        </div>
      </div>
    </div>
  );
}
