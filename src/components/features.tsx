"use client";

import { motion } from "framer-motion";
import { Equal, Clock, Globe, Shield } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";
import SectionBadge from "./ui/section-badge";

const features = [
    {
        icon: Equal,
        title: "Everyone's voice matters equally.",
        desc: "Zero followers? No problem. Your opinion has the same weight as anyone else's. No algorithms pushing \"popular\" voices.",
        tag: "Equality",
        color: "#38BDF8", // sky blue — fairness
    },
    {
        icon: Clock,
        title: "One debate. Then you're done.",
        desc: "No endless feed. Make your point, see what others think, and get on with your life. Your time is precious.",
        tag: "Intentional",
        color: "#FBBF24", // amber — time
    },
    {
        icon: Globe,
        title: "See how the world really thinks.",
        desc: "Break out of your bubble. Understand perspectives from every corner of the globe. Real people. Real opinions.",
        tag: "Global",
        color: "#34D399", // emerald — world
    },
    {
        icon: Shield,
        title: "Substance over performance.",
        desc: "No likes. No retweets. No clout chasing. Just thoughtful debate on topics that actually matter.",
        tag: "Authentic",
        color: "#A78BFA", // violet — protection
    },
];

export default function Features() {
    return (
        <section id="features" className="relative py-16 sm:py-20 section-elevated">
            {/* Dot grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Prominent S-Tier Glass Badge Header */}
                <SectionBadge title="The Solution" />      <div className="mt-6">
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                        What if we all talked about
                    </TextReveal>
                    <TextReveal className="text-5xl sm:text-6xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.25}>
                        the same thing?
                    </TextReveal>
                </div>

                <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.35 }}
                    className="mt-6 text-lg text-[#8A8A93] leading-relaxed text-center max-w-2xl mx-auto">
                    One question. One day. Seven billion perspectives. <span className="text-white font-bold">No algorithm. No followers. No bullshit.</span>
                </motion.p>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-16 sm:mt-24">
                    {features.map((feature, i) => (
                        <motion.div key={feature.tag}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.7, delay: i * 0.15, type: "spring", stiffness: 100 }}>
                            <MagneticCard className="h-full flex flex-col overflow-hidden bg-[#030304] border border-white/[0.04] rounded-2xl group transition-colors duration-700 hover:border-white/[0.08] shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.8)]" variant="dark">

                                {/* Background Dot Matrix illuminating on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-screen"
                                    style={{
                                        backgroundImage: `radial-gradient(${feature.color} 1.5px, transparent 1.5px)`,
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
                                <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-white/0 group-hover:border-white/20 transition-colors duration-500 z-20" />
                                <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-white/0 group-hover:border-white/20 transition-colors duration-500 z-20" />

                                {/* Content area */}
                                <div className="p-8 sm:p-10 flex-1 flex flex-col relative z-10 transition-transform duration-700 group-hover:-translate-y-1">
                                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

                                        {/* Icon Pedestal (3D Glass) */}
                                        <div className="relative mb-6 sm:mb-0 w-14 h-14 shrink-0">
                                            {/* Underlying Ambient Bloom */}
                                            <div
                                                className="absolute inset-[-10px] rounded-full blur-[20px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none"
                                                style={{ background: feature.color }}
                                            />

                                            {/* Physical Glass Button Body */}
                                            <div
                                                className="absolute inset-0 rounded-2xl flex items-center justify-center border border-white/5 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-[5deg]"
                                                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%), ${feature.color}15` }}
                                            >
                                                {/* Inner Top Glass Highlight */}
                                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                                {/* Icon */}
                                                <feature.icon className="w-6 h-6 relative z-10 transform transition-transform duration-700 group-hover:scale-110" style={{ color: feature.color }} strokeWidth={1.8} />
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            {/* The Upgraded Typography Component we just did */}
                                            <span className="font-mono text-xs sm:text-[13px] font-black tracking-[0.25em] uppercase block mb-4 flex items-center gap-3 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)]"
                                                style={{ color: feature.color }}>
                                                <span className="w-1.5 h-1.5 rounded-full animate-pulse shadow-[0_0_10px_currentColor]" style={{ background: feature.color }} />
                                                {feature.tag}
                                            </span>

                                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 tracking-tight leading-snug transition-all duration-500 group-hover:translate-x-1"
                                                style={{ textShadow: `0 0 40px ${feature.color}00` }}>
                                                {feature.title}
                                            </h3>

                                            <p className="text-[15px] sm:text-base text-[#8A8A93] leading-relaxed transition-all duration-500 group-hover:text-[#A0A0A5] group-hover:translate-x-1">
                                                {feature.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Animated Bottom Laser Sweep */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/[0.02] overflow-hidden z-20">
                                    <div
                                        className="h-full w-full -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
                                        style={{ background: `linear-gradient(90deg, transparent, ${feature.color}, transparent)` }}
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
