"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HolographicLogo() {
    const ref = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);

    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springing for the 3D rotation
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { damping: 20, stiffness: 150 });

    // Internal element parallax
    const innerX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });
    const innerY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 200 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        // Calculate raw relative coordinates (-0.5 to 0.5)
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div className="flex justify-center items-center py-6 perspective-[1200px]">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative cursor-pointer group w-40 h-40 md:w-48 md:h-48 flex items-center justify-center transform-style-3d"
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                {/* Master Ambient Bloom */}
                <div className="absolute inset-0 bg-[#E8604C] rounded-full blur-[60px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

                {/* 3D Glass Pedestal Base */}
                <div className="absolute inset-2 md:inset-4 rounded-3xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700 overflow-hidden">
                    {/* Hover glare highlight */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 25%, transparent 30%)' }}
                    />

                    {/* CSS noise overlay */}
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
                </div>

                {/* Outer Rotating Rings (Holographic Tech Vibe) */}
                <div className="absolute inset-0 rounded-full border border-white/5 border-t-[#E8604C]/30 animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-[-10px] rounded-full border border-white/5 border-b-white/20 animate-[spin_12s_linear_infinite_reverse]" />

                {/* The Floating Logo Asset */}
                <motion.div
                    className="relative z-20 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(232,96,76,0.3)] transition-transform duration-500 group-hover:scale-110"
                    style={{
                        x: innerX,
                        y: innerY,
                    }}
                >
                    <Image
                        src="/logo.png"
                        alt="OneTopic Logo"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Inner logo glare */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </motion.div>

                {/* Hover UI Bracket Accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

            </motion.div>
        </div>
    );
}
