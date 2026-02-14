import type { Metadata } from "next";
import Link from "next/link";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
    title: "Privacy Policy - OneTopic",
    description: "Privacy Policy for the OneTopic application.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#111114] text-[#C0C0C5] relative overflow-hidden font-sans">
            {/* Matrix Rain Background */}
            <MatrixRain opacity={0.03} color="#E8604C" className="absolute inset-0 !fixed" />

            {/* Mesh Gradient */}
            <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-[#E8604C]/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-[#4C55E8]/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28">
                <Link href="/" className="inline-flex items-center gap-2 text-[#8A8A92] hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Base
                </Link>

                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="mb-12 border-b border-white/[0.06] pb-8">
                        <span className="font-pixel text-[#E8604C] text-xs uppercase tracking-widest mb-3 block">Legally Binding Protocol</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Privacy Policy</h1>
                        <p className="font-mono text-xs text-[#6A6A72]">Last Sync: November 2025</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-[#A0A0A5] prose-a:text-[#E8604C] prose-li:text-[#A0A0A5] prose-strong:text-white">
                        <p className="lead text-xl text-[#D0D0D5]">
                            OneTopic (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you use our debate application.
                        </p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">01. Data Collection Protocol</h2>
                        <p>We collect information that you provide directly to us:</p>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Account Data</strong>
                                Username, email address, password
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Profile Data</strong>
                                Member statistics, join date
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">User Content</strong>
                                Votes, comments, participation
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Telemetry</strong>
                                Interaction frequency, usage patterns
                            </li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">02. Utilization Vectors</h2>
                        <p>We use your information to operate and enhance the neural network of conversations:</p>
                        <ul>
                            <li>Provide and maintain service stability</li>
                            <li>Calculate consensus accuracy scores</li>
                            <li>Dispatch tactical notifications regarding debates</li>
                            <li>Iterate on user experience based on aggregate behavior</li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">03. Secure Storage</h2>
                        <p>Your data is encrypted and stored within secure Firebase infrastructure:</p>
                        <ul>
                            <li><strong>Auth:</strong> Encrypted via Firebase Authentication</li>
                            <li><strong>Store:</strong> Cloud Firestore with localized redundancy</li>
                            <li><strong>Security:</strong> Industry-standard transport layer security (TLS)</li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">04. Sovereignty & Rights</h2>
                        <p>You retain full command over your digital footprint:</p>
                        <ul>
                            <li>Access request for personal datasets</li>
                            <li>Correction of erroneous registry entries</li>
                            <li>Total account deletion (irreversible)</li>
                        </ul>

                        <div className="mt-12 p-6 bg-[#E8604C]/10 border border-[#E8604C]/20 rounded-xl">
                            <h3 className="text-[#E8604C] font-bold mb-2">Children's Safety Protocol</h3>
                            <p className="text-sm m-0">OneTopic is strictly for users aged 13+. We presume no liability for unauthorized access by minors.</p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-sm text-[#6A6A72] mb-1">Questions regarding protocol?</p>
                            <a href="mailto:admin@onetopic.com" className="text-white hover:text-[#E8604C] transition-colors font-mono">admin@onetopic.com</a>
                        </div>
                        <p className="text-xs text-[#5A5A60] max-w-xs">
                            By interacting with the OneTopic interface, you acknowledge receipt of this protocol.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
