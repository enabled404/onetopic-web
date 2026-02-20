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

const TimelineVisual = ({ index }: { index: number }) => {
    if (index === 0) {
        return (
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] opacity-80 mix-blend-screen pointer-events-none mt-10">
                {/* 3D Sonar Drop Ripple */}
                <div className="relative w-80 h-80 flex items-center justify-center" style={{ transform: "rotateX(60deg) rotateZ(-30deg)", transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-0 rounded-full border border-[#38BDF8]/30 shadow-[0_0_50px_rgba(56,189,248,0.2)_inset] animate-[ping_4s_ease-out_infinite]" />
                    <div className="absolute inset-6 rounded-full border border-[#38BDF8]/40 animate-[ping_4s_ease-out_infinite_1s]" />
                    <div className="absolute inset-16 rounded-full border border-[#38BDF8]/50 animate-[ping_4s_ease-out_infinite_2s]" />

                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#38BDF8]/80 border-r-[#38BDF8]/20 animate-[spin_3s_linear_infinite]" />
                    <div className="absolute w-56 h-56 rounded-full border border-[#38BDF8]/30 border-dashed animate-[spin_8s_linear_infinite_reverse]" />

                    <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#38BDF8] to-transparent blur-[3px] shadow-[0_0_50px_rgba(56,189,248,1)] animate-pulse" style={{ transform: "translateZ(40px)" }} />
                    <div className="absolute w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]" style={{ transform: "translateZ(55px)" }} />
                </div>
            </div>
        );
    }
    if (index === 1) {
        return (
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] opacity-90 pointer-events-none mt-10">
                {/* Duality Monoliths */}
                <div className="relative w-72 h-72 flex items-center justify-center animate-[spin_25s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute w-32 h-48 rounded-2xl border border-[#E8604C]/50 bg-[#E8604C]/10 backdrop-blur-md shadow-[0_0_50px_rgba(232,96,76,0.3)] animate-[bounce_6s_ease-in-out_infinite]"
                        style={{ transform: "translateZ(50px) rotateY(-25deg) rotateX(15deg)", transformStyle: "preserve-3d" }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E8604C]/20 to-transparent rounded-2xl" />
                        <div className="absolute -inset-2 border border-[#E8604C]/20 rounded-2xl" style={{ transform: "translateZ(-15px)" }} />
                    </div>

                    <div className="absolute w-32 h-48 rounded-2xl border border-[#34D399]/50 bg-[#34D399]/10 backdrop-blur-md shadow-[0_0_50px_rgba(52,211,153,0.3)] animate-[bounce_6s_ease-in-out_infinite_3s]"
                        style={{ transform: "translateZ(-50px) rotateY(25deg) rotateX(-15deg)", transformStyle: "preserve-3d" }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/20 to-transparent rounded-2xl" />
                        <div className="absolute -inset-2 border border-[#34D399]/20 rounded-2xl" style={{ transform: "translateZ(-15px)" }} />
                    </div>

                    <div className="absolute w-1 h-56 bg-white/40 blur-[2px] shadow-[0_0_20px_white] mix-blend-screen" style={{ transform: "rotateZ(45deg) rotateX(90deg)" }} />
                </div>
            </div>
        );
    }
    if (index === 2) {
        return (
            <div className="absolute inset-0 flex items-center justify-center [perspective:1000px] opacity-90 mix-blend-screen pointer-events-none mt-10">
                {/* Global Neural Sphere */}
                <div className="relative w-80 h-80 flex items-center justify-center animate-[spin_30s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
                    <div className="absolute inset-6 rounded-full border border-[#FBBF24]/30 shadow-[0_0_30px_rgba(251,191,36,0.1)_inset]" style={{ transform: "rotateX(75deg)" }} />
                    <div className="absolute inset-6 rounded-full border border-[#FBBF24]/30 shadow-[0_0_30px_rgba(251,191,36,0.1)_inset]" style={{ transform: "rotateX(75deg) rotateY(60deg)" }} />
                    <div className="absolute inset-6 rounded-full border border-[#FBBF24]/30 shadow-[0_0_30px_rgba(251,191,36,0.1)_inset]" style={{ transform: "rotateX(75deg) rotateY(120deg)" }} />

                    <div className="absolute inset-0 animate-[spin_10s_linear_infinite]" style={{ transformStyle: "preserve-3d" }}>
                        <div className="absolute top-[15%] left-[25%] w-3 h-3 bg-[#FBBF24] rounded-full shadow-[0_0_20px_#FBBF24]" style={{ transform: "translateZ(90px)" }} />
                        <div className="absolute bottom-[20%] right-[15%] w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]" style={{ transform: "translateZ(-70px)" }} />
                        <div className="absolute top-[45%] right-[85%] w-5 h-5 bg-[#FBBF24]/80 rounded-full blur-[1px] shadow-[0_0_30px_#FBBF24]" style={{ transform: "translateZ(130px)" }} />
                    </div>

                    <div className="absolute inset-0 animate-[spin_15s_linear_infinite_reverse]" style={{ transformStyle: "preserve-3d" }}>
                        <div className="absolute top-[85%] left-[55%] w-3 h-3 bg-[#FDE68A] rounded-full shadow-[0_0_25px_#FDE68A]" style={{ transform: "translateZ(40px)" }} />
                        <div className="absolute top-[25%] right-[35%] w-2.5 h-2.5 bg-white/90 rounded-full shadow-[0_0_15px_white]" style={{ transform: "translateZ(-100px)" }} />
                    </div>

                    <div className="absolute w-32 h-32 bg-[radial-gradient(circle,rgba(251,191,36,0.4),transparent_70%)] rounded-full blur-xl animate-pulse" />
                </div>
            </div>
        );
    }
    return null;
};

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

                <div className="relative max-w-5xl mx-auto mt-24">
                    {/* Glowing timeline track */}
                    <div className="absolute left-[39px] md:left-[50%] top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent shadow-[0_0_15px_rgba(255,255,255,0.05)]" />

                    {/* Pulsing laser that follows scroll */}
                    <motion.div
                        className="absolute left-[39px] md:left-[50%] -translate-x-1/2 w-1 rounded-full z-[1] shadow-[0_0_20px_#E8604C,0_0_40px_#E8604C]"
                        style={{
                            top: laserTop,
                            height: "15%",
                            background: "linear-gradient(180deg, transparent, #E8604C 40%, #FF9A8B 50%, #E8604C 60%, transparent)",
                        }}
                    />

                    <div className="space-y-16 md:space-y-32 relative z-10">
                        {steps.map((step, i) => {
                            const isEven = i % 2 === 0;
                            return (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    viewport={{ margin: "-20%", once: true }}
                                    transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 80, damping: 20 }}
                                    className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative ${isEven ? 'md:flex-row-reverse' : ''}`}
                                >

                                    {/* Central Node / Marker */}
                                    <div className="absolute left-[39px] md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 z-20">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 90 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                            className="w-14 h-14 rounded-2xl bg-[#08080A] border-[1.5px] border-white/10 flex flex-col items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.8)] overflow-hidden group cursor-default"
                                        >
                                            {/* Glowing core logic based on step color */}
                                            <div className="absolute inset-0 opacity-20 group-hover:opacity-60 transition-opacity duration-500"
                                                style={{ background: `radial-gradient(circle at 50% 50%, ${step.color}, transparent 70%)` }} />
                                            <AuroraOrb size={8} />
                                            <span className="text-[10px] font-bold tracking-widest text-white/90 mt-1 relative z-10">{step.num}</span>
                                        </motion.div>
                                    </div>

                                    {/* S-Tier Holographic Data Sculptures for alternating layout */}
                                    <div className="hidden md:flex w-1/2 relative min-h-[350px] items-center justify-center">
                                        <TimelineVisual index={i} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                                        <MagneticCard className="p-8 sm:p-10 group relative overflow-hidden" variant="dark" tiltStrength={5}>

                                            {/* Interactive hover spotlight inside card */}
                                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                                style={{ background: `radial-gradient(circle at top ${isEven ? 'right' : 'left'}, ${step.color}15, transparent 60%)` }} />

                                            <div className={`flex flex-col ${isEven ? 'md:items-end' : 'items-start'} mb-6 relative z-10`}>
                                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                                                    style={{ background: `${step.color}18`, border: `1px solid ${step.color}30`, boxShadow: `0 8px 32px ${step.color}15` }}>
                                                    <step.icon className="w-6 h-6" style={{ color: step.color }} strokeWidth={2} />
                                                </div>
                                            </div>

                                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight leading-tight relative z-10 group-hover:text-glow transition-all duration-300" style={{ textShadow: `0 0 20px ${step.color}40` }}>
                                                {step.title}
                                            </h3>

                                            <p className="text-[16px] text-[#8A8A93] leading-relaxed relative z-10 group-hover:text-white/80 transition-colors duration-300">
                                                {step.desc}
                                            </p>

                                            {/* Accent line based on step color */}
                                            <div className={`absolute bottom-0 h-1 transition-all duration-500 rounded-full opacity-50 group-hover:opacity-100 group-hover:w-1/2 w-0 ${isEven ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r'} from-transparent to-${step.color}`}
                                                style={{ backgroundImage: `linear-gradient(to ${isEven ? 'left' : 'right'}, transparent, ${step.color})` }} />
                                        </MagneticCard>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Community note - Elevated aesthetic */}
                <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                    className="mt-28 text-center flex justify-center relative z-10">
                    <div className="relative inline-flex group cursor-default">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E8604C] to-[#38BDF8] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-[spin_4s_linear_infinite]" />
                        <MagneticCard className="relative flex items-center gap-4 px-8 py-5 rounded-full border border-white/10 bg-[#08080A]/80 backdrop-blur-xl" tiltStrength={8} variant="dark">
                            <Users className="w-5 h-5 text-[#E8604C] shrink-0 animate-pulse" strokeWidth={2} />
                            <span className="text-[15px] text-white/90 font-medium tracking-wide">Propose topics. Vote on what matters. <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">The community decides.</span></span>
                        </MagneticCard>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
