import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music2, Phone } from 'lucide-react'; // Using Music2 as a stylistic approximation for TikTok
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-20 md:pt-32 pb-24 md:pb-16 relative overflow-hidden mt-auto">
      <div className="absolute top-0 inset-x-0 h-16 bg-mallow-cream rounded-b-[100%]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-10 md:gap-12 mb-12 md:mb-16 relative z-10 text-center md:text-right">
          <div className="col-span-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-start order-3 md:order-1 mt-4 md:mt-0">
            <div className="flex items-center gap-2 mb-2 md:mb-6">
              <img src={logo} alt="עולם המרשמלו" className="h-10 sm:h-16 w-auto object-contain" />
            </div>
            <div className="text-slate-400 leading-relaxed font-bold flex flex-col items-center md:items-start">
              <p className="mb-2 text-white text-[12px] sm:text-base">אנחנו כאן לכל שאלה</p>
              <a href="tel:0503605023" className="flex items-center gap-2 hover:text-mallow-pink transition-colors text-sm sm:text-base">
                <Phone size={18} className="text-mallow-pink" />
                <span dir="ltr">050-360-5023</span>
              </a>
            </div>
            <div className="flex gap-2 sm:gap-4 justify-center md:justify-start">
              <a href="#" aria-label="Facebook" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-mallow-pink hover:border-mallow-pink transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink">
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a href="#" aria-label="TikTok" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-black hover:border-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
                <Music2 size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="col-span-1 order-2 md:order-2 mt-4 md:mt-0 flex flex-col items-center md:items-start">
            <h4 className="font-bold text-secondary mb-4 md:mb-8 uppercase text-[11px] md:text-xs tracking-[0.2em]">דברים שימושיים</h4>
            <ul className="space-y-3 md:space-y-4 text-slate-400 text-sm md:text-base flex flex-col items-center md:items-start text-center md:text-right">
              <li><Link to="/shop" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">מרשמלו</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">צור קשר</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">בלוג</Link></li>
              <li><Link to="/gifting" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">מארזים</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-5 md:space-y-8 text-center md:text-right mb-6 md:mb-0 order-1 md:order-3 bg-slate-800/50 md:bg-transparent rounded-3xl p-6 md:p-0 border border-slate-700 md:border-none shadow-xl shadow-black/20 md:shadow-none">
            <h4 className="font-bold text-accent mb-2 md:mb-8 uppercase text-xs tracking-[0.2em] inline-block bg-accent/10 px-4 py-1.5 rounded-full md:bg-transparent md:px-0 md:py-0 md:rounded-none">הרשמו למועדון שלנו</h4>
            <p className="text-sm text-slate-400">היו הראשונים לשמוע על מבצעים ומוצרים חדשים</p>
            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 bg-slate-700/50 p-1.5 md:p-2 sm:rounded-full rounded-2xl border border-slate-600 focus-within:ring-2 focus-within:ring-mallow-pink focus-within:border-transparent w-full">
              <label htmlFor="newsletter" className="sr-only">כתובת אימייל</label>
              <input
                id="newsletter"
                type="email"
                placeholder="כתובת אימייל למבצעים"
                className="bg-transparent border-none focus:ring-0 px-4 py-3 sm:py-0 flex-1 text-sm outline-none text-white placeholder:text-slate-400 text-center md:text-right"
              />
              <button className="bg-mallow-pink text-white w-full sm:w-auto px-6 py-3.5 sm:py-2 rounded-xl sm:rounded-full text-sm font-bold shadow-lg shadow-mallow-pink/20 hover:bg-mallow-pink/90 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                הצטרפו
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[10px] sm:text-xs text-slate-500">
            © 2026, <a href="https://www.marshmallow.co.il" className="hover:text-mallow-pink transition-colors font-semibold" target="_blank" rel="noopener noreferrer">מרשמלו</a> כל הזכויות שמורות
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            עוצב על ידי <a href="https://www.tonysmosh.com" className="hover:text-secondary transition-colors font-semibold" target="_blank" rel="noopener noreferrer">TonySmosh</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
