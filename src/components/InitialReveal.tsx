import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../assets/logo.png';

export default function InitialReveal() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress to 100% over 1.6s
        const startTime = Date.now();
        const duration = 1600;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
            setProgress(newProgress);
        }, 20);

        // Hide the loader after 1.8 seconds (giving it 200ms at 100%)
        const timer = setTimeout(() => {
            setIsVisible(false);
            clearInterval(interval);
        }, 1800);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="initial-reveal"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: '-100vh', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] bg-mallow-pink flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Subtle background animated blobs */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute -top-20 -left-20 w-96 h-96 bg-white/20 blur-3xl rounded-full"
                    />
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/30 blur-3xl rounded-full"
                    />

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.4 } }}
                        transition={{
                            type: "spring",
                            damping: 15,
                            stiffness: 100,
                            delay: 0.2
                        }}
                        className="relative z-10 flex flex-col items-center gap-8 w-full max-w-sm px-6"
                    >
                        {/* Logo container strictly enlarged */}
                        <div className="w-56 h-56 md:w-80 md:h-80 bg-white rounded-blob shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center p-6">
                            <img src={logo} alt="Mr. Shmellow Logo" className="w-[90%] h-auto object-contain" />
                        </div>

                        {/* Loading Text & Status Bar*/}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex flex-col items-center gap-4 w-full"
                        >
                            <h2 className="text-white font-display text-2xl md:text-3xl tracking-wide font-bold" dir="rtl">
                                המרשמלו בהכנה
                                <span className="inline-block w-6 text-left ml-1 tracking-widest" dir="ltr">
                                    {Math.floor(Date.now() / 400) % 4 === 0 ? '' : Math.floor(Date.now() / 400) % 4 === 1 ? '.' : Math.floor(Date.now() / 400) % 4 === 2 ? '..' : '...'}
                                </span>
                            </h2>

                            <div className="w-full bg-white/30 rounded-full h-2.5 md:h-3 overflow-hidden shadow-inner">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear", duration: 0.1 }}
                                    className="bg-white h-full rounded-full"
                                />
                            </div>

                            <div className="text-white/90 font-bold text-lg font-mono">
                                {progress}%
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
