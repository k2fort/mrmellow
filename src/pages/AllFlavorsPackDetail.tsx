import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Share2 } from 'lucide-react';
import packImg from '../assets/pack.png';

export default function AllFlavorsPackDetail() {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    // We'll set these up similar to other products but default to the base 240NIS setup for now
    const sizes = [
        { label: 'מארז רגיל', price: 240.00 },
        { label: 'מארז מוגדל', price: 350.00 },
        { label: 'מארז פרימיום', price: 480.00 }
    ];

    const [selectedSize, setSelectedSize] = useState(sizes[0]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleAddToCart = () => {
        addToCart({
            id: `all-flavors-pack-${selectedSize.label}`,
            name: `מארז של כל הטעמים (${selectedSize.label})`,
            price: selectedSize.price,
            image: packImg
        });
    };

    return (
        <div className="pt-40 mt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20" dir="rtl">
            {/* Images Section */}
            <div className="flex-1 space-y-4">
                <div className="aspect-square bg-slate-50 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden shadow-sm border border-slate-100">
                    <img src={packImg} alt="מארז של כל הטעמים" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-xl" />
                </div>
            </div>

            {/* Product Details */}
            <div className="flex-[1.2] flex flex-col">
                <h1 className="text-4xl md:text-5xl font-display text-slate-800 mb-4">מארז של כל הטעמים</h1>

                <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-slate-500 text-sm">מחיר רגיל</span>
                        <span className="text-2xl font-bold text-slate-800">{selectedSize.price.toFixed(2)} ש״ח</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">כולל מס. עלות משלוח מחושבת במהלך התשלום.</p>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                    <p className="text-slate-800 font-bold mb-3">גודל מארז</p>
                    <div className="flex flex-wrap gap-3">
                        {sizes.map(size => (
                            <button
                                key={size.label}
                                onClick={() => setSelectedSize(size)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${selectedSize.label === size.label
                                    ? 'bg-slate-800 text-white border-slate-800'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-800'
                                    }`}
                            >
                                {size.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                    <p className="text-slate-800 font-bold mb-3">כמות ()</p>
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
                </div>

                {/* Actions */}
                <div className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer text-slate-700 font-bold p-2 hover:bg-slate-50 rounded-lg transition-colors w-max">
                        <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-mallow-pink focus:ring-mallow-pink accent-mallow-pink cursor-pointer" />
                        <span>רוצה לשלוח זאת כמתנה</span>
                    </label>
                </div>
                <div className="space-y-3 mb-10">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-white border-2 border-slate-800 text-slate-800 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors"
                    >
                        הוספה לסל
                    </button>
                    <button className="w-full bg-mallow-pink text-white py-4 rounded-full font-bold hover:bg-mallow-pink/90 transition-colors shadow-lg shadow-mallow-pink/20">
                        קנה עכשיו
                    </button>
                </div>

                {/* Pickup Info */}
                <div className="bg-slate-50 rounded-2xl p-5 mb-10 border border-slate-100 flex gap-4">
                    <svg className="w-6 h-6 text-slate-800 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <div>
                        <p className="font-bold text-slate-800">איסוף זמין ב היצירה 13 רעננה</p>
                        <p className="text-sm text-slate-500 mt-1">מוכן בדרך כלל בתוך 24 שעות</p>
                        <button className="text-sm text-slate-800 underline mt-2 hover:text-mallow-pink transition-colors">מידע על חנויות</button>
                    </div>
                </div>

                {/* Description */}
                <div className="pr-4 border-r-2 border-mallow-pink/30 mb-10 text-slate-600 leading-relaxed space-y-4">
                    <p className="font-bold text-slate-800 text-lg">🎁 כל הטעמים האהובים במארז אחד!</p>
                    <p>קשה לבחור? לא חייבים! המארז המושלם שכולל אוסף של כל הטעמים הנפלאים שלנו.</p>
                    <p>פנקו את עצמכם או את יקיריכם עם חוויה מושלמת של מרשמלו רך, מושחת ומתוק להפליא.</p>

                    <ul className="space-y-2 list-none p-0 relative mt-4">
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mallow-pink mt-2 shrink-0"></div>מגוון של טעמים מתחלפים לבחירה</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mallow-pink mt-2 shrink-0"></div>ארוז בצורה יוקרתית ומרשימה</li>
                        <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-mallow-pink mt-2 shrink-0"></div>המתנה האידיאלית לכל אירוע משמח</li>
                    </ul>
                    <p className="font-bold text-slate-800 mt-6 pt-4 text-mallow-pink">המוצרים שלנו כשרים ובלי חומרים משמרים</p>
                </div>

                {/* Footer info within product */}
                <div className="border-t border-slate-200 pt-6 space-y-4">
                    <button className="flex items-center gap-2 text-sm text-slate-600 font-bold hover:text-mallow-pink transition-colors group">
                        <Share2 size={16} className="group-hover:scale-110 transition-transform" /> שתף
                    </button>
                </div>
            </div>
        </div>
    );
}
