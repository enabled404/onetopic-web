import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneTopic - One question. One conversation.",
  description:
    "OneTopic - One question. One conversation. The whole world.",
  metadataBase: new URL("https://onetopic.com"),
  icons: {
    icon: "/logo.png",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#030304",
  },
  openGraph: {
    title: "OneTopic - The future of conversation",
    description:
      "Every day, the world debates. No feed. No noise. Just one question that matters.",
    url: "https://onetopic.com",
    siteName: "OneTopic",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneTopic - The future of conversation",
    description:
      "Every day, the world debates. No feed. No noise. Just one question that matters.",
    site: "@onetopic",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased font-sans selection:bg-[#E8604C] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
