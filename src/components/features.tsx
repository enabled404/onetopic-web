"use client";

import { motion } from "framer-motion";
import { Equal, Clock, Globe, Shield } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";

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
        <section id="features" className="relative py-16 sm:py-20 section-elevated overflow-hidden">
            {/* Dot grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="section-label inline-flex">
                        The Solution
                    </motion.span>

                    <div className="mt-6">
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
                        One question. One day. Seven billion perspectives. No algorithm. No followers. No bullshit.
                    </motion.p>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {features.map((feature, i) => (
                        <motion.div key={feature.tag}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}>
                            <MagneticCard className="p-8 sm:p-10 h-full" variant="dark">
                                <div className="flex gap-6">
                                    <div className="icon-box shrink-0 mt-1 w-12 h-12" style={{ background: `${feature.color}18`, borderColor: `${feature.color}30` }}>
                                        <feature.icon className="w-5 h-5" style={{ color: feature.color }} strokeWidth={1.8} />
                                    </div>
                                    <div className="min-w-0">
                                        <span className="font-mono text-[11px] font-bold tracking-[0.08em] uppercase text-coral block mb-3">
                                            {feature.tag}
                                        </span>
                                        <h3 className="text-xl font-bold text-heading mb-3 tracking-tight leading-snug">{feature.title}</h3>
                                        <p className="text-[15px] text-[#9A9A9F] leading-relaxed">{feature.desc}</p>
                                    </div>
                                </div>
                            </MagneticCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
