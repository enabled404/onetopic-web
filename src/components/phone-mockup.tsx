"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image"; // Keep Image import as it's used in the app content

/* ────────────────────────────────────────────
   PHONE MOCKUP — S-TIER SOPHISTICATED
   • Restored raw, zero-latency cursor tracking for snappy tilt
   • Removed all noisy backgrounds and flat floating icons
   • Introduced a highly polished, Apple-grade Aurora Mesh 
     (Coral & Emerald) with premium cinematic noise grain
   ──────────────────────────────────────────── */

export default function PhoneMockup() {
    const ref = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 }); // Snappy raw tracking
    const [spot, setSpot] = useState({ x: 50, y: 50 });
    const [hover, setHover] = useState(false);
    const raf = useRef(0);

    const onMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;
        cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
            const r = ref.current!.getBoundingClientRect();
            // Relative cursor pos 0 to 1
            const nx = (e.clientX - r.left) / r.width;
            const ny = (e.clientY - r.top) / r.height;
            // Snappy raw tilt mapping
            setTilt({ x: (ny - 0.5) * -25, y: (nx - 0.5) * 25 });
            setSpot({ x: nx * 100, y: ny * 100 });
        });
    }, []);

    const onEnter = useCallback(() => setHover(true), []);
    const onLeave = useCallback(() => {
        setHover(false);
        setTilt({ x: 0, y: 0 });
        setSpot({ x: 50, y: 50 });
    }, []);

    useEffect(() => () => cancelAnimationFrame(raf.current), []);

    // Derived values
    const bezelAngle = 135 + tilt.y * 2.5;
    const sx = -tilt.y * 1.2;

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className="relative w-full max-w-[300px] mx-auto cursor-default py-[60px]"
            style={{ perspective: "1000px" }}
        >
            {/* ── S-TIER SOPHISTICATED MESH AURA ── 
                A pristine, minimal, grain-textured dual-color mesh gradient.
                Coral (#E8604C) meets Emerald (#10b981) — pure app palette.
            */}
            <div className="absolute inset-x-[-150px] inset-y-[-100px] pointer-events-none z-0 flex items-center justify-center transition-all duration-700 ease-out"
                style={{
                    opacity: hover ? 1 : 0.45,
                    transform: `scale(${hover ? 1.05 : 0.95})`,
                }}>

                {/* The deep, smooth bloom structure */}
                <div className="absolute inset-0 rounded-full overflow-hidden blur-[70px] mix-blend-screen opacity-90" style={{ transform: "translateZ(-100px)" }}>
                    {/* Emerald Base */}
                    <div className="absolute top-[10%] left-[20%] w-[50%] h-[50%] bg-[#10b981]/40 rounded-full mix-blend-screen animate-[spin_20s_linear_infinite]" />
                    {/* Coral Base */}
                    <div className="absolute bottom-[20%] right-[10%] w-[60%] h-[60%] bg-[#E8604C]/50 rounded-full mix-blend-screen animate-[spin_25s_linear_infinite_reverse]" />
                    {/* Deep Gold Accent */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#FBBF24]/30 rounded-full mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
                </div>

                {/* Premium details: An impossibly fine, perfectly crisp ambient orbit ring */}
                <div className="absolute w-[80%] pt-[80%] rounded-full border border-white/[0.04] shadow-[0_0_60px_rgba(255,255,255,0.02)_inset]"
                    style={{
                        transform: `translateZ(-50px) rotateX(${tilt.x * 0.4}deg) rotateY(${tilt.y * 0.4}deg)`,
                        transition: "transform 0.1s ease-out"
                    }}>
                    {/* Sub-surface illuminated arcs */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[#E8604C]/60 to-transparent blur-[1px]" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-[#10b981]/60 to-transparent blur-[1px]" />
                </div>

                {/* High-end cinematic noise grain overlay */}
                <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none rounded-full z-10 mask-radial"
                    style={{
                        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                        WebkitMaskImage: "radial-gradient(circle at center, black 40%, transparent 80%)"
                    }} />
            </div>

            {/* ══════ PHONE BODY ══════ */}
            <div
                className="relative z-20"
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                    transformStyle: "preserve-3d",
                    transition: hover ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.33,1,0.68,1)",
                }}
            >
                {/* ── DARK REFLECTIVE BEZEL — Space Black titanium ── */}
                <div
                    className="rounded-[52px] p-[8px] relative"
                    style={{
                        background: `linear-gradient(${bezelAngle}deg,
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
                    <div className="absolute -left-[3px] top-[19%] w-[4px] h-[3.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    <div className="absolute -left-[3px] top-[26%] w-[4px] h-[6.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    <div className="absolute -left-[3px] top-[35%] w-[4px] h-[6.5%] rounded-l-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "-1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />
                    <div className="absolute -right-[3px] top-[28%] w-[4px] h-[8.5%] rounded-r-[3px] z-30"
                        style={{ background: "linear-gradient(180deg, #2A2A30, #454550, #2A2A30)", boxShadow: "1px 0 3px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)" }} />

                    {/* ── SCREEN ── */}
                    <div className="rounded-[44px] overflow-hidden bg-black relative" style={{ aspectRatio: "9/18.5" }}>

                        {/* Smooth Glass Reflection Spotlight */}
                        <div
                            className="absolute inset-0 z-40 pointer-events-none rounded-[44px]"
                            style={{
                                opacity: hover ? 0.7 : 0.3,
                                background: `radial-gradient(350px circle at ${spot.x}% ${spot.y}%, rgba(255,255,255,0.08), transparent 60%)`,
                                transition: "opacity 0.4s",
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

                        {/* Edge light stripe — right side (subtle for dark bezel) */}
                        <div className="absolute top-[5%] bottom-[5%] w-[2px] -right-[1px] rounded-r-full z-30"
                            style={{
                                opacity: tilt.y > 1 ? Math.min(tilt.y / 10, 0.6) : 0,
                                background: "linear-gradient(180deg, transparent 5%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 80%, transparent 95%)",
                                filter: "blur(0.3px)",
                                transition: "opacity 0.15s",
                            }} />
                        {/* Edge light stripe — left side */}
                        <div className="absolute top-[5%] bottom-[5%] w-[2px] -left-[1px] rounded-l-full z-30"
                            style={{
                                opacity: tilt.y < -1 ? Math.min(Math.abs(tilt.y) / 10, 0.6) : 0,
                                background: "linear-gradient(180deg, transparent 5%, rgba(255,255,255,0.3) 20%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.3) 80%, transparent 95%)",
                                filter: "blur(0.3px)",
                                transition: "opacity 0.15s",
                            }} />
                        {/* Edge light stripe — top */}
                        <div className="absolute left-[6%] right-[6%] h-[2px] -top-[1px] rounded-t-full z-30"
                            style={{
                                opacity: tilt.x > 1 ? Math.min(tilt.x / 10, 0.4) : 0,
                                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.25) 70%, transparent)",
                                filter: "blur(0.3px)",
                                transition: "opacity 0.15s",
                            }} />
                    </div>

                    {/* Floor Reflection shadow tracking physics */}
                    <div className="absolute -bottom-8 inset-x-8 h-10 rounded-full z-0 pointer-events-none transition-all duration-300"
                        style={{
                            transform: `translateX(${sx}px)`,
                            opacity: hover ? 0.7 : 0.4,
                            background: "radial-gradient(ellipse, rgba(0,0,0,0.6) 0%, rgba(232,96,76,0.05) 50%, transparent 80%)",
                            filter: `blur(${hover ? 20 : 15}px)`
                        }} />
                </div>
            </div>
        </div>
    );
}
