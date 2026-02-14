"use client";

interface AuroraOrbProps {
    size?: number;
    className?: string;
}

/**
 * Siri-style animated blob with flowing multi-color gradients.
 * Uses pure CSS animations for performance — no canvas, no JS animation loops.
 * Multiple layers rotate at different speeds creating an organic, flowing effect.
 */
export default function AuroraOrb({ size = 12, className = "" }: AuroraOrbProps) {
    return (
        <div
            className={`siri-blob ${className}`}
            style={{
                width: size,
                height: size,
            }}
        >
            <div className="siri-blob-layer siri-blob-layer-1" />
            <div className="siri-blob-layer siri-blob-layer-2" />
            <div className="siri-blob-layer siri-blob-layer-3" />
            <div className="siri-blob-glow" />
        </div>
    );
}

/**
 * Large Siri-style blob for hero sections — the main visual focal point.
 * Multi-layered rotating gradients with glow aura.
 */
export function SiriBlob({ className = "" }: { className?: string }) {
    return (
        <div className={`siri-hero-blob ${className}`}>
            <div className="siri-hero-inner">
                <div className="siri-hero-layer siri-hero-layer-1" />
                <div className="siri-hero-layer siri-hero-layer-2" />
                <div className="siri-hero-layer siri-hero-layer-3" />
                <div className="siri-hero-layer siri-hero-layer-4" />
            </div>
            <div className="siri-hero-glow" />
        </div>
    );
}
