"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
    tiltStrength?: number;
    variant?: "light" | "dark";
}

export default function MagneticCard({
    children,
    className = "",
    glowColor,
    tiltStrength = 8,
    variant = "light",
}: MagneticCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [spot, setSpot] = useState({ x: 50, y: 50 });
    const [hovering, setHovering] = useState(false);

    const isDark = variant === "dark";
    const resolvedGlow = glowColor ?? (isDark ? "rgba(232, 96, 76, 0.08)" : "rgba(232, 96, 76, 0.10)");
    const borderGlow = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(232, 96, 76, 0.20)";

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        setTilt({
            x: (py - 0.5) * -tiltStrength,
            y: (px - 0.5) * tiltStrength,
        });
        setSpot({ x: px * 100, y: py * 100 });
    };

    const handleLeave = () => {
        setTilt({ x: 0, y: 0 });
        setHovering(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`${isDark ? "card-dark" : "card-light"} group relative ${className}`}
            onMouseMove={handleMove}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={handleLeave}
            style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
            }}
            animate={{
                rotateX: tilt.x,
                rotateY: tilt.y,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
        >
            {/* Spotlight radial gradient following cursor */}
            <div
                className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-300 z-0"
                style={{
                    opacity: hovering ? 1 : 0,
                    background: `radial-gradient(500px circle at ${spot.x}% ${spot.y}%, ${resolvedGlow}, transparent 50%)`,
                }}
            />

            {/* Gradient border glow following cursor */}
            <div
                className="absolute inset-[-1px] rounded-[21px] pointer-events-none transition-opacity duration-300 z-0"
                style={{
                    opacity: hovering ? 1 : 0,
                    background: `radial-gradient(400px circle at ${spot.x}% ${spot.y}%, ${borderGlow}, transparent 50%)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                }}
            />

            {/* Content layer */}
            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}
