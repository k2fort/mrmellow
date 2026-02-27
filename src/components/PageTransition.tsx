import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface PageTransitionProps {
    children: ReactNode;
    key?: string;
}

export default function PageTransition({ children, key }: PageTransitionProps) {
    return (
        <motion.div
            key={key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}
