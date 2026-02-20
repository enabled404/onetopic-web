"use client";

import { motion } from "framer-motion";
import AuroraOrb from "./aurora-orb";
import PhoneMockup from "./phone-mockup";
import DownloadBtn from "./download-btn";

const APP_STORE_URL = "https://apps.apple.com/us/app/onetopic/id6754181660";
const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] h-auto flex flex-col items-center justify-center overflow-x-clip bg-[#030304] pt-24 sm:pt-28 pb-12 sm:pb-24 px-4 sm:px-6">

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
                    className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[7rem] font-semibold tracking-tighter text-white leading-[1.0] sm:leading-[0.95] mb-4 sm:mb-6 md:mb-8 lg:mb-[min(2rem,3vh)] text-balance max-w-5xl"
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
                    className="text-[0.95rem] sm:text-lg md:text-xl lg:text-2xl text-[#8A8A93] max-w-2xl mx-auto leading-relaxed text-balance mb-6 sm:mb-8 md:mb-10 lg:mb-[min(2.5rem,4vh)]"
                >
                    Every day, the world debates.<br />
                    No feed. No noise. Just <span className="text-white font-bold">one question that matters</span>.
                </motion.p>

                {/* 4. CTA Buttons — Premium glow treatment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease }}
                    className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10 sm:mb-16 md:mb-20 lg:mb-28"
                >
                    {/* S-Tier Interactive Download Button */}
                    <DownloadBtn size="lg" />

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
                    initial={{ opacity: 0, y: 40, rotateX: 25 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1.2, delay: 0.4, ease }}
                    className="scale-[0.85] sm:scale-100 origin-top"
                >
                    <PhoneMockup />
                </motion.div>
            </div>
        </section>
    );
}
