import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Share2, ArrowRight } from 'lucide-react';
import { client } from '../lib/shopify';
import ScrollReveal from '../components/ScrollReveal';
import img01 from '../assets/01.png';
import img001 from '../assets/001.png';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart, isUpdating } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [shopifyProduct, setShopifyProduct] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // We will populate sizes dynamically from Shopify variants
    const [selectedSize, setSelectedSize] = useState<any>(null);
    const [activeImage, setActiveImage] = useState(0);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });

        if (id) {
            // Because Shopify SDK fetch takes a specific graphQL ID format, 
            // the easiest robust way without encoding is fetching all and finding by handle/id
            client.product.fetchAll().then((products) => {
                // Try to find by ID (if we pass the raw id) or handle
                const found = products.find(p => p.id === id || p.id.split('/').pop() === id || p.handle === id);
                if (found) {
                    setShopifyProduct(found);
                    if (found.variants && found.variants.length > 0) {
                        setSelectedSize(found.variants[0]);
                    }
                }
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setLoading(false);
            });
        }
    }, [id]);

    // sizes moved up

    const handleAddToCart = async () => {
        if (!shopifyProduct || !selectedSize) return;
        // Pass the actual unit price from the variant node explicitly, so the cart can save it 
        // to bypass Shopify Checkout API's aggressive discounting
        const currentPrice = Number(selectedSize.price.amount || selectedSize.price);
        await addToCart(selectedSize.id, quantity, currentPrice);
        // quantity resets or user feedback could go here
    };

    if (loading) {
        return <div className="pt-40 pb-24 text-center font-bold text-mallow-pink text-2xl">טוען מוצר...</div>;
    }

    if (!shopifyProduct) {
        return (
            <div className="pt-40 pb-24 text-center">
                <h2 className="text-3xl font-display text-slate-800 mb-4">המוצר לא נמצא</h2>
                <Link to="/shop" className="text-mallow-pink underline">חזרה לחנות</Link>
            </div>
        );
    }

    const images = shopifyProduct.images.length > 0
        ? shopifyProduct.images.map((img: any) => img.src)
        : [img01];

    return (
        <div className="pt-40 mt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20" dir="rtl">
            {/* Images Section */}
            <div className="flex-1 space-y-4">
                <ScrollReveal direction="right" delay={0.1}>
                    <div className="aspect-square bg-slate-50 rounded-[3rem] p-8 flex items-center justify-center relative overflow-hidden shadow-sm border border-slate-100">
                        <img src={images[activeImage]} alt={shopifyProduct.title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
                    </div>
                </ScrollReveal>
                {images.length > 1 && (
                    <ScrollReveal direction="up" delay={0.2} className="flex gap-4 overflow-x-auto pb-2">
                        {images.map((img: string, idx: number) => (
                            <button
                                key={idx}
                                onClick={() => setActiveImage(idx)}
                                className={`w-24 h-24 rounded-2xl bg-white border-2 overflow-hidden flex-shrink-0 flex items-center justify-center p-2 transition-all ${activeImage === idx ? 'border-slate-800' : 'border-transparent hover:border-slate-200 shadow-sm'}`}
                            >
                                <img src={img} alt="" className="w-full h-full object-contain" />
                            </button>
                        ))}
                    </ScrollReveal>
                )}
            </div>

            {/* Product Details */}
            <div className="flex-[1.2] flex flex-col">
                <ScrollReveal direction="down" delay={0.1}>
                    <Link to="/shop" className="flex items-center gap-2 text-slate-500 hover:text-mallow-pink mb-4 text-sm font-bold w-fit transition-colors">
                        <ArrowRight size={16} /> חזרה לחנות
                    </Link>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.1}>
                    <h1 className="text-4xl md:text-5xl font-display text-slate-800 mb-4">{shopifyProduct.title}</h1>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.2} className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-slate-500 text-sm">מחיר</span>
                        <span className="text-2xl font-bold text-slate-800">{selectedSize ? Number(selectedSize.price.amount).toFixed(2) : '0.00'} ש״ח</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">כולל מס. עלות משלוח מחושבת במהלך התשלום.</p>
                </ScrollReveal>

                {/* Size Selection (Variants) */}
                {shopifyProduct.variants && shopifyProduct.variants.length > 1 && (
                    <ScrollReveal direction="left" delay={0.3} className="mb-8">
                        <p className="text-slate-800 font-bold mb-3">{shopifyProduct.options[0]?.name || 'אפשרויות'}</p>
                        <div className="flex flex-wrap gap-3">
                            {shopifyProduct.variants.map((variant: any) => (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelectedSize(variant)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${selectedSize?.id === variant.id
                                        ? 'bg-slate-800 text-white border-slate-800'
                                        : 'bg-white text-slate-600 border-slate-200 hover:border-slate-800'
                                        }`}
                                >
                                    {variant.title}
                                </button>
                            ))}
                        </div>
                    </ScrollReveal>
                )}

                {/* Quantity */}
                <ScrollReveal direction="left" delay={0.4} className="mb-8">
                    <p className="text-slate-800 font-bold mb-3">כמות</p>
                    <div className="flex items-center border border-slate-200 bg-white rounded-full w-32 h-12">
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="flex-1 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="w-10 text-center font-bold">{quantity}</span>
                        <button
                            onClick={() => setQuantity(quantity + 1)}
                            className="flex-1 flex items-center justify-center text-slate-500 hover:text-slate-800"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                </ScrollReveal>

                {/* Actions */}
                <ScrollReveal direction="up" delay={0.5} className="space-y-3 mb-10">
                    {selectedSize?.available === false || shopifyProduct.availableForSale === false ? (
                        <button
                            disabled
                            className="w-full bg-slate-200 text-slate-500 py-4 rounded-full font-bold cursor-not-allowed"
                        >
                            מצטערים, המוצר אזל במלאי
                        </button>
                    ) : (
                        <button
                            onClick={handleAddToCart}
                            disabled={isUpdating}
                            className={`w-full py-4 rounded-full font-bold transition-colors shadow-lg ${isUpdating ? 'bg-mallow-pink/50 text-white cursor-not-allowed' : 'bg-mallow-pink text-white hover:bg-mallow-pink/90 shadow-mallow-pink/20'}`}
                        >
                            {isUpdating ? 'מוסיף לעגלה...' : 'הוספה לסל'}
                        </button>
                    )}
                </ScrollReveal>

                {/* Pickup Info */}
                <ScrollReveal direction="up" delay={0.6} className="bg-slate-50 rounded-2xl p-5 mb-10 border border-slate-100 flex gap-4">
                    <svg className="w-6 h-6 text-slate-800 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                        <p className="font-bold text-slate-800">איסוף זמין ב היצירה 13 רעננה</p>
                        <p className="text-sm text-slate-500 mt-1">מוכן בדרך כלל בתוך 24 שעות</p>
                        <button className="text-sm text-slate-800 underline mt-2 hover:text-mallow-pink transition-colors">מידע על חנויות</button>
                    </div>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal direction="up" delay={0.7} className="pr-4 border-r-2 border-mallow-pink/30 mb-10 text-slate-600 leading-relaxed space-y-4">
                    <h3 className="font-bold text-slate-800 text-lg">תיאור המוצר:</h3>
                    {/* Render HTML description securely from Shopify */}
                    <div dangerouslySetInnerHTML={{ __html: shopifyProduct.descriptionHtml || shopifyProduct.description }} className="prose prose-sm prose-slate max-w-none text-slate-600" />
                </ScrollReveal>

                {/* Footer info within product */}
                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <p className="text-xs text-slate-400">חלק מהתמונות בדף זה נוצרו או עובדו באמצעות בינה מלאכותית, ומשמשות להמחשה בלבד</p>
                    <p className="text-xs text-slate-400">ייתכנו שינוים בצבעים</p>

                    <button className="flex items-center gap-2 text-sm text-slate-600 font-bold hover:text-mallow-pink transition-colors group mt-4">
                        <Share2 size={16} className="group-hover:scale-110 transition-transform" /> שתף
                    </button>
                </div>
            </div>
        </div>
    );
}
