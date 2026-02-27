import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Share2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import giftImg from '../assets/gift.png';

export default function GiftCardDetail() {
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    const denominations = [
        { label: '₪50.00', value: 50.00 },
        { label: '₪75.00', value: 75.00 },
        { label: '₪100.00', value: 100.00 },
        { label: '₪150.00', value: 150.00 },
        { label: '₪200.00', value: 200.00 },
        { label: '₪250.00', value: 250.00 },
        { label: '₪300.00', value: 300.00 }
    ];

    const [selectedDenomination, setSelectedDenomination] = useState(denominations[0]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const handleAddToCart = () => {
        addToCart({
            id: `gift-card-${selectedDenomination.value}`,
            name: `גיפט קארד מר שמלו (${selectedDenomination.label})`,
            price: selectedDenomination.value,
            image: giftImg
        });
    };

    return (
        <div className="pt-40 mt-8 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20" dir="rtl">
            {/* Images Section */}
            <div className="flex-1 space-y-4">
                <ScrollReveal direction="right" delay={0.1}>
                    <div className="aspect-square bg-slate-50 rounded-[3rem] p-12 flex items-center justify-center relative overflow-hidden shadow-sm border border-slate-100">
                        <img src={giftImg} alt="גיפט קארד מר שמלו" className="w-full h-full object-contain hover:scale-105 transition-transform duration-500 drop-shadow-xl" />
                    </div>
                </ScrollReveal>
            </div>

            {/* Product Details */}
            <div className="flex-[1.2] flex flex-col">
                <ScrollReveal direction="left" delay={0.1}>
                    <h1 className="text-4xl md:text-5xl font-display text-slate-800 mb-4">גיפט קארד מר שמלו</h1>
                </ScrollReveal>

                <ScrollReveal direction="left" delay={0.2} className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <span className="text-slate-500 text-sm">מחיר רגיל</span>
                        <span className="text-2xl font-bold text-slate-800">{selectedDenomination.value.toFixed(2)} ש״ח</span>
                    </div>
                    <p className="text-sm text-slate-500 mt-1">כולל מס. עלות משלוח מחושבת במהלך התשלום.</p>
                </ScrollReveal>

                {/* Denominations */}
                <ScrollReveal direction="left" delay={0.3} className="mb-8">
                    <p className="text-slate-800 font-bold mb-3">Denominations</p>
                    <div className="flex flex-wrap gap-3">
                        {denominations.map(denom => (
                            <button
                                key={denom.label}
                                onClick={() => setSelectedDenomination(denom)}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${selectedDenomination.label === denom.label
                                    ? 'bg-slate-800 text-white border-slate-800'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-800'
                                    }`}
                            >
                                {denom.label}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Quantity */}
                <ScrollReveal direction="left" delay={0.4} className="mb-8">
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
                </ScrollReveal>

                {/* Actions */}
                <ScrollReveal direction="up" delay={0.5} className="mb-6">
                    <label className="flex items-center gap-3 cursor-pointer text-slate-700 font-bold p-2 hover:bg-slate-50 rounded-lg transition-colors w-max">
                        <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-mallow-pink focus:ring-mallow-pink accent-mallow-pink cursor-pointer" />
                        <span>רוצה לשלוח זאת כמתנה</span>
                    </label>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.6} className="space-y-3 mb-10">
                    <button
                        onClick={handleAddToCart}
                        className="w-full bg-white border-2 border-slate-800 text-slate-800 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors"
                    >
                        הוספה לסל
                    </button>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal direction="up" delay={0.7} className="pr-4 border-r-2 border-mallow-pink/30 mb-10 text-slate-600 leading-relaxed space-y-4">
                    <p className="font-bold text-slate-800 text-lg">מחפשים את המתנה המושלמת ?</p>
                    <p>העניקו מתנה מתוקה ובלתי נשכחת שמתאימה לכל אחד</p>
                    <p>מתנה ייחודית עבור ימי הולדת מארזים וועדי עבודים מתנה לגננות מתנה שמשמחת אנשים</p>
                    <p className="font-bold text-slate-800 mt-6 pt-4 text-mallow-pink">המוצרים שלנו כשרים ובלי חומרים משמרים</p>
                </ScrollReveal>

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
