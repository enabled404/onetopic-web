"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

/* ────────────────────────────────────────────
   PHONE MOCKUP — FRAMER MOTION POWERED
   • Buttery smooth, mass/stiffness driven 3D springs
   • Deep, elegant, Apple-grade dark ambient background
   • Authentic volumetric 3D floating app icons 
   ──────────────────────────────────────────── */

export default function PhoneMockup() {
    const ref = useRef<HTMLDivElement>(null);

    // Track relative mouse position (-0.5 to 0.5)
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Ultra-smooth, premium spring physics
    const springConfig = { stiffness: 120, damping: 25, mass: 1.2 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    // Map to rotations (Opposite direction for natural 3D tilt)
    // When mouse moves right (positive X), phone should rotate around Y axis (look right)
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-22, 22]);
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

    // Independent Parallax limits for the floating 3D icons
    const float1X = useTransform(smoothX, [-0.5, 0.5], [-60, 60]);
    const float1Y = useTransform(smoothY, [-0.5, 0.5], [-60, 60]);

    const float2X = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
    const float2Y = useTransform(smoothY, [-0.5, 0.5], [-35, 35]);

    const float3X = useTransform(smoothX, [-0.5, 0.5], [-80, 80]);
    const float3Y = useTransform(smoothY, [-0.5, 0.5], [-80, 80]);

    // Spotlight gradient position inside the screen glass
    const spotlightX = useTransform(smoothX, [-0.5, 0.5], [80, 20]);
    const spotlightY = useTransform(smoothY, [-0.5, 0.5], [80, 20]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        // Return to neutral elegant rest state gracefully
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[300px] mx-auto cursor-default py-12"
            style={{ perspective: "1200px" }}
        >
            {/* ── S-TIER ELEGANT AMBIENT BACKGROUND ── 
                Replacing the loud plasma/rays with an ultra-premium, 
                deep cinematic dark bloom (billion-dollar minimalist tech identity). 
            */}
            <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
                {/* Core Deep Glow */}
                <div className="absolute w-[180%] h-[180%] bg-[#E8604C]/10 blur-[120px] rounded-full mix-blend-screen opacity-80" />
                {/* Secondary Warm Core */}
                <div className="absolute w-[100%] h-[100%] bg-gradient-to-tr from-[#38BDF8]/5 via-white/5 to-[#E8604C]/10 blur-[80px] rounded-full mix-blend-screen opacity-60" />
                {/* Extremely subtle, slow drifting volumetric particles (No harsh dust) */}
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{ x: useTransform(smoothX, [-0.5, 0.5], [-10, 10]), y: useTransform(smoothY, [-0.5, 0.5], [-10, 10]) }}
                >
                    <div className="absolute top-[20%] left-[20%] w-32 h-32 bg-white/5 blur-[30px] rounded-full animate-[pulse_6s_ease-in-out_infinite]" />
                    <div className="absolute bottom-[20%] right-[15%] w-48 h-48 bg-[#E8604C]/10 blur-[40px] rounded-full animate-[pulse_8s_ease-in-out_infinite_reverse]" />
                </motion.div>
            </div>

            {/* ══════ MASTER 3D ROTATION RIG ══════ */}
            <motion.div
                className="relative z-20"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                {/* ── 3D VOLUMETRIC FLOATING APPS ── */}
                <div className="absolute inset-0 pointer-events-none z-50 overflow-visible" style={{ transformStyle: "preserve-3d" }}>

                    {/* Icon 1: Deep Back Left (Orbiting behind phone) */}
                    <motion.div
                        className="absolute -left-16 top-12"
                        style={{ x: float1X, y: float1Y, z: -80, rotateZ: -15, rotateX: 10, rotateY: 20, transformStyle: "preserve-3d" }}
                    >
                        <div className="relative w-14 h-14 rounded-2xl bg-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-white/5 ring-1 ring-black/50 overflow-hidden backdrop-blur-3xl p-1" style={{ transform: "translateZ(10px)" }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            <Image src="/logo.png" alt="App Icon" width={64} height={64} quality={100} className="w-full h-full rounded-xl object-contain opacity-80 mix-blend-screen" />
                        </div>
                    </motion.div>

                    {/* Icon 2: Front Right (Popping out towards user) */}
                    <motion.div
                        className="absolute -right-14 top-1/3"
                        style={{ x: float3X, y: float3Y, z: 120, rotateZ: 8, rotateX: -5, rotateY: -15, transformStyle: "preserve-3d" }}
                    >
                        {/* Volumetric Layering to simulate actual 3D thickness */}
                        <div className="relative w-20 h-20 rounded-[20px] bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6),_0_0_40px_rgba(232,96,76,0.15)] border border-white/20 p-[6px]" style={{ transform: "translateZ(20px)" }}>
                            {/* Inner Glass Core */}
                            <div className="w-full h-full bg-black/40 rounded-[14px] flex items-center justify-center p-2 shadow-inner border border-white/10 relative overflow-hidden">
                                <motion.div className="absolute inset-0 bg-gradient-to-tl from-white/20 to-transparent mix-blend-overlay" />
                                <Image src="/logo.png" alt="App Icon" width={100} height={100} quality={100} className="w-full h-full rounded-[10px] object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Icon 3: High Front Left (Very close, highly parallaxed) */}
                    <motion.div
                        className="absolute -left-10 bottom-8"
                        style={{ x: float2X, y: float2Y, z: 160, rotateZ: -6, rotateX: 10, rotateY: 5, transformStyle: "preserve-3d" }}
                    >
                        <div className="relative w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#E8604C]/10 to-transparent backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),_0_0_20px_rgba(232,96,76,0.2)] border border-[#E8604C]/30 p-1.5" style={{ transform: "translateZ(10px)" }}>
                            <div className="w-full h-full bg-[#1A1A1E] rounded-xl flex items-center justify-center p-1.5 shadow-inner border border-white/5 overflow-hidden relative">
                                <motion.div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent mix-blend-overlay" />
                                <Image src="/logo.png" alt="App Icon" width={80} height={80} quality={100} className="w-full h-full rounded-lg object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── DARK REFLECTIVE BEZEL — Space Black titanium ── */}
                <div
                    className="rounded-[52px] p-[8px] relative"
                    style={{
                        background: `linear-gradient(135deg,
                            #1A1A1F 0%,
                            #2A2A30 6%,
                            #3A3A42 14%,
                            #454550 22%,
                            #3A3A42 30%,
                            #2D2D34 40%,
                            #222228 50%,
                            #2D2D34 60%,
                            #3E3E46 68%,
                            #4A4A52 74%,
                            #3A3A42 82%,
                            #2A2A30 90%,
                            #1A1A1F 100%
                        )`,
                    }}
                >
                    {/* ── Side Buttons ── */}
                    {/* Mute */}
                    <div className="absolute -left-[3px] top-[19%] w-[4px] h-[3.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    {/* Vol Up */}
                    <div className="absolute -left-[3px] top-[26%] w-[4px] h-[6.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    {/* Vol Down */}
                    <div className="absolute -left-[3px] top-[35%] w-[4px] h-[6.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    {/* Power */}
                    <div className="absolute -right-[3px] top-[28%] w-[4px] h-[8.5%] rounded-r-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />

                    {/* ── SCREEN ── */}
                    <div className="rounded-[44px] overflow-hidden bg-black relative" style={{ aspectRatio: "9/18.5" }}>

                        {/* Smooth 3D Glass Reflection Spotlight driven by Framer Motion */}
                        <motion.div
                            className="absolute inset-0 z-40 pointer-events-none rounded-[44px]"
                            style={{
                                background: useTransform(
                                    () => `radial-gradient(400px circle at ${spotlightX.get()}% ${spotlightY.get()}%, rgba(255,255,255,0.08), transparent 60%)`
                                )
                            }}
                        />

                        {/* Dynamic Island */}
                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[26px] bg-black rounded-full z-30 flex items-center justify-center">
                            <div className="w-[8px] h-[8px] rounded-full bg-[#1A1A1E] ring-1 ring-[#2A2A30]" />
                        </div>

                        {/* Status Bar */}
                        <div className="absolute top-0 inset-x-0 h-11 bg-white z-20 flex justify-between px-6 items-center pt-1.5">
                            <div className="text-[11px] text-black font-semibold">9:41</div>
                            <div className="flex gap-1 items-center">
                                <svg className="w-3.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z" /></svg>
                                <div className="w-5 h-2.5 rounded-[2px] border-[1.2px] border-black relative">
                                    <div className="absolute inset-[1px] right-[1.5px] bg-black rounded-[1px]" />
                                    <div className="absolute -right-[2.5px] top-1/2 -translate-y-1/2 w-[1.5px] h-1 bg-black rounded-r-sm" />
                                </div>
                            </div>
                        </div>

                        {/* ─── App Content ─── */}
                        <div className="h-full bg-[#F8F7F5] flex flex-col pt-10 pb-3 relative px-3">
                            <div className="flex items-center justify-center py-2 bg-white border-b border-gray-100 -mx-3 mb-2">
                                <div className="text-black font-bold text-[13px] tracking-tight">OneTopic</div>
                            </div>

                            <div className="flex-1 flex flex-col gap-1.5 min-h-0">
                                <div className="flex justify-center flex-shrink-0">
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200">
                                        <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-[9px] font-semibold text-emerald-700 tracking-wide">Active · 13h 23m</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-100 flex-shrink-0">
                                    <h3 className="text-black text-[0.9rem] font-bold leading-snug text-center mb-1 tracking-tight">Is social media a net positive for society?</h3>
                                    <div className="flex items-center justify-center gap-1.5 text-[9px] text-gray-400 font-medium">
                                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        2,847,291 votes
                                    </div>
                                </div>

                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 border border-emerald-200">
                                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        <span className="text-[10px] font-semibold text-emerald-700">You voted for Side B</span>
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl p-2.5 shadow-sm border border-gray-100 flex-shrink-0">
                                    <div className="text-[9px] font-bold text-gray-500 tracking-wide uppercase mb-2">Current Results</div>
                                    <div className="flex gap-2 mb-2">
                                        <div className="flex-1 text-center">
                                            <div className="text-[8px] font-semibold text-gray-400 mb-0.5">Side A</div>
                                            <div className="text-[18px] font-bold text-[#E8604C] leading-none tracking-tight">44%</div>
                                        </div>
                                        <div className="w-px bg-gray-100 self-stretch" />
                                        <div className="flex-1 text-center">
                                            <div className="text-[8px] font-semibold text-gray-400 mb-0.5">Side B</div>
                                            <div className="text-[18px] font-bold text-emerald-500 leading-none tracking-tight">56%</div>
                                        </div>
                                    </div>
                                    <div className="flex h-1.5 rounded-full overflow-hidden bg-gray-100 mb-2">
                                        <div className="bg-[#E8604C] rounded-l-full" style={{ width: "44%" }} />
                                        <div className="bg-emerald-400 rounded-r-full" style={{ width: "56%" }} />
                                    </div>
                                    <div className="flex gap-1.5">
                                        <div className="flex-1 bg-[#FFF5F3] rounded-lg px-2 py-1.5 text-center flex items-center justify-center">
                                            <span className="text-[8px] font-medium text-[#E8604C] leading-tight">Yes, it connects us</span>
                                        </div>
                                        <div className="flex-1 bg-emerald-50 rounded-lg px-2 py-1.5 text-center flex items-center justify-center">
                                            <span className="text-[8px] font-medium text-emerald-600 leading-tight">No, it divides us</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-0.5 flex-shrink-0">
                                    <div className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-2xl bg-[#1A1A1F] text-white cursor-pointer hover:bg-black transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                                        <span className="text-[12px] font-semibold">View Discussion</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Edge light stripes - Driven by Framer Motion springs */}
                        <motion.div className="absolute top-[5%] bottom-[5%] w-[2px] -right-[1px] rounded-r-full z-30"
                            style={{ opacity: useTransform(smoothX, [0.1, 0.5], [0, 0.6]), background: "linear-gradient(180deg, transparent 5%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 80%, transparent 95%)", filter: "blur(0.3px)" }} />
                        <motion.div className="absolute top-[5%] bottom-[5%] w-[2px] -left-[1px] rounded-l-full z-30"
                            style={{ opacity: useTransform(smoothX, [-0.1, -0.5], [0, 0.6]), background: "linear-gradient(180deg, transparent 5%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 80%, transparent 95%)", filter: "blur(0.3px)" }} />
                        <motion.div className="absolute left-[6%] right-[6%] h-[2px] -top-[1px] rounded-t-full z-30"
                            style={{ opacity: useTransform(smoothY, [0.1, 0.5], [0, 0.4]), background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 70%, transparent)", filter: "blur(0.3px)" }} />
                    </div>

                    {/* Floor Reflection shadow tracking physics */}
                    <motion.div className="absolute -bottom-8 inset-x-8 h-10 rounded-full z-0 pointer-events-none"
                        style={{
                            x: useTransform(smoothX, [-0.5, 0.5], [40, -40]),
                            opacity: 0.6,
                            background: "radial-gradient(ellipse, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 80%)",
                            filter: "blur(15px)"
                        }} />
                </div>
            </motion.div>
        </div>
    );
}
