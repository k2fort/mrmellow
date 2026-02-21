import { Plus, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import img01 from '../assets/01.png';
import img001 from '../assets/001.png';
import giftImg from '../assets/gift.png';

export default function Shop() {
  const { addToCart } = useCart();

  const baseProduct = {
    name: 'מרשמלו בטעם מסטיק וסוכריות',
    tag: 'הקלאסיקה',
    tagColor: 'text-secondary',
    priceDisplay: 'החל מ-24 ש"ח',
    price: 24.00,
    image: img01,
    hoverImage: img001,
    animation: 'floating-slow',
    borderColor: 'border-mallow-pink/10',
    hoverShadow: 'hover:shadow-mallow-pink/30',
  };

  const products = [
    { id: 'bubblegum-jellybeans', ...baseProduct },
    { id: 'rose-garden', ...baseProduct },
    { id: 'coconut-cloud', ...baseProduct },
    { id: 'midnight-puff', ...baseProduct },
    { id: 'strawberry-magic', ...baseProduct },
    { id: 'salted-caramel', ...baseProduct },
    { id: 'tropical-lemon', ...baseProduct },
    { id: 'wild-berries', ...baseProduct },
    { id: 'rich-chocolate', ...baseProduct },
    { id: 'royal-pistachio', ...baseProduct },
    { id: 'fresh-mint', ...baseProduct },
  ];

  return (
    <div className="pt-40 pb-24 px-6 relative mt-10" id="shop">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 relative z-10">
          <h3 className="text-5xl font-display text-slate-800 mb-4">מזווה הקסמים</h3>
          <p className="text-slate-600">בחרו טעם מרחף כדי להתחיל את המסע שלכם</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative items-stretch">
          {products.map((product) => (
            <div key={product.id} className={`w-full group ${product.animation}`}>
              <div className={`bg-white h-full p-6 flex flex-col rounded-[3rem] shadow-xl transition-all border-b-8 border-r-8 ${product.borderColor} ${product.hoverShadow}`}>
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-slate-50 flex items-center justify-center relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                  {(product as any).hoverImage && (
                    <img
                      src={(product as any).hoverImage}
                      alt={`${product.name} hover`}
                      className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <span className={`text-xs font-bold uppercase tracking-widest ${product.tagColor}`}>
                    {product.tag}
                  </span>
                  <h4 className="text-2xl font-display text-slate-800 mt-1">{product.name}</h4>
                  <p className="text-mallow-pink font-bold text-xl mt-2">
                    {(product as any).priceDisplay || `₪${product.price.toFixed(2)}`}
                  </p>

                  <div className="mt-auto pt-4">
                    <Link
                      to={`/product/${product.id}`}
                      aria-label={`בחירת גודל עבור ${product.name}`}
                      className="w-full bg-mallow-pink/10 hover:bg-mallow-pink hover:text-white text-mallow-pink py-3 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2"
                    >
                      בחירת גודל
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 12th item: Magical Gift Box */}
          <div className="w-full group floating-delayed">
            <div className="bg-mallow-lavender h-full p-6 text-white rounded-[3rem] shadow-xl flex flex-col text-center transition-all border-b-8 border-r-8 border-mallow-pink/20 hover:shadow-mallow-lavender/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-mallow-pink/20 rounded-full blur-2xl"></div>

              <div className="aspect-square rounded-[2rem] bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:bg-white/20 transition-colors duration-500 relative z-10 w-full overflow-hidden p-6">
                <img src={giftImg} alt="Gift Card" className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg" />
              </div>

              <div className="text-center flex-grow flex flex-col relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                  הרכיבו בעצמכם
                </span>
                <h4 className="text-2xl font-display mt-1 text-white">גיפט קארד מר שמלו</h4>
                <p className="opacity-90 mt-2 text-xl font-bold leading-relaxed px-2 text-white">
                  החל מ-50 ש"ח
                </p>

                <div className="mt-auto pt-4">
                  <Link
                    to="/product/gift-card"
                    aria-label="בחירת גודל לגיפט קארד"
                    className="w-full bg-white text-mallow-lavender py-3 rounded-2xl font-bold text-sm shadow-md hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-mallow-lavender inline-block"
                  >
                    בחירת גודל
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
