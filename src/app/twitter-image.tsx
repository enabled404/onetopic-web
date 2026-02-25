import { ImageResponse } from 'next/og';

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
                {/* Abstract Ambient Glows (Linear Gradient is required for Satori engine standard) */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(232,96,76,0.15) 0%, rgba(3,3,4,1) 35%, rgba(3,3,4,1) 65%, rgba(139,92,246,0.1) 100%)',
                    }}
                />

                {/* Central Brand Lockup */}
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                    <span style={{ fontWeight: 900, fontSize: '110px', letterSpacing: '-5px', color: '#FFFFFF' }}>One</span>
                    <span style={{ fontWeight: 900, fontSize: '110px', letterSpacing: '-5px', color: '#E8604C' }}>Topic</span>
                </div>

                {/* Subtitle */}
                <div style={{ fontSize: '42px', color: '#8A8A93', fontWeight: 500, letterSpacing: '-1px' }}>
                    One question. One conversation. The whole world.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
