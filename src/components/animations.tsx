"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
    as?: "h1" | "h2" | "h3" | "p" | "span";
    stagger?: number;
}

/**
 * Splits text into words and animates each word with a staggered
 * blur-to-clear reveal. Used for section headings.
 */
export default function TextReveal({
    children,
    className = "",
    delay = 0,
    as: Tag = "h2",
    stagger = 0.04,
}: TextRevealProps) {
    const words = children.split(" ");

    return (
        <Tag className={className}>
            {words.map((word, i) => (
                <span key={i} className="inline-block" style={{ overflow: "hidden", paddingBottom: "0.15em" }}>
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                        whileInView={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * stagger,
                            ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                    >
                        {word}
                    </motion.span>
                    {i < words.length - 1 && "\u00A0"}
                </span>
            ))}
        </Tag>
    );
}

/**
 * Animated gradient mesh — uses CSS animations for performance.
 * No framer-motion = no JS animation overhead.
 */
export function AnimatedMesh({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <div className="mesh-blob mesh-blob-1" />
            <div className="mesh-blob mesh-blob-2" />
            <div className="mesh-blob mesh-blob-3" />
        </div>
    );
}

/**
 * Floating decorative elements — CSS only for performance.
 */
export function FloatingElements({ children }: { children?: ReactNode }) {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="floating-ring floating-ring-1" />
            <div className="floating-ring floating-ring-2" />
            <div className="floating-dot floating-dot-1" />
            <div className="floating-dot floating-dot-2" />
            {children}
        </div>
    );
}
