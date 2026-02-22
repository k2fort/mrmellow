import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import GiftCardDetail from './pages/GiftCardDetail';
import AllFlavorsPackDetail from './pages/AllFlavorsPackDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gifting from './pages/Gifting';
import { CartProvider } from './context/CartContext';
import FloatingNotification from './components/FloatingNotification';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="font-sans text-slate-700 mallows-bg selection:bg-mallow-pink selection:text-white min-h-screen flex flex-col overflow-x-hidden relative w-full">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/gift-card" element={<GiftCardDetail />} />
              <Route path="/product/all-flavors-pack" element={<AllFlavorsPackDetail />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/gifting" element={<Gifting />} />
            </Routes>
          </main>
          <Footer />
          <FloatingNotification />
        </div>
      </Router>
    </CartProvider>
  );
}
