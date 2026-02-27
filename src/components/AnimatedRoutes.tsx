import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import PageTransition from './PageTransition';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import ProductDetail from '../pages/ProductDetail';
import GiftCardDetail from '../pages/GiftCardDetail';
import AllFlavorsPackDetail from '../pages/AllFlavorsPackDetail';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';
import Gifting from '../pages/Gifting';

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location}>
                <Route path="/" element={<PageTransition key="home"><Home /></PageTransition>} />
                <Route path="/shop" element={<PageTransition key="shop"><Shop /></PageTransition>} />
                <Route path="/product/gift-card" element={<PageTransition key="giftcard"><GiftCardDetail /></PageTransition>} />
                <Route path="/product/all-flavors-pack" element={<PageTransition key="pack"><AllFlavorsPackDetail /></PageTransition>} />
                <Route path="/product/:id" element={<PageTransition key="product"><ProductDetail /></PageTransition>} />
                <Route path="/contact" element={<PageTransition key="contact"><Contact /></PageTransition>} />
                <Route path="/blog" element={<PageTransition key="blog"><Blog /></PageTransition>} />
                <Route path="/gifting" element={<PageTransition key="gifting"><Gifting /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}
