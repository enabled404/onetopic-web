"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function PixelTransition({
    children,
    className = ""
}: {
    children: React.ReactNode,
    className?: string
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Create a dense grid of 60x8 blocks = 480 tiny pixels
    const cols = 60;
    const rows = 8;
    const totalPixels = cols * rows;

    return (
        <div ref={containerRef} className={`relative inline-flex items-center justify-center overflow-visible ${className}`}>
            {/* Base Content layer */}
            <motion.div
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-0"
            >
                {children}
            </motion.div>

            {/* Exploding Pixel Overlay Mask */}
            {isMounted && (
                <div className="absolute -inset-3 z-10 flex flex-wrap pointer-events-none overflow-hidden">
                    {Array.from({ length: totalPixels }).map((_, i) => {
                        // Cascade randomly between 0.1s and 0.8s
                        const randomDelay = 0.1 + Math.random() * 0.7;

                        // Small chance (3%) to spawn a bright coral brand pixel instead of a dark one
                        const isBrand = Math.random() < 0.03;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 1, scale: 1.1 }}
                                animate={isInView ? { opacity: 0, scale: 0, rotate: isBrand ? 45 : 0 } : {}}
                                transition={{
                                    delay: randomDelay,
                                    duration: 0.4,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                                style={{
                                    width: `${100 / cols}%`,
                                    height: `${100 / rows}%`,
                                }}
                                className={`
                                    ${isBrand ? "bg-[#E8604C] shadow-[0_0_12px_#E8604C] z-20" : "bg-[#030304] border-[0.5px] border-white/[0.03]"}
                                `}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
