"use client";

import { motion } from "framer-motion";
import { Flame, PenLine, Lightbulb } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";
import SectionBadge from "./ui/section-badge";
import PixelTransition from "./ui/pixel-transition";

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
        <section id="about" className="relative py-16 sm:py-20 section-elevated">
            {/* Ambient glows */}
            <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-[0.12] blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(232,96,76,0.4), transparent 65%)" }} />

            {/* Grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Prominent S-Tier Glass Badge Header */}
                <SectionBadge title="Experience" />

                <div className="mt-6">
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                        Designed for
                    </TextReveal>
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.2}>
                        human connection.
                    </TextReveal>
                </div>

                <div className="mt-5 text-lg text-[#8A8A93] leading-relaxed text-center max-w-2xl mx-auto flex justify-center">
                    <PixelTransition text="Every pixel intentional. Every interaction meaningful." />
                </div>

                {/* 3 Col Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-16 sm:mt-24">
                    {cards.map((card, i) => (
                        <motion.div key={card.tag}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100 }}>
                            <MagneticCard className="h-full flex flex-col overflow-hidden bg-[#030304] border border-white/[0.04] rounded-2xl group transition-colors duration-700 hover:border-white/[0.08] shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]" variant="dark">

                                {/* Background Dot Matrix illuminating on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                                    style={{
                                        backgroundImage: `radial-gradient(${card.color} 1.5px, transparent 1.5px)`,
                                        backgroundSize: '20px 20px',
                                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
                                    }}
                                />

                                {/* Glassy Noise Overlay for premium texture */}
                                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
                                />

                                {/* Tech Corner Crosshairs visible on hover */}
                                <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-white/0 group-hover:border-white/20 transition-colors duration-500" />
                                <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-white/0 group-hover:border-white/20 transition-colors duration-500" />
                                <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-white/0 group-hover:border-white/20 transition-colors duration-500" />
                                <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/20 transition-colors duration-500" />

                                {/* Top content area */}
                                <div className="p-8 sm:p-10 flex-1 flex flex-col relative z-10 transition-transform duration-700 group-hover:-translate-y-1">

                                    {/* Prominent Number (Outline -> Fill + Blur on hover) */}
                                    <div className="absolute top-6 right-8 select-none pointer-events-none" style={{ perspective: "500px" }}>
                                        <div className="relative transition-transform duration-700 group-hover:rotate-x-[-15deg] group-hover:rotate-y-[15deg]" style={{ transformStyle: "preserve-3d" }}>
                                            <span
                                                className="font-mono text-7xl font-black leading-none block transition-all duration-700"
                                                style={{
                                                    WebkitTextStroke: `1px ${card.color}`,
                                                    color: 'transparent',
                                                    opacity: 0.15
                                                }}
                                            >
                                                {card.num}
                                            </span>
                                            {/* Glowing core that reveals */}
                                            <span className="absolute inset-0 font-mono text-7xl font-black leading-none block opacity-0 group-hover:opacity-30 transition-all duration-700 blur-[12px]" style={{ color: card.color }}>
                                                {card.num}
                                            </span>
                                            {/* Solid fill that reveals */}
                                            <span className="absolute inset-0 font-mono text-7xl font-black leading-none block opacity-0 group-hover:opacity-25 transition-all duration-700" style={{ color: card.color }}>
                                                {card.num}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Icon Pedestal (3D Glass) */}
                                    <div className="relative mb-12 w-14 h-14">
                                        {/* Underlying Ambient Bloom */}
                                        <div
                                            className="absolute inset-[-10px] rounded-full blur-[20px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                                            style={{ background: card.color }}
                                        />

                                        {/* Physical Glass Button Body */}
                                        <div
                                            className="absolute inset-0 rounded-2xl flex items-center justify-center border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-[5deg]"
                                            style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%), ${card.color}15` }}
                                        >
                                            {/* Inner Top Glass Highlight */}
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                            {/* Icon */}
                                            <card.icon className="w-6 h-6 relative z-10 transform transition-transform duration-700 group-hover:scale-110" style={{ color: card.color }} strokeWidth={1.8} />
                                        </div>
                                    </div>

                                    {/* Typography Layout */}
                                    <div className="mt-auto relative z-20">
                                        <span className="font-mono text-[11px] font-bold tracking-[0.15em] uppercase mb-4 flex items-center gap-2"
                                            style={{ color: card.color }}>
                                            <span className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ background: card.color }} />
                                            {card.tag}
                                        </span>

                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-snug transition-all duration-500 group-hover:translate-x-1"
                                            style={{ textShadow: `0 0 40px ${card.color}00` }}>
                                            {card.title}
                                        </h3>

                                        <p className="text-[15px] text-[#8A8A93] leading-relaxed transition-all duration-500 group-hover:text-[#A0A0A5] group-hover:translate-x-1">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Animated Bottom Laser Sweep */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02] overflow-hidden">
                                    <div
                                        className="h-full w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
                                        style={{ background: `linear-gradient(90deg, transparent, ${card.color}, transparent)` }}
                                    />
                                </div>
                            </MagneticCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
