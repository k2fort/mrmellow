import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { client } from '../lib/shopify';
import ScrollReveal from '../components/ScrollReveal';
import packImg from '../assets/pack.png';

export default function Gifting() {
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

    // Filter to only show products containing bucket/מארז keywords in Type or Title
    const displayProducts = shopifyProducts.filter(product => {
        const typeStr = String(product.productType || '').toLowerCase();
        const titleStr = String(product.title || '').toLowerCase();

        return typeStr.includes('bucket') || typeStr.includes('מארז') || titleStr.includes('מארז');
    });

    return (
        <div className="pt-40 pb-24 px-6 relative mt-10 min-h-[calc(100vh-200px)] flex flex-col items-center" id="gifting">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16 relative z-10">
                    <ScrollReveal direction="up" delay={0.1}>
                        <h3 className="text-5xl font-display text-slate-800 mb-4">מארזים מיוחדים</h3>
                    </ScrollReveal>
                    <ScrollReveal direction="up" delay={0.2}>
                        <p className="text-slate-600">בחרו את המארז המושלם לכל אירוע</p>
                    </ScrollReveal>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 relative w-full">
                    {loading ? (
                        <div className="w-full col-span-2 lg:col-span-3 text-center py-20 text-mallow-pink font-bold">טוען מארזים מ-Shopify...</div>
                    ) : displayProducts.length === 0 ? (
                        <div className="w-full col-span-2 lg:col-span-3 text-center py-20 text-slate-500 font-bold">לא נמצאו מארזים. יש להוסיף מוצרים לחנות השופיפיי עם קטגוריית "Candy Buckets".</div>
                    ) : (
                        displayProducts.map((product, index) => {
                            const title = product.title;
                            const price = product.variants && product.variants.length > 0 ? product.variants[0].price.amount : 0;
                            const imageSrc = product.images && product.images.length > 0 ? product.images[0].src : packImg;
                            const productId = product.id;
                            const isAvailable = product.availableForSale !== false;

                            return (
                                <ScrollReveal key={productId} direction="up" delay={0.1 + (index * 0.1)} className={`w-full group floating-delayed ${!isAvailable ? 'opacity-70 grayscale-[30%]' : ''}`}>
                                    <div className="bg-mallow-lavender h-full p-4 md:p-6 text-white rounded-[2rem] md:rounded-[3rem] shadow-xl flex flex-col text-center transition-all border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-mallow-pink/20 hover:shadow-mallow-lavender/40 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-2xl"></div>
                                        <div className="absolute bottom-0 left-0 w-20 h-20 md:w-24 md:h-24 bg-mallow-pink/20 rounded-full blur-2xl"></div>

                                        <div className="aspect-square rounded-2xl md:rounded-[2rem] bg-white/10 flex items-center justify-center mb-4 md:mb-6 border border-white/20 group-hover:bg-white/20 transition-colors duration-500 relative z-10 w-full overflow-hidden p-4 md:p-6">
                                            <img src={imageSrc} alt={title} className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg" />
                                            {!isAvailable && (
                                                <div className="absolute inset-0 bg-mallow-lavender/50 flex items-center justify-center text-white font-bold text-sm md:text-xl backdrop-blur-sm z-20 rounded-2xl md:rounded-[2rem]">
                                                    אזל במלאי
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-center flex-grow flex flex-col relative z-10">
                                            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${!isAvailable ? 'text-white/60' : 'text-white/90'}`}>
                                                {!isAvailable ? 'אזל מהמלאי' : 'מארז פרימיום'}
                                            </span>
                                            <h4 className="text-lg md:text-2xl font-display mt-1 text-white line-clamp-2 md:line-clamp-none h-[2.8rem] md:h-auto">{title}</h4>
                                            <p className="opacity-90 mt-2 text-base md:text-xl font-bold leading-relaxed px-2 text-white">
                                                מ-₪{Number(price).toFixed(2)}
                                            </p>

                                            <div className="mt-auto pt-4 md:pt-8">
                                                {isAvailable ? (
                                                    <Link
                                                        to={`/product/${productId.split('/').pop()}`}
                                                        aria-label={`בחירת גודל למארז ${title}`}
                                                        className="w-full bg-white text-mallow-lavender py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm shadow-md hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mallow-lavender inline-block"
                                                    >
                                                        בחירת גודל
                                                    </Link>
                                                ) : (
                                                    <button
                                                        disabled
                                                        className="w-full bg-white/50 text-white py-2.5 md:py-3 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm shadow-sm cursor-not-allowed inline-block"
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
