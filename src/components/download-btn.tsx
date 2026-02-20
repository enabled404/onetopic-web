"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useRef, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/us/app/onetopic/id6754181660";

interface DownloadBtnProps {
    className?: string;
    size?: "sm" | "md" | "lg";
    label?: string;
}

export default function DownloadBtn({ className = "", size = "md", label = "Download for iOS" }: DownloadBtnProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Magnetic effect state
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;

        const { left, top, width, height } = ref.current.getBoundingClientRect();

        // Spotlight calculation
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);

        // Magnetic hover calculation (subtle pull towards cursor)
        const middleX = width / 2;
        const middleY = height / 2;
        const offsetX = ((e.clientX - left) - middleX) / 6; // Magnetic strength divider
        const offsetY = ((e.clientY - top) - middleY) / 6;

        setPosition({ x: offsetX, y: offsetY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 }); // Snap back
    };

    // Sizing system
    const sizeClasses = {
        sm: "px-4 py-2 min-h-[40px] text-[13px]",
        md: "px-6 py-[13px] min-h-[50px] text-[14.5px]",
        lg: "px-8 py-4 min-h-[60px] text-[16px]",
    };

    const iconSizes = {
        sm: "w-[16px] h-[16px]",
        md: "w-[18px] h-[18px]",
        lg: "w-[22px] h-[22px]",
    };

    return (
        <motion.a
            ref={ref}
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={`
                group relative inline-flex items-center justify-center gap-2.5 
                rounded-full overflow-hidden font-medium
                bg-[#08080A] border border-white/5
                shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_4px_24px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_8px_32px_rgba(0,0,0,0.6),0_0_50px_rgba(232,96,76,0.25)]
                transition-shadow duration-500 will-change-transform
                ${sizeClasses[size]}
                ${className}
            `}
            style={{ WebkitTapHighlightColor: "transparent" }}
        >
            {/* 1. Spinning gradient border layer under mask */}
            <div className="absolute inset-[-4px] -z-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0%,#E8604C_20%,#FF9A8B_40%,transparent_60%,#3DDC84_80%,transparent_100%)] animate-[spin_3s_linear_infinite] blur-[2px]" />
            </div>

            {/* 2. Inner Black Mask to hide spinning border center */}
            <div className="absolute inset-[1px] -z-10 rounded-full bg-[#08080A]" />

            {/* 3. Base Glass Layer */}
            <div className="absolute inset-[1px] -z-10 rounded-full bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-xl pointer-events-none" />

            {/* 4. Top inner glass reflection */}
            <div className="absolute top-[1px] inset-x-[2px] -z-10 pointer-events-none rounded-t-full bg-gradient-to-b from-white/[0.12] to-transparent h-[40%]" />

            {/* 5. Subtle base warmth always present */}
            <div className="absolute bottom-0 inset-x-0 h-1/2 -z-10 rounded-b-full bg-gradient-to-t from-[#E8604C]/20 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

            {/* 6. Mouse tracking ambient spotlight effect (Active on Hover) */}
            <motion.div
                className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen pointer-events-none"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            140px circle at ${mouseX}px ${mouseY}px,
                            rgba(232, 96, 76, 0.4),
                            transparent 100%
                        )
                    `,
                }}
            />

            {/* 7. Mouse tracking core pinpoint spotlight */}
            <motion.div
                className="absolute inset-0 -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen pointer-events-none"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            50px circle at ${mouseX}px ${mouseY}px,
                            rgba(255, 255, 255, 0.2),
                            transparent 100%
                        )
                    `,
                }}
            />

            {/* Content Container (Scale active on click) */}
            <div className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-active:scale-95">
                {/* Apple SVG Icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className={`text-white/80 group-hover:text-white transition-colors duration-300 ${iconSizes[size]} drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]`}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                {/* Text Label */}
                <span className="font-semibold text-white/90 group-hover:text-white transition-colors duration-300 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                    {label}
                </span>
            </div>

            {/* Shimmer line across top border */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.a>
    );
}
