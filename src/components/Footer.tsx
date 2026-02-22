import { Link } from 'react-router-dom';
import { Facebook, Instagram, Music2, Phone } from 'lucide-react'; // Using Music2 as a stylistic approximation for TikTok
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white pt-32 pb-16 relative overflow-hidden mt-auto">
      <div className="absolute top-0 inset-x-0 h-16 bg-mallow-cream rounded-b-[100%]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 relative z-10">
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="עולם המרשמלו" className="h-16 w-auto object-contain" />
            </div>
            <div className="text-slate-400 leading-relaxed font-bold">
              <p className="mb-2 text-white">אנחנו כאן לכל שאלה</p>
              <a href="tel:0503605023" className="flex items-center gap-2 hover:text-mallow-pink transition-colors">
                <Phone size={18} className="text-mallow-pink" />
                <span dir="ltr">050-360-5023</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <Facebook size={16} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-mallow-pink hover:border-mallow-pink transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink">
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-black hover:border-slate-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500">
                <Music2 size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-secondary mb-8 uppercase text-xs tracking-[0.2em]">דברים שימושיים</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/shop" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">מרשמלו</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">צור קשר</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">בלוג</Link></li>
              <li><Link to="/gifting" className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1">מארזים</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-accent mb-8 uppercase text-xs tracking-[0.2em]">הרשמו למועדון שלנו</h4>
            <p className="text-sm text-slate-400">היו הראשונים לשמוע על מבצעים ומוצרים חדשים</p>
            <div className="flex flex-col sm:flex-row gap-3 bg-slate-700/50 p-2 sm:rounded-full rounded-2xl border border-slate-600 focus-within:ring-2 focus-within:ring-mallow-pink focus-within:border-transparent">
              <label htmlFor="newsletter" className="sr-only">כתובת אימייל</label>
              <input
                id="newsletter"
                type="email"
                placeholder="כתובת אימייל"
                className="bg-transparent border-none focus:ring-0 px-4 py-2 sm:py-0 flex-1 text-sm outline-none text-white placeholder:text-slate-400"
              />
              <button className="bg-mallow-pink text-white w-full sm:w-auto px-6 py-3 sm:py-2 rounded-xl sm:rounded-full text-sm font-bold hover:bg-mallow-pink/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-800">
                הצטרפו
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500">
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
