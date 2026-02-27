import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import FloatingNotification from './components/FloatingNotification';
import AnimatedRoutes from './components/AnimatedRoutes';
import InitialReveal from './components/InitialReveal';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="font-sans text-slate-700 mallows-bg selection:bg-mallow-pink selection:text-white min-h-screen flex flex-col overflow-x-hidden relative w-full">
          <Navbar />
          <InitialReveal />
          <main className="flex-grow flex flex-col relative w-full overflow-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />
          <FloatingNotification />
        </div>
      </Router>
    </CartProvider>
  );
}
