import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OneTopic - The future of conversation';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#030304',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Abstract Ambient Glows */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '50%',
                        width: '1800px',
                        height: '1200px',
                        background: 'radial-gradient(circle, rgba(232,96,76,0.25) 0%, rgba(232,96,76,0.05) 45%, transparent 70%)',
                        transform: 'translateX(-50%)',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '20%',
                        width: '1000px',
                        height: '1000px',
                        background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 60%)',
                    }}
                />

                {/* Central Brand Lockup */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px', zIndex: 10 }}>
                    <span style={{ fontWeight: '900', fontSize: '110px', letterSpacing: '-0.05em', color: '#FFFFFF' }}>One</span>
                    <span style={{ fontWeight: '900', fontSize: '110px', letterSpacing: '-0.05em', color: '#E8604C' }}>Topic</span>
                </div>

                {/* Subtitle */}
                <div style={{ fontSize: '42px', color: '#8A8A93', fontWeight: 500, letterSpacing: '-0.02em', zIndex: 10 }}>
                    One question. One conversation. The whole world.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
