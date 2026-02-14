"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const APP_STORE_URL = "https://apps.apple.com/us/app/onetopic/id6754181660";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`fixed top-0 inset-x-0 z-50 nav-glass transition-all duration-300 ${scrolled ? "scrolled" : ""}`}>
            <nav className="container-wide flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 shrink-0">
                    <Image src="/logo.png" alt="OneTopic" width={28} height={28} className="rounded-lg" />
                    <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">OneTopic</span>
                </Link>

                {/* Desktop links — centered */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-4 py-2 rounded-lg text-[13px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* CTA + hamburger */}
                <div className="flex items-center gap-3 shrink-0">
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn-liquid-wrap">
                        <span className="btn-liquid-inner !py-[9px] !px-5 !text-[13px]">Download</span>
                    </a>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-black/[0.04] transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg width="18" height="18" viewBox="0 0 18 18" className="text-[#4A4A52]">
                            {mobileOpen ? (
                                <path d="M4 4L14 14M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            ) : (
                                <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile dropdown */}
            {mobileOpen && (
                <div className="md:hidden border-t border-white/[0.05] bg-[#030304]/95 backdrop-blur-2xl px-6 py-5 space-y-1 animate-fadeIn">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-3 rounded-lg text-[14px] font-medium text-gray-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
                        className="block mt-3 btn-liquid-wrap w-full text-center">
                        <span className="btn-liquid-inner !w-full !justify-center">Download App</span>
                    </a>
                </div>
            )}
        </header>
    );
}
