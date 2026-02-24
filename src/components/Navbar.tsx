import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, Cloud, Trash2, Plus, Minus, User, ChevronRight, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { totalItems, isCartOpen, setIsCartOpen, items, updateQuantity, removeFromCart, totalPrice, checkoutUrl, isUpdating } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'מרשמלו', path: '/shop' },
    { name: 'צור קשר', path: '/contact' },
    { name: 'בלוג', path: '/blog' },
    { name: 'מארזים', path: '/gifting' },
  ];

  const announcements = [
    "מבצע מתוק עד ה- 01/04/2026 10% הנחה על כל האתר SWEET10",
    "משלוח חינם ברכישה מעל 199 ש\"ח",
  ];
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  const nextAnnouncement = () => setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  const prevAnnouncement = () => setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl flex flex-col gap-3">
        <div className={`transition-all duration-300 rounded-[2rem] px-6 sm:px-8 py-3 flex items-center justify-between relative ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl border-4 border-white shadow-2xl shadow-mallow-pink/20' : 'bg-transparent border-4 border-transparent'
          }`}>
          <Link to="/" className="flex items-center gap-2 group z-50">
            <img src={logo} alt="עולם המרשמלו" className="h-12 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-semibold hover:text-mallow-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink rounded-sm px-1 ${location.pathname === link.path ? 'text-mallow-pink' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button aria-label="Search" className="w-11 h-11 rounded-full bg-secondary/20 flex items-center justify-center text-slate-600 hover:bg-secondary transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2">
              <Search size={22} aria-hidden="true" />
            </button>
            <button aria-label="User Profile" className="hidden sm:flex w-11 h-11 rounded-full bg-mallow-lavender/20 items-center justify-center text-slate-600 hover:bg-mallow-lavender transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-lavender focus-visible:ring-offset-2">
              <User size={22} aria-hidden="true" />
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open cart"
              className="relative w-11 h-11 rounded-full bg-mallow-pink text-white flex items-center justify-center hover:scale-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2"
            >
              <ShoppingBag size={22} aria-hidden="true" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-slate-800 border-2 border-white">
                  {totalItems}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-[80px] left-0 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-mallow-pink/20 overflow-hidden md:hidden border-4 border-white z-40"
            >
              <div className="flex flex-col p-4 w-full text-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-bold hover:bg-mallow-pink/10 hover:text-mallow-pink py-4 px-6 rounded-xl transition-all ${location.pathname === link.path ? 'bg-mallow-pink/10 text-mallow-pink' : 'text-slate-600'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Announcement Banner */}
        <div className="bg-white/80 backdrop-blur-md rounded-full px-6 py-1.5 flex items-center justify-between shadow-lg shadow-mallow-pink/10 mx-auto w-fit max-w-[80vw] md:max-w-2xl border border-mallow-pink/20">
          <button onClick={prevAnnouncement} aria-label="הודעה קודמת" className="hover:bg-mallow-pink/10 p-1.5 rounded-full shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink text-mallow-pink">
            <ChevronRight size={18} />
          </button>
          <div className="grid px-4">
            {announcements.map((announcement, index) => (
              <span
                key={index}
                className={`col-start-1 row-start-1 text-center select-none text-xs md:text-sm font-bold tracking-wide text-mallow-pink whitespace-nowrap transition-opacity duration-300 ${currentAnnouncement === index ? 'opacity-100 z-10' : 'opacity-0 -z-10 pointer-events-none'
                  }`}
                dir="rtl"
              >
                {announcement}
              </span>
            ))}
          </div>
          <button onClick={nextAnnouncement} aria-label="הודעה הבאה" className="hover:bg-mallow-pink/10 p-1 rounded-full shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink text-mallow-pink">
            <ChevronLeft size={18} />
          </button>
        </div>
      </nav>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-slate-800/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="text-3xl font-display text-slate-800">תיק הקסמים שלך</h2>
                <button
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close cart"
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-mallow-pink hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                    <ShoppingBag size={64} className="text-mallow-pink" />
                    <p className="text-lg font-semibold text-slate-500">התיק שלך מרחף ריק!</p>
                  </div>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="flex gap-4 bg-mallow-cream p-4 rounded-3xl">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl" />
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <h3 className="font-display text-xl text-slate-800">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="text-slate-400 hover:text-red-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
                          >
                            <Trash2 size={18} aria-hidden="true" />
                          </button>
                        </div>
                        <p className="text-mallow-pink font-bold">₪{item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3 bg-white w-fit rounded-full p-1 shadow-sm">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-mallow-pink hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink"
                          >
                            <Minus size={14} aria-hidden="true" />
                          </button>
                          <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center hover:bg-mallow-pink hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink"
                          >
                            <Plus size={14} aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-white">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-slate-500">קסם כולל</span>
                    <span className="text-3xl font-display text-slate-800">₪{totalPrice.toFixed(2)}</span>
                  </div>
                  {checkoutUrl ? (
                    <a href={checkoutUrl} className="block text-center w-full bg-mallow-pink text-white py-4 rounded-full font-bold text-lg shadow-xl shadow-mallow-pink/30 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2">
                      {isUpdating ? 'מעדכן עגלה...' : 'לתשלום עכשיו ✨'}
                    </a>
                  ) : (
                    <button disabled className="w-full bg-mallow-pink/50 text-white py-4 rounded-full font-bold text-lg cursor-not-allowed">
                      טוען קופה...
                    </button>
                  )}
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
