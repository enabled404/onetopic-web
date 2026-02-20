"use client";

import { motion } from "framer-motion";
import TextReveal from "./animations";
import DownloadBtn from "./download-btn";

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
                        <DownloadBtn size="lg" className="scale-110" />
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
