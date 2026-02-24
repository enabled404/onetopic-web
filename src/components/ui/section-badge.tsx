"use client";

import { motion } from "framer-motion";

export default function SectionBadge({ title }: { title: string }) {
    return (
        <div className="mb-12 sm:mb-16 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group relative inline-flex items-center gap-3 rounded-full border border-white/5 bg-[#030304]/80 px-5 py-2 backdrop-blur-xl transition-all duration-500 hover:bg-[#0A0A0D]/90 hover:shadow-[0_0_20px_rgba(232,96,76,0.15)]"
            >
                {/* Spinning conic gradient border effect (masked to the edge) */}
                <div className="absolute inset-0 overflow-hidden rounded-full opacity-50 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -inset-[1px] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(232,96,76,0.3)_50%,transparent_100%)]" />
                    <div className="absolute inset-[1px] rounded-full bg-[#030304] backdrop-blur-xl" />
                </div>

                {/* S-tier sparkle SVG */}
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative z-10 text-coral transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90 drop-shadow-[0_0_8px_rgba(232,96,76,0.6)]"
                >
                    <path
                        d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"
                        fill="currentColor"
                    />
                </svg>

                {/* Tracking text */}
                <span className="relative z-10 mt-[1px] font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-white/80 transition-colors duration-300 group-hover:text-white">
                    {title}
                </span>

                {/* Edge highlights */}
                <div className="absolute left-1/2 top-0 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
        </div>
    );
}
