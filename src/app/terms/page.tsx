import type { Metadata } from "next";
import Link from "next/link";
import MatrixRain from "@/components/matrix-rain";

export const metadata: Metadata = {
    title: "Terms of Service - OneTopic",
    description: "Terms of Service for the OneTopic application.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#111114] text-[#C0C0C5] relative overflow-hidden font-sans">
            {/* Matrix Rain Background */}
            <MatrixRain opacity={0.03} color="#E8604C" className="absolute inset-0 !fixed" />

            {/* Mesh Gradient */}
            <div className="absolute top-[-20%] right-[-20%] w-[800px] h-[800px] bg-[#E8604C]/[0.05] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[800px] h-[800px] bg-[#4C55E8]/[0.05] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 sm:py-28">
                <Link href="/" className="inline-flex items-center gap-2 text-[#8A8A92] hover:text-white transition-colors mb-12 font-mono text-xs uppercase tracking-wider group">
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Base
                </Link>

                <div className="backdrop-blur-xl bg-white/[0.03] border border-white/[0.08] rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="mb-12 border-b border-white/[0.06] pb-8">
                        <span className="font-pixel text-[#E8604C] text-xs uppercase tracking-widest mb-3 block">User Agreement Protocol</span>
                        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">Terms of Service</h1>
                        <p className="font-mono text-xs text-[#6A6A72]">Last Sync: November 2025</p>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-[#A0A0A5] prose-a:text-[#E8604C] prose-li:text-[#A0A0A5] prose-strong:text-white">
                        <p className="lead text-xl text-[#D0D0D5]">
                            By accessing or using OneTopic, you agree to be bound by these Terms of Service.
                            If you do not agree to these terms, please disconnect immediately.
                        </p>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">01. Access Eligibility</h2>
                        <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Age Requirement</strong>
                                Must be 13+ years old
                            </li>
                            <li className="bg-white/[0.03] p-4 rounded-xl border border-white/[0.05]">
                                <strong className="block text-white mb-1 font-mono text-xs uppercase text-[#E8604C]">Compliance</strong>
                                Must adhere to local laws
                            </li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">02. Code of Conduct</h2>
                        <p>You agree <strong>NOT</strong> to execute the following operations:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Post offensive, hateful, or discriminatory content targeting any entity</li>
                            <li>Harass, bully, or threaten other network participants</li>
                            <li>Inject spam, misleading information, or unauthorized advertising</li>
                            <li>Impersonate others or generate synthetic/fake accounts</li>
                            <li>Attempt to manipulate voting algorithms or debate outcomes</li>
                            <li>Deploy bots or automated systems against the interface</li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">03. IP & Content Rights</h2>
                        <p>
                            You retain ownership of your generated content (votes, comments). However, by transmitting data,
                            you grant OneTopic a global, non-exclusive license to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Display your content within the application interface</li>
                            <li>Store and process your content on our infrastructure</li>
                            <li>Utilize aggregated data for system optimization and analytics</li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">04. Debate Protocol</h2>
                        <p>OneTopic facilitates structured discourse:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Single Thread:</strong> Only one debate topic is active globally at any time instance</li>
                            <li><strong>One Vote:</strong> You are limited to a single vote per debate cycle</li>
                            <li><strong>Immutable:</strong> Votes cannot be altered once committed to the ledger</li>
                        </ul>

                        <h2 className="font-pixel text-xl mt-12 mb-6 text-white uppercase tracking-wide">05. Termination Sequence</h2>
                        <p>
                            We reserve the authority to suspend or terminate access for violations of this protocol.
                            You may self-terminate your account at any time via Profile settings.
                        </p>

                        <div className="mt-12 p-6 bg-[#E8604C]/10 border border-[#E8604C]/20 rounded-xl">
                            <h3 className="text-[#E8604C] font-bold mb-2">Liability Disclaimer</h3>
                            <p className="text-sm m-0">OneTopic operates "as is" without warranties. We are not liable for incidental or consequential damages arising from usage.</p>
                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-sm text-[#6A6A72] mb-1">Questions regarding terms?</p>
                            <a href="mailto:admin@onetopic.com" className="text-white hover:text-[#E8604C] transition-colors font-mono">admin@onetopic.com</a>
                        </div>
                        <p className="text-xs text-[#5A5A60] max-w-xs">
                            By utilizing the OneTopic platform, you ratify these Terms of Service.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
