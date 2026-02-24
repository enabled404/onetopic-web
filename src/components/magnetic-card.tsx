"use client";

import { useRef, useState, useEffect, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";
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
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [spot, setSpot] = useState({ x: 50, y: 50 });
    const [hovering, setHovering] = useState(false);

    // Global listener to revert the card's 3D state when a mobile user taps *outside* of it.
    useEffect(() => {
        const handleClickOutside = (e: globalThis.MouseEvent | globalThis.TouchEvent) => {
            if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
                setHovering(false);
                setTilt({ x: 0, y: 0 });
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, []);

    const isDark = variant === "dark";
    const resolvedGlow = glowColor ?? (isDark ? "rgba(232, 96, 76, 0.08)" : "rgba(232, 96, 76, 0.10)");
    const borderGlow = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(232, 96, 76, 0.20)";

    const handleMove = (e: ReactMouseEvent<HTMLDivElement>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
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

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setHovering(true);
        const el = cardRef.current;
        if (!el) return;

        // Mobile Perfection: When a user taps the screen, always force a stunning,
        // absolute corner-tilt presentation to instantly demonstrate the 3D depth,
        // exactly simulating the desktop "mouse enter" state. 
        // This solves the problem where tapping dead center results in 0 tilt.
        setTilt({
            x: -tiltStrength * 1.2, // tilts back majestically
            y: tiltStrength * 1.2,  // tilts right to catch light
        });
        setSpot({ x: 80, y: 20 }); // Spotlight matches the angle
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        const el = cardRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const touch = e.touches[0];
        const px = (touch.clientX - rect.left) / rect.width;
        const py = (touch.clientY - rect.top) / rect.height;

        setTilt({
            x: (py - 0.5) * -tiltStrength * 1.5,
            y: (px - 0.5) * tiltStrength * 1.5,
        });
        setSpot({ x: px * 100, y: py * 100 });
    };

    return (
        <motion.div
            ref={cardRef}
            className={`${isDark ? "card-dark" : "card-light"} group relative ${className}`}
            onMouseMove={handleMove}
            onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHovering(true);
            }}
            onMouseLeave={handleLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={() => {
                // Mobile Persistence: Do NOT reset the 3D state here!
                // We permanently stick the card in its glorious popped-out 3D Hover state
                // so the user can actually see and interact with the animation.
                // The global handleClickOutside useEffect will reset it when they tap away.
            }}
            onClick={() => { }} // Forces iOS Safari to apply :hover state
            tabIndex={0} // Makes it focusable to trigger and hold interactive states
            style={{
                transformStyle: "preserve-3d",
                perspective: "800px",
                WebkitTapHighlightColor: "transparent",
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
