"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, PenLine, Users } from "lucide-react";
import MagneticCard from "./magnetic-card";
import TextReveal from "./animations";
import AuroraOrb from "./aurora-orb";

const steps = [
    {
        num: "01",
        icon: MessageCircle,
        title: "11:00 AM. One question drops.",
        desc: "Every single day, the world gets the same debate. No distractions. No other feeds. Just one question worth discussing.",
        color: "#38BDF8", // sky blue — conversation
    },
    {
        num: "02",
        icon: PenLine,
        title: "Pick a side. Make your case.",
        desc: "No performative hot takes. Write what you actually think. Defend your position with substance, not spectacle.",
        color: "#34D399", // emerald — writing/creation
    },
    {
        num: "03",
        icon: Users,
        title: "See how humanity thinks.",
        desc: "Real-time results. Global perspectives. No filter bubbles. Discover what people truly believe when they're not performing.",
        color: "#FBBF24", // amber — community warmth
    },
];

export default function HowItWorks() {
    const ref = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const laserTop = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "85%"]);

    return (
        <section ref={ref} id="how-it-works" className="relative py-16 sm:py-20 section-rich overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-[0.14] blur-[90px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,96,76,0.45), transparent 65%)" }} />
            <div className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] opacity-[0.08] blur-[70px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.4), transparent 60%)" }} />
            <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] opacity-[0.06] blur-[60px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(52,211,153,0.4), transparent 60%)" }} />
            {/* Grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-25 pointer-events-none" />

            <div className="relative z-10 container-standard">
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="section-label inline-flex">
                        How It Works
                    </motion.span>

                    <div className="mt-6">
                        <TextReveal className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-white text-center text-balance" delay={0.1}>
                            Dead simple.
                        </TextReveal>
                        <TextReveal className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-coral text-center text-balance" delay={0.2}>
                            Beautifully intentional.
                        </TextReveal>
                    </div>
                </div>

                {/* Vertical steps - CENTERED 8 COLS */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-start-3 md:col-span-8 relative">
                        {/* Track line */}
                        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.08] to-transparent" />
                        <motion.div className="absolute left-[27px] w-0.5 h-32 z-[1]"
                            style={{ top: laserTop, background: "linear-gradient(180deg, transparent, #E8604C 40%, #E8604C 60%, transparent)", borderRadius: 2, boxShadow: "0 0 12px rgba(232,96,76,0.5)" }} />

                        <div className="space-y-12">
                            {steps.map((step, i) => (
                                <motion.div key={step.num}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ duration: 0.5, delay: i * 0.15 }}
                                    className="flex gap-8 items-start relative">
                                    {/* Step marker */}
                                    <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#18181D] border border-white/[0.08] flex flex-col items-center justify-center gap-0.5 relative z-[2] shadow-xl">
                                        <AuroraOrb size={6} />
                                        <span className="step-counter text-xs">{step.num}</span>
                                    </div>

                                    {/* Card */}
                                    <MagneticCard className="p-8 sm:p-10 flex-1" variant="dark" tiltStrength={3}>
                                        <div className="icon-box mb-6 w-12 h-12 rounded-xl" style={{ background: `${step.color}18`, borderColor: `${step.color}30` }}>
                                            <step.icon className="w-5 h-5" style={{ color: step.color }} strokeWidth={1.8} />
                                        </div>
                                        <h3 className="text-xl font-bold text-heading mb-3 tracking-tight">{step.title}</h3>
                                        <p className="text-[15px] text-[#9A9A9F] leading-relaxed">{step.desc}</p>
                                    </MagneticCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Community note */}
                <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ delay: 0.15 }}
                    className="mt-20 text-center flex justify-center">
                    <MagneticCard className="inline-flex items-center gap-4 px-8 py-5 rounded-full" tiltStrength={4} variant="dark">
                        <Users className="w-5 h-5 text-[#E8604C] shrink-0" strokeWidth={1.8} />
                        <span className="text-[15px] text-heading font-medium tracking-wide">Propose topics. Vote on what matters. The community decides.</span>
                    </MagneticCard>
                </motion.div>
            </div>
        </section>
    );
}
