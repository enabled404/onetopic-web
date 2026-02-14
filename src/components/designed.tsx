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
                {/* Header */}
                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="section-label inline-flex">
                        Experience
                    </motion.span>

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
                </div>

                {/* 3 Col Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
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
