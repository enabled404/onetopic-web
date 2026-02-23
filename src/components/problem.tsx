"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Scroll, Megaphone, Theater } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";

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
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <MagneticCard className="p-0 h-full flex flex-col overflow-hidden" variant="dark">
                {/* ── Top: Icon + Content ── */}
                <div className="p-8 sm:p-10 flex-1 flex flex-col relative">
                    {/* Subtle color glow behind icon */}
                    <div
                        className="absolute top-6 left-6 w-20 h-20 rounded-full blur-[30px] opacity-20 pointer-events-none"
                        style={{ background: item.color }}
                    />

                    <div
                        className="icon-box mb-5 w-12 h-12 relative z-10"
                        style={{ background: `${item.color}18`, borderColor: `${item.color}30` }}
                    >
                        <item.icon className="w-5 h-5" style={{ color: item.color }} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-xl font-bold text-heading mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-[15px] text-[#9A9A9F] leading-relaxed flex-1">{item.desc}</p>
                </div>

                {/* ── Bottom: Animated Stat ── */}
                <div
                    ref={ref}
                    className="px-8 sm:px-10 py-6 relative"
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
                            className="text-4xl font-mono font-bold tracking-tight tabular-nums"
                            style={{ color: item.color }}
                        >
                            {count}
                        </span>
                        <span
                            className="text-2xl font-mono font-bold"
                            style={{ color: item.color, opacity: 0.7 }}
                        >
                            {item.statSuffix}
                        </span>
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.08em] text-[#6A6A72] font-mono mt-1">
                        {item.statLabel}
                    </div>
                </div>
            </MagneticCard>
        </motion.div>
    );
}

export default function Problem() {
    return (
        <section className="relative py-16 sm:py-20 section-deep overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Prominent S-Tier Glass Badge Header */}
                <div className="mb-14 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 px-8 py-3.5 rounded-full bg-[#08080A]/90 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.03)_inset,0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E8604C]/0 via-[#E8604C]/10 to-[#E8604C]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
                        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full animate-[shimmer_3s_infinite_reverse]" />

                        <div className="w-2 h-2 rounded-full bg-[#E8604C] shadow-[0_0_12px_rgba(232,96,76,0.9)] animate-pulse" />

                        <span className="text-[13px] font-black tracking-[0.4em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] relative mt-px">
                            The Problem
                        </span>

                        <div className="w-2 h-2 rounded-full bg-[#E8604C] shadow-[0_0_12px_rgba(232,96,76,0.9)] animate-[pulse_2s_infinite_1s]" />
                    </motion.div>
                </div>

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
