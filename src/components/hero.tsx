"use client";

import { motion } from "framer-motion";
import AuroraOrb from "./aurora-orb";
import PhoneMockup from "./phone-mockup";

const APP_STORE_URL = "https://apps.apple.com/us/app/onetopic/id6754181660";
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-x-clip bg-[#030304] pt-20 pb-24">

            {/* Ambient Background Glows — strong enough to be clearly visible */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1400px] h-[900px] opacity-[0.35] blur-[100px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,96,76,0.6), rgba(232,96,76,0.15) 45%, transparent 70%)" }} />
            <div className="absolute bottom-[-5%] left-1/4 w-[700px] h-[700px] opacity-[0.2] blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.5), transparent 60%)" }} />
            {/* Focused warm glow behind phone area */}
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-[0.25] blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(232,96,76,0.5), rgba(255,154,139,0.2) 40%, transparent 65%)" }} />

            {/* Grid pattern removed — was creating sharp lines near the phone */}

            {/* Content Container */}
            <div className="relative z-10 container-standard flex flex-col items-center text-center">

                {/* 1. Badge — Siri Aurora Blob glow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="mb-[min(2rem,3vh)]"
                >
                    <div className="relative inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[0_0_40px_-12px_rgba(232,96,76,0.4)] backdrop-blur-xl transition-all hover:scale-105 hover:shadow-[0_0_60px_-10px_rgba(232,96,76,0.5)] cursor-default group">
                        {/* Siri aurora glow behind badge */}
                        <div className="absolute inset-0 rounded-full overflow-hidden">
                            <div className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                style={{ background: "conic-gradient(from 0deg, #E8604C, #FF9A8B, #C878D0, #78B8FF, #FFD4CC, #E8604C)", animation: "spin-border 3s linear infinite" }} />
                            <div className="absolute inset-[1px] rounded-full bg-[#0A0A0D]" />
                        </div>

                        <AuroraOrb size={12} className="relative z-10" />
                        <span className="relative z-10 text-[12px] font-semibold text-gray-200 tracking-[0.08em] uppercase">Live on App Store</span>
                    </div>
                </motion.div>

                {/* 2. Headline — Coral accent on third line */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease }}
                    className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-semibold tracking-tighter text-white leading-[0.95] mb-[min(2rem,3vh)] text-balance max-w-5xl"
                >
                    One question.<br />
                    One conversation.<br />
                    <span className="inline-block bg-gradient-to-r from-[#E8604C] via-[#FF8A6E] to-[#E8604C] bg-clip-text text-transparent"
                        style={{ backgroundSize: "200% 100%", animation: "shimmer-text 4s ease-in-out infinite" }}>
                        The whole world.
                    </span>
                </motion.h1>

                {/* 3. Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease }}
                    className="text-lg sm:text-xl md:text-2xl text-[#8A8A93] max-w-2xl mx-auto leading-relaxed text-balance mb-[min(3rem,4vh)]"
                >
                    Every day, the world debates.<br />
                    No feed. No noise. Just <span className="text-white font-bold">one question that matters</span>.
                </motion.p>

                {/* 4. CTA Buttons — Premium glow treatment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease }}
                    className="flex flex-col sm:flex-row items-center gap-4 mb-20 md:mb-28"
                >
                    {/* Download Button — Premium CSS glow */}
                    <a
                        href={APP_STORE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn-primary group"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-10">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                        </svg>
                        <span className="relative z-10 font-semibold">Download for iOS</span>
                    </a>

                    {/* How It Works — Glass pill */}
                    <a
                        href="#how-it-works"
                        className="hero-btn-ghost group"
                    >
                        <span className="relative z-10">How it Works</span>
                        <svg className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </motion.div>

                {/* 5. Interactive 3D Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, y: 100, rotateX: 25 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease }}
                >
                    <PhoneMockup />
                </motion.div>
            </div>
        </section>
    );
}
