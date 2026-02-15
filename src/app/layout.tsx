import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "OneTopic - One question. One conversation. The whole world.",
    template: "%s | OneTopic",
  },
  description:
    "Every day, the world gets one question. No feed. No noise. Just one conversation that matters. Join the global debate.",
  metadataBase: new URL("https://onetopic.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "OneTopic",
    "daily debate",
    "global conversation",
    "opinion app",
    "social discourse",
    "one question",
    "real conversation",
    "no algorithm",
    "debate app",
    "iOS app",
  ],

  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "theme-color": "#030304",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
  },
  openGraph: {
    title: "OneTopic - The future of conversation",
    description:
      "Every day, the world debates. No feed. No noise. Just one question that matters.",
    url: "https://onetopic.com",
    siteName: "OneTopic",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OneTopic - One question. One conversation.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OneTopic - The future of conversation",
    description:
      "Every day, the world debates. No feed. No noise. Just one question that matters.",
    site: "@onetopic",
    creator: "@onetopic",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "OneTopic",
      applicationCategory: "SocialNetworkingApplication",
      operatingSystem: "iOS",
      description:
        "Every day, the world gets one question. No feed. No noise. Just one conversation that matters.",
      url: "https://onetopic.com",
      downloadUrl:
        "https://apps.apple.com/us/app/onetopic/id6754181660",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Organization",
      name: "OneTopic",
      url: "https://onetopic.com",
      logo: "https://onetopic.com/logo.png",
      sameAs: [
        "https://twitter.com/onetopic",
        "https://instagram.com/onetopic",
        "https://linkedin.com/company/onetopic",
      ],
    },
    {
      "@type": "WebSite",
      name: "OneTopic",
      url: "https://onetopic.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased font-sans selection:bg-[#E8604C] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
