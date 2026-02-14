"use client";

import { motion } from "framer-motion";
import AuroraOrb from "./aurora-orb";
import TextReveal from "./animations";

export default function Philosophy() {
    return (
        <section className="relative py-20 sm:py-24 section-primary overflow-hidden">
            {/* Ambient glows — gives depth instead of flat black */}
            <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-[0.18] blur-[100px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(232,96,76,0.5), rgba(232,96,76,0.1) 50%, transparent 70%)" }} />
            <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] opacity-[0.1] blur-[80px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent 60%)" }} />
            <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] opacity-[0.08] blur-[60px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(56,189,248,0.4), transparent 60%)" }} />

            {/* Dot grid */}
            <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />

            <div className="relative z-10 container-standard text-center">
                <div className="max-w-4xl mx-auto">
                    <TextReveal className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                        This is how the internet
                    </TextReveal>
                    <TextReveal className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.25}>
                        was supposed to work.
                    </TextReveal>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.35 }}
                        className="flex items-center justify-center gap-6 my-12">
                        <div className="w-24 h-px bg-white/[0.1]" />
                        <AuroraOrb size={16} />
                        <div className="w-24 h-px bg-white/[0.1]" />
                    </motion.div>

                    <motion.p initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }} transition={{ delay: 0.45 }}
                        className="text-xl sm:text-2xl text-[#8A8A93] leading-relaxed text-center max-w-2xl mx-auto">
                        No vanity metrics. No addiction mechanics. No artificial virality.<br className="hidden sm:block" />
                        Just <span className="text-white font-bold">real humans having real conversations</span>.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
