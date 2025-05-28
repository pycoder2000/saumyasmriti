import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Saumya Smriti | AI Consultant & Business Strategist",
  description:
    "Saumya Smriti is an AI Consultant specializing in Microsoft Copilot and GenAI solutions that drive business transformation for global enterprises.",
  keywords:
    "Saumya Smriti, AI Consultant, Microsoft Copilot, Generative AI, Business AI, Digital Transformation, AI Strategy, Enterprise AI Solutions",
  openGraph: {
    title: "Saumya Smriti | AI Consultant & Business Strategist",
    description:
      "Empowering businesses with strategic GenAI and Microsoft Copilot solutions. Saumya Smriti offers AI consulting that transforms enterprise workflows.",
    url: "https://saumyasmriti.vercel.app",
    siteName: "Saumya Smriti AI Portfolio",
    images: [
      {
        url: "https://saumyasmriti.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saumya Smriti AI Consultant Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saumya Smriti | AI Consultant & Business Strategist",
    description:
      "Strategic AI consulting for global enterprises using Microsoft Copilot and GenAI solutions.",
    images: ["https://saumyasmriti.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ca-pub-5564117908306170"
        />

        <link rel="canonical" href="https://saumyasmriti.vercel.app" />

        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5564117908306170"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Saumya Smriti",
              url: "https://saumyasmriti.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/saumyasmriti",
                "https://www.instagram.com/saumyasmriti",
                "https://x.com/SaumyaSmriti1",
              ],
              jobTitle: "AI Consultant & Business Strategist",
              worksFor: {
                "@type": "Organization",
                name: "Saumya Smriti AI Consultancy",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
