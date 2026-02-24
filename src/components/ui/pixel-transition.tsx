"use client";

import { motion, Variants } from "framer-motion";

export default function PixelTransition({
    text,
    className = ""
}: {
    text: string,
    className?: string
}) {
    const words = text.split(" ");

    // Parent orchestrator
    const containerVariants: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.035, // Fast smooth typing cascade
                delayChildren: 0.3, // Wait a moment for scroll settling
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={`flex flex-wrap justify-center text-white font-bold leading-snug tracking-wide ${className}`}
        >
            {words.map((word, wIdx) => (
                <span key={wIdx} className="inline-flex whitespace-nowrap mr-[0.3em] overflow-visible">
                    {word.split("").map((char, cIdx) => {
                        // Deterministic pseudo-random generation to prevent hydration mismatches
                        const seed = wIdx * 100 + cIdx;
                        const rx = (Math.sin(seed) * 150); // Generates values between -150 and 150
                        const ry = (Math.cos(seed) * 150);

                        // Wrapper intercepts stagger step
                        const wrapperVariants = {
                            hidden: { opacity: 1 },
                            visible: { opacity: 1 }
                        };

                        // The actual text character fades and shifts in
                        const charVariants: Variants = {
                            hidden: { opacity: 0, filter: "blur(12px)", scale: 0.5, y: 15 },
                            visible: {
                                opacity: 1,
                                filter: "blur(0px)",
                                scale: 1,
                                y: 0,
                                transition: { type: "spring" as const, stiffness: 200, damping: 15, mass: 0.5 }
                            }
                        };

                        // The micro-particle flies inward and detonates
                        const pVariant: Variants = {
                            hidden: { opacity: 0, x: rx, y: ry, scale: 0 },
                            visible: {
                                opacity: [0, 1, 1, 0],
                                x: [rx, rx * 0.5, 0, 0],
                                y: [ry, ry * 0.5, 0, 0],
                                scale: [0, 2, 4, 0], // explode on hit
                                transition: { duration: 0.5, ease: "easeIn" as const }
                            }
                        };

                        const isCoral = cIdx % 4 === 0;

                        return (
                            <motion.span
                                key={cIdx}
                                variants={wrapperVariants}
                                className="relative inline-block"
                            >
                                <motion.span variants={charVariants} className="relative z-10 inline-block">
                                    {char}
                                </motion.span>

                                <motion.span
                                    variants={pVariant}
                                    className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none rounded-full ${isCoral
                                        ? 'bg-[#E8604C] shadow-[0_0_15px_#E8604C]'
                                        : 'bg-white shadow-[0_0_12px_#ffffff]'
                                        }`}
                                />
                            </motion.span>
                        );
                    })}
                </span>
            ))}
        </motion.div>
    );
}
