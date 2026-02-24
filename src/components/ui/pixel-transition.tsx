"use client";

import { useInView, motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function PixelTransition({
    text,
    className = ""
}: {
    text: string,
    className?: string
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });
    const words = text.split(" ");

    // Prevent hydration mismatches by ensuring client-side execution
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    if (!isMounted) return <div className={className}><span className="opacity-0">{text}</span></div>;

    // Deterministic pseudo-random engine to provide pure scattering without React hydration errors or layout shifts
    const seededRandom = (seed: number) => {
        const x = Math.sin(seed) * 10000;
        return x - Math.floor(x);
    };

    return (
        <div ref={containerRef} className={`relative inline-flex flex-wrap justify-center ${className}`}>
            <span className="text-white font-bold relative z-10 py-1 leading-snug flex flex-wrap justify-center">
                {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-flex whitespace-nowrap mr-[0.3em]">
                        {word.split("").map((char, charIndex) => {
                            // Calculate cascade timing and unique seed ID
                            const globalIndex = wordIndex * 20 + charIndex;
                            const delay = 0.1 + (wordIndex * 0.12) + (charIndex * 0.04);

                            // Generate flying trajectory coordinates for the pixels hitting this exact letter
                            const p1X = (seededRandom(globalIndex) - 0.5) * 200;
                            const p1Y = (seededRandom(globalIndex + 10) - 0.5) * 200;
                            const p2X = (seededRandom(globalIndex + 20) - 0.5) * 200;
                            const p2Y = (seededRandom(globalIndex + 30) - 0.5) * 200;

                            return (
                                <span key={`${wordIndex}-${charIndex}`} className="relative inline-block">
                                    {/* The final typographic character forming from the pixel crash */}
                                    <motion.span
                                        initial={{ opacity: 0, filter: "blur(8px)", scale: 0.5 }}
                                        animate={isInView ? { opacity: 1, filter: "blur(0px)", scale: 1 } : {}}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: delay + 0.15 }}
                                        className="inline-block relative z-10"
                                    >
                                        {char}
                                    </motion.span>

                                    {/* The Primary White Pixel Shard */}
                                    <motion.div
                                        initial={{ opacity: 0, x: p1X, y: p1Y, scale: 0 }}
                                        animate={isInView ? { opacity: [0, 1, 0], x: 0, y: 0, scale: [0, 1.5, 0] } : {}}
                                        transition={{ duration: 0.4, ease: "circIn", delay }}
                                        className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_10px_#ffffff] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                                    />

                                    {/* The Secondary Coral Brand Pixel Shard */}
                                    <motion.div
                                        initial={{ opacity: 0, x: p2X, y: p2Y, scale: 0 }}
                                        animate={isInView ? { opacity: [0, 1, 0], x: 0, y: 0, scale: [0, 1.5, 0] } : {}}
                                        transition={{ duration: 0.5, ease: "backIn", delay: delay + 0.05 }}
                                        className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#E8604C] shadow-[0_0_15px_#E8604C] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none"
                                    />
                                </span>
                            );
                        })}
                    </span>
                ))}
            </span>
        </div>
    );
}
