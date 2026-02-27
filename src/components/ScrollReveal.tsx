import { motion } from 'motion/react';
import { ReactNode, useRef } from 'react';
import { useInView } from 'motion/react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    className?: string;
    key?: string | number;
}

export default function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = ''
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: 40, x: 0 };
            case 'down': return { y: -40, x: 0 };
            case 'left': return { x: 40, y: 0 };
            case 'right': return { x: -40, y: 0 };
            case 'none': return { x: 0, y: 0 };
            default: return { y: 40, x: 0 };
        }
    };

    const offset = getDirectionOffset();

    return (
        <span ref={ref} className={`block ${className}`}>
            <motion.div
                initial={{ opacity: 0, ...offset }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
                transition={{
                    duration: duration,
                    delay: delay,
                    ease: [0.22, 1, 0.36, 1]
                }}
            >
                {children}
            </motion.div>
        </span>
    );
}
