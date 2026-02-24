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
                className="relative cursor-pointer group w-56 h-56 md:w-64 md:h-64 flex items-center justify-center transform-style-3d"
                style={{
                    rotateX,
                    rotateY,
                }}
            >
                {/* Master Ambient Bloom */}
                <div className="absolute inset-0 bg-[#E8604C] rounded-full blur-[70px] opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

                {/* 3D Glass Pedestal Base */}
                <div className="absolute inset-2 md:inset-4 rounded-[2rem] border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] transition-transform duration-700 overflow-hidden">
                    {/* Hover glare highlight */}
                    <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay"
                        style={{ background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.3) 25%, transparent 30%)' }}
                    />

                    {/* CSS noise overlay */}
                    <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")' }} />
                </div>

                {/* Outer Rotating Rings (Holographic Tech Vibe) */}
                <div className="absolute inset-0 rounded-[2rem] border border-white/5 border-t-[#E8604C]/30 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-[-10px] rounded-[2.5rem] border border-white/5 border-b-white/20 animate-[spin_15s_linear_infinite_reverse]" />

                {/* The Floating Logo Asset + 3D Text */}
                <motion.div
                    className="relative z-20 flex flex-col items-center justify-center gap-5 transition-transform duration-500 group-hover:scale-105"
                    style={{
                        x: innerX,
                        y: innerY,
                        translateZ: 30, // 3D pop effect
                    }}
                >
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(232,96,76,0.4)] transition-transform duration-500 group-hover:-translate-y-1">
                        <Image
                            src="/logo.png"
                            alt="OneTopic Logo"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Inner logo glare */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* The 3D S-Tier Brand Text */}
                    <div className="text-xl md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.25em] text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500 group-hover:text-white group-hover:drop-shadow-[0_0_25px_rgba(232,96,76,0.8)] group-hover:translate-y-1 pl-1">
                        ONETOPIC
                    </div>
                </motion.div>

                {/* Hover UI Bracket Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#E8604C]/0 group-hover:border-[#E8604C]/80 transition-all duration-300 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

            </motion.div>
        </div>
    );
}
