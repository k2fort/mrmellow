import React, { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import hamanya from '../assets/hamanya.png';
import sweetime from '../assets/sweetime.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingNotification() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    return (
        <div dir="rtl">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[990] bg-black/40 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isOpen ? (
                    <div className="fixed bottom-6 right-6 z-[999] floating-slow cursor-pointer origin-bottom-right">
                        <motion.div
                            key="closed-blob"
                            layoutId="floating-blob"
                            className="w-[130px] h-[130px]"
                            onClick={(e) => { setIsOpen(true); e.stopPropagation(); }}
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <div className="absolute inset-0 bg-mallow-pink/60 blur-xl opacity-60 animate-blob hover:opacity-100 transition-opacity"></div>
                            <div className="relative w-full h-full bg-white/95 backdrop-blur-md border-[3px] border-mallow-pink flex flex-col items-center justify-center p-2 shadow-xl animate-blob hover:scale-105 transition-transform hover:shadow-mallow-pink/40">
                                <motion.div
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
                                    className="flex flex-col items-center w-full justify-center"
                                >
                                    <div className="bg-mallow-pink/20 p-2 rounded-full shrink-0 mb-1">
                                        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-mallow-pink animate-pulse" />
                                    </div>
                                    <p className="font-bold text-slate-800 text-[11px] sm:text-xs leading-tight text-center">
                                        בשורה משמחת<br />במיוחד!
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : (
                    <div className="fixed inset-0 z-[999] flex items-center justify-center pointer-events-none p-4 sm:p-8">
                        <motion.div
                            key="open-blob"
                            layoutId="floating-blob"
                            className="relative w-full max-w-4xl h-full max-h-[70vh] sm:max-h-[700px] pointer-events-auto origin-center"
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <div className="absolute inset-0 bg-mallow-pink/60 blur-xl opacity-80 animate-blob-large"></div>
                            <div className="relative w-full h-full bg-white/95 backdrop-blur-md border-[3px] border-mallow-pink flex flex-col items-center justify-center px-6 sm:px-12 shadow-2xl shadow-mallow-pink/30 animate-blob-large overflow-hidden">

                                <button
                                    onClick={(e) => { setIsOpen(false); e.stopPropagation(); }}
                                    className="absolute top-6 right-6 p-2 sm:p-3 text-slate-400 hover:text-mallow-pink bg-slate-100/80 hover:bg-mallow-pink/20 rounded-full transition-all hover:rotate-90 z-20"
                                >
                                    <X className="w-6 h-6 sm:w-8 sm:h-8" />
                                </button>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: 0.1 }}
                                    className="flex flex-col items-center w-full relative z-10"
                                >
                                    <div className="bg-mallow-pink/15 p-4 sm:p-6 rounded-full shrink-0 mb-4 sm:mb-8">
                                        <Sparkles className="w-10 h-10 sm:w-16 sm:h-16 text-mallow-pink animate-pulse" />
                                    </div>
                                    <p className="font-bold text-3xl sm:text-6xl leading-tight text-center">
                                        <span className="bg-gradient-to-l from-mallow-pink to-primary bg-clip-text text-transparent drop-shadow-sm">
                                            בשורה משמחת במיוחד!
                                        </span>
                                    </p>
                                    <span className="font-medium text-xl sm:text-4xl text-slate-600 mt-4 sm:mt-10 block text-center">
                                        מהיום אפשר למצוא אותנו בכל הסניפים של -
                                    </span>

                                    <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 mt-8 sm:mt-16">
                                        <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-12 rounded-[40px] shadow-lg border border-mallow-pink/20 w-full sm:flex-1 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group/img h-28 sm:h-64">
                                            <img src={hamanya} alt="Hamanya" className="max-w-[120px] sm:max-w-[280px] max-h-16 sm:max-h-48 object-contain group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-md" />
                                        </div>
                                        <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-12 rounded-[40px] shadow-lg border border-mallow-pink/20 w-full sm:flex-1 flex items-center justify-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group/img h-28 sm:h-64">
                                            <img src={sweetime} alt="Sweetime" className="max-w-[120px] sm:max-w-[280px] max-h-16 sm:max-h-48 object-contain group-hover:scale-110 transition-transform duration-500 hover:drop-shadow-md" />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
