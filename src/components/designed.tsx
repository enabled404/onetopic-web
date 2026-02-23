"use client";

import { motion } from "framer-motion";
import { Flame, PenLine, Lightbulb } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";

const cards = [
    {
        icon: Flame,
        tag: "Today's Debate",
        title: "One question. Two sides. Your move.",
        desc: "The only feed you need.",
        num: "01",
        color: "#FB923C", // orange — fire/flame
    },
    {
        icon: PenLine,
        tag: "Your Argument",
        title: "Say what you mean.",
        desc: "Your unfiltered perspective.",
        num: "02",
        color: "#34D399", // emerald — writing/creation
    },
    {
        icon: Lightbulb,
        tag: "Propose Tomorrow",
        title: "Shape the conversation.",
        desc: "You choose what we discuss next.",
        num: "03",
        color: "#FBBF24", // amber — idea/illumination
    },
];

export default function Designed() {
    return (
        <section id="about" className="relative py-16 sm:py-20 section-elevated overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12] blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(232,96,76,0.4), transparent 65%)" }} />

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
                            Experience
                        </span>

                        <div className="w-2 h-2 rounded-full bg-[#E8604C] shadow-[0_0_12px_rgba(232,96,76,0.9)] animate-[pulse_2s_infinite_1s]" />
                    </motion.div>
                </div>

                <div className="mt-6">
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                        Designed for
                    </TextReveal>
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.2}>
                        human connection.
                    </TextReveal>
                </div>

                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.3 }}
                    className="mt-5 text-lg text-[#8A8A93] leading-relaxed text-center max-w-2xl mx-auto">
                    Every pixel intentional. Every interaction meaningful.
                </motion.p>

                {/* 3 Col Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-16 sm:mt-24">
                    {cards.map((card, i) => (
                        <motion.div key={card.tag}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}>
                            <MagneticCard className="p-0 h-full flex flex-col overflow-hidden" variant="dark">
                                {/* Top content area */}
                                <div className="p-8 sm:p-10 flex-1 flex flex-col relative">
                                    {/* Prominent number */}
                                    <span
                                        className="absolute top-5 right-6 font-mono text-6xl font-black select-none pointer-events-none leading-none"
                                        style={{ color: card.color, opacity: 0.08 }}
                                    >
                                        {card.num}
                                    </span>

                                    {/* Glow behind icon */}
                                    <div
                                        className="absolute top-6 left-6 w-20 h-20 rounded-full blur-[25px] opacity-15 pointer-events-none"
                                        style={{ background: card.color }}
                                    />

                                    <div className="icon-box mb-5 w-12 h-12 rounded-xl relative z-10" style={{ background: `${card.color}18`, borderColor: `${card.color}30` }}>
                                        <card.icon className="w-5 h-5" style={{ color: card.color }} strokeWidth={1.8} />
                                    </div>

                                    <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase mb-3 block"
                                        style={{ color: card.color }}>
                                        {card.tag}
                                    </span>

                                    <h3 className="text-xl font-bold text-heading mb-3 tracking-tight leading-snug">{card.title}</h3>
                                    <p className="text-[15px] text-[#9A9A9F] leading-relaxed mt-auto">{card.desc}</p>
                                </div>

                                {/* Bottom accent bar */}
                                <div
                                    className="h-[3px] w-full"
                                    style={{ background: `linear-gradient(to right, ${card.color}, transparent 80%)`, opacity: 0.3 }}
                                />
                            </MagneticCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
