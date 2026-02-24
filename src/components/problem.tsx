"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scroll, Megaphone, Theater } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";
import SectionBadge from "./ui/section-badge";

const problems = [
    {
        icon: Scroll,
        title: "Endless scrolling",
        desc: "Apps designed to trap you. Your time disappears. Your anxiety grows.",
        statValue: 2.5,
        statSuffix: "h",
        statLabel: "Daily avg screen time on social",
        color: "#F59E0B",
        decimals: 1,
    },
    {
        icon: Megaphone,
        title: "Shouting into the void",
        desc: "Algorithms decide who hears you. Followers matter more than substance.",
        statValue: 70,
        statSuffix: "%",
        statLabel: "Of posts never seen by followers",
        color: "#F43F5E",
        decimals: 0,
    },
    {
        icon: Theater,
        title: "Performance over truth",
        desc: "Everyone's performing. Nobody's connecting. We forgot how to have real conversations.",
        statValue: 89,
        statSuffix: "%",
        statLabel: "Feel social media is inauthentic",
        color: "#A78BFA",
        decimals: 0,
    },
];

/* ── Animated counter hook ── */
function useCountUp(target: number, decimals: number, isInView: boolean, duration = 2000) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const start = 0;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * eased;
            setValue(Number(current.toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
    }, [isInView, target, decimals, duration]);

    return value;
}

/* ── Stat card sub-component ── */
function StatCounter({ item, index }: { item: typeof problems[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const count = useCountUp(item.statValue, item.decimals, isInView);

    return (
        <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 100 }}
        >
            <MagneticCard className="h-full flex flex-col overflow-hidden bg-[#030304] border border-white/[0.04] rounded-2xl group transition-colors duration-700 hover:border-white/[0.08] shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]" variant="dark">
                {/* Background Dot Matrix illuminating on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 group-data-[hovering=true]:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                    style={{
                        backgroundImage: `radial-gradient(${item.color} 1.5px, transparent 1.5px)`,
                        backgroundSize: '20px 20px',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
                    }}
                />

                {/* Glassy Noise Overlay for premium texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                />

                {/* Tech Corner Crosshairs visible on hover */}
                <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/20 group-data-[hovering=true]:border-white/20 transition-colors duration-500" />
                <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-white/0 group-hover:border-white/20 group-data-[hovering=true]:border-white/20 transition-colors duration-500" />
                <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-white/0 group-hover:border-white/20 group-data-[hovering=true]:border-white/20 transition-colors duration-500 z-20" />
                <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/20 group-data-[hovering=true]:border-white/20 transition-colors duration-500 z-20" />

                {/* ── Top: Icon + Content ── */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col relative z-10 transition-transform duration-700 group-hover:-translate-y-1 group-data-[hovering=true]:-translate-y-1">

                    {/* Icon Pedestal (3D Glass) */}
                    <div className="relative mb-8 w-14 h-14">
                        {/* Underlying Ambient Bloom */}
                        <div
                            className="absolute inset-[-10px] rounded-full blur-[20px] opacity-20 group-hover:opacity-60 group-data-[hovering=true]:opacity-60 transition-opacity duration-700 pointer-events-none"
                            style={{ background: item.color }}
                        />

                        {/* Physical Glass Button Body */}
                        <div
                            className="absolute inset-0 rounded-2xl flex items-center justify-center border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 group-hover:scale-110 group-data-[hovering=true]:scale-110 group-hover:-translate-y-2 group-data-[hovering=true]:-translate-y-2 group-hover:rotate-[5deg] group-data-[hovering=true]:rotate-[5deg]"
                            style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%), ${item.color}15` }}
                        >
                            {/* Inner Top Glass Highlight */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                            {/* Icon */}
                            <item.icon className="w-6 h-6 relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-data-[hovering=true]:scale-110" style={{ color: item.color }} strokeWidth={1.8} />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug transition-all duration-500 group-hover:translate-x-1 group-data-[hovering=true]:translate-x-1"
                        style={{ textShadow: `0 0 40px ${item.color}00` }}>
                        {item.title}
                    </h3>

                    <p className="text-[15px] text-[#8A8A93] leading-relaxed flex-1 transition-all duration-500 group-hover:text-[#A0A0A5] group-data-[hovering=true]:text-[#A0A0A5] group-hover:translate-x-1 group-data-[hovering=true]:translate-x-1">
                        {item.desc}
                    </p>
                </div>

                {/* ── Bottom: Animated Stat ── */}
                <div
                    ref={ref}
                    className="px-8 sm:px-10 py-6 relative z-10 transition-transform duration-700 group-hover:-translate-y-1 group-data-[hovering=true]:-translate-y-1"
                    style={{
                        borderTop: `1px solid ${item.color}15`,
                        background: `linear-gradient(to right, ${item.color}08, transparent 70%)`,
                    }}
                >
                    {/* Stat glow accent */}
                    <div
                        className="absolute left-0 top-0 w-1 h-full rounded-r-full"
                        style={{ background: `linear-gradient(to bottom, ${item.color}, transparent)`, opacity: 0.5 }}
                    />
                    <div className="flex items-baseline gap-1">
                        <span
                            className="text-4xl font-mono font-bold tracking-tight tabular-nums transition-transform duration-500 group-hover:scale-105 group-data-[hovering=true]:scale-105 origin-left"
                            style={{ color: item.color }}
                        >
                            {count}
                        </span>
                        <span
                            className="text-2xl font-mono font-bold transition-opacity duration-500 group-hover:opacity-100 group-data-[hovering=true]:opacity-100"
                            style={{ color: item.color, opacity: 0.7 }}
                        >
                            {item.statSuffix}
                        </span>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#6A6A72] font-mono mt-1 group-hover:text-white/60 group-data-[hovering=true]:text-white/60 transition-colors duration-500">
                        {item.statLabel}
                    </div>
                </div>

                {/* Animated Bottom Laser Sweep */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02] overflow-hidden z-20">
                    <div
                        className="h-full w-full -translate-x-full group-hover:translate-x-full group-data-[hovering=true]:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100 group-data-[hovering=true]:opacity-100"
                        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                    />
                </div>
            </MagneticCard>
        </motion.div>
    );
}

export default function Problem() {
    return (
        <section className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 section-deep">
            {/* Grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Prominent S-Tier Glass Badge Header */}
                <SectionBadge title="The Problem" />

                <div className="mt-6">
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                        Social media gave us a voice.
                    </TextReveal>
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.25}>
                        Then stole our attention.
                    </TextReveal>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-24">
                    {problems.map((item, i) => (
                        <StatCounter key={item.title} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
