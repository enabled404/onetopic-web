"use client";

import { motion } from "framer-motion";
import TextReveal from "./animations";

const APP_STORE_URL = "https://apps.apple.com/us/app/onetopic/id6754181660";

export default function CTA() {
    return (
        <section className="relative py-20 sm:py-24 section-deep overflow-hidden">
            {/* Grid */}
            <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

            {/* Accent glow */}
            <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(232,96,76,0.08) 0%, rgba(160,100,220,0.03) 35%, transparent 55%)" }} />

            <div className="relative z-10 container-standard text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.span initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} className="section-label inline-flex mb-8">
                        Join the Movement
                    </motion.span>

                    <div className="mt-8">
                        <TextReveal className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-heading text-center" delay={0.1}>
                            Ready to join the
                        </TextReveal>
                        <TextReveal className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none text-coral text-center" delay={0.2}>
                            real conversation?
                        </TextReveal>
                    </div>

                    <motion.p initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }} transition={{ delay: 0.35 }}
                        className="mt-8 text-xl sm:text-2xl text-[#8A8A93] leading-relaxed text-center max-w-2xl mx-auto mb-12">
                        Be part of the first global community where every voice matters equally.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ delay: 0.45 }}>
                        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="btn-liquid-wrap scale-110">
                            <span className="btn-liquid-inner btn-liquid-inner-lg">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                Download on iOS
                            </span>
                        </a>
                    </motion.div>

                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        viewport={{ once: true }} transition={{ delay: 0.55 }} className="mt-8">
                        <span className="android-soon">Android coming soon</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
