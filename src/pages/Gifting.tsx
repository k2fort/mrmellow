import { Link } from 'react-router-dom';
import packImg from '../../assets/pack.png';

export default function Gifting() {
    return (
        <div className="pt-40 pb-24 px-6 relative mt-10 min-h-[calc(100vh-200px)] flex flex-col justify-center items-center" id="gifting">
            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center mb-16 relative z-10">
                    <h3 className="text-5xl font-display text-slate-800 mb-4">מארזים מיוחדים</h3>
                    <p className="text-slate-600">בחרו את המארז המושלם לכל אירוע</p>
                </div>

                <div className="flex justify-center items-center relative">
                    {/* Single Magical Gift Box item */}
                    <div className="w-full max-w-sm group floating-delayed">
                        <div className="bg-mallow-lavender h-full p-6 text-white rounded-[3rem] shadow-xl flex flex-col text-center transition-all border-b-8 border-r-8 border-mallow-pink/20 hover:shadow-mallow-lavender/40 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-mallow-pink/20 rounded-full blur-2xl"></div>

                            <div className="aspect-square rounded-[2rem] bg-white/10 flex items-center justify-center mb-6 border border-white/20 group-hover:bg-white/20 transition-colors duration-500 relative z-10 w-full overflow-hidden p-6">
                                <img src={packImg} alt="מארז של כל הטעמים" className="w-full h-full object-contain group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 drop-shadow-lg" />
                            </div>

                            <div className="text-center flex-grow flex flex-col relative z-10">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                                    הרכיבו בעצמכם
                                </span>
                                <h4 className="text-2xl font-display mt-1 text-white">מארז של כל הטעמים</h4>
                                <p className="opacity-90 mt-2 text-xl font-bold leading-relaxed px-2 text-white">
                                    החל מ-240 ש"ח
                                </p>

                                <div className="mt-auto pt-8">
                                    <Link
                                        to="/product/all-flavors-pack"
                                        aria-label="בחירת גודל למארז"
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
