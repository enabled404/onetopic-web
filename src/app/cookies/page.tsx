import type { Metadata } from "next";
import Link from "next/link";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
    title: "Cookie Policy - OneTopic",
    description: "Cookie Policy for the OneTopic application and website.",
};

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-[#111114] text-[#C0C0C5] relative overflow-hidden font-sans">
            {/* Matrix Rain Background */}
            <MatrixRain opacity={0.03} color="#E8604C" className="absolute inset-0 !fixed" />

            {/* Mesh Gradient */}
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#E8604C]/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#4C55E8]/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28">
                <Link href="/" className="inline-flex items-center gap-2 text-[#8A8A92] hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Base
                </Link>

                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="mb-12 border-b border-white/[0.06] pb-8">
                        <span className="font-pixel text-[#E8604C] text-xs uppercase tracking-widest mb-3 block">Cookie Disclosure</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Cookie Policy</h1>
                        <p className="font-mono text-xs text-[#6A6A72]">Last Updated: February 2026</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-[#A0A0A5] prose-a:text-[#E8604C] prose-li:text-[#A0A0A5] prose-strong:text-white">
                        <p className="lead text-xl text-[#D0D0D5]">
                            This Cookie Policy explains how OneTopic (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) uses cookies and similar tracking technologies when you visit our website at onetopic.com.
                        </p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">01. What Are Cookies</h2>
                        <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you interact with content, and improve your overall experience. Cookies may be &ldquo;persistent&rdquo; (remaining on your device until deleted) or &ldquo;session&rdquo; (deleted when you close your browser).</p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">02. Cookies We Use</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Essential Cookies</strong>
                                Required for the website to function. These enable core features like page navigation, secure access, and session management. They cannot be disabled.
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Analytics Cookies</strong>
                                Help us understand how visitors interact with our website by collecting anonymous usage data. We use this to improve performance and content.
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Functional Cookies</strong>
                                Remember your preferences such as language, region, and display settings to provide a more personalized experience.
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Performance Cookies</strong>
                                Collect information about how the website performs, including page load times and error reports, to help us optimize the experience.
                            </li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">03. Third-Party Services</h2>
                        <p>Our website may use the following third-party services that set their own cookies:</p>
                        <ul>
                            <li><strong>Vercel Analytics:</strong> Anonymous performance and usage metrics for website optimization</li>
                            <li><strong>Firebase Authentication:</strong> Secure session management for authenticated users of the OneTopic app</li>
                            <li><strong>Apple App Store:</strong> Referral tracking when you click download links to the App Store</li>
                        </ul>
                        <p>We do not use advertising cookies or sell any data collected through cookies to third parties.</p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">04. Managing Cookies</h2>
                        <p>You can control and manage cookies through your browser settings. Most browsers allow you to:</p>
                        <ul>
                            <li>View and delete existing cookies</li>
                            <li>Block all cookies or only third-party cookies</li>
                            <li>Set preferences for specific websites</li>
                            <li>Receive notifications when a cookie is set</li>
                        </ul>
                        <p>Please note that disabling essential cookies may impact the functionality of our website and your ability to access certain features.</p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">05. Data Retention</h2>
                        <p>Session cookies are automatically deleted when you close your browser. Persistent cookies remain on your device for a set period or until you manually delete them. Analytics data is retained in aggregated, anonymized form and is not linked to any personally identifiable information.</p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">06. Updates to This Policy</h2>
                        <p>We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our data practices. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.</p>

                        <div className="mt-12 p-6 bg-[#E8604C]/10 border border-[#E8604C]/20 rounded-xl">
                            <h3 className="text-[#E8604C] font-bold mb-2">Your Consent</h3>
                            <p className="text-sm m-0">By continuing to use our website, you consent to the use of cookies as described in this policy. If you do not agree with our use of cookies, you should adjust your browser settings accordingly or discontinue use of the site.</p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-sm text-[#6A6A72] mb-1">Questions about our cookie practices?</p>
                            <a href="mailto:admin@onetopic.com" className="text-white hover:text-[#E8604C] transition-colors font-mono">admin@onetopic.com</a>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/privacy" className="text-xs text-[#5A5A60] hover:text-[#8A8A92] transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-xs text-[#5A5A60] hover:text-[#8A8A92] transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
