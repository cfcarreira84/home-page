import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { VercelToolbar } from '@vercel/toolbar/next';

// Trazendo as fontes direto do servidor do Google
const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: '--font-plus-jakarta'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://labscarreira.vercel.app'),
  title: {
    default: "Carlos Felipe Carreira | Menos abstração, mais tração.",
    template: "%s | Carlos Felipe Carreira"
  },
  description: "Menos slides. Mais vendas. Orquestração de IA, Lean Ops e inteligência de dados para escala comercial.",
  keywords: ["Carlos Felipe Carreira", "Lean Ops", "MarTech", "AI Engineer", "RevOps", "Business Intelligence", "Turnaround Comercial", "Make.com", "Google Gemini"],
  authors: [{ name: "Carlos Felipe Carreira", url: "https://labscarreira.vercel.app" }],
  creator: "Carlos Felipe Carreira",
  openGraph: {
    title: "Carlos Felipe Carreira | AI Profiler & Lean Ops Portfolio",
    description: "Orquestração de IA e dados para escala comercial. Portfólio interativo com terminal de IA integrado.",
    url: "https://labscarreira.vercel.app",
    siteName: "Carlos Felipe Carreira Portfolio",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/ai-sdr.jpg", width: 1200, height: 630, alt: "Carlos Felipe Carreira - AI Profiler" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Felipe Carreira | AI Profiler & Lean Ops Portfolio",
    description: "Orquestração de IA e dados para escala comercial.",
    images: ["/images/ai-sdr.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';

  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carlos Felipe Carreira",
              "url": "https://labscarreira.vercel.app",
              "jobTitle": "Arquiteto Lean Ops & Revenue Engineer",
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "PUCRS - Pontifícia Universidade Católica do Rio Grande do Sul"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Lean Operations",
                "Business Intelligence",
                "MarTech & RevOps",
                "High-Ticket Sales",
                "Google Gemini",
                "Next.js"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/cfcarreira"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-cosmos-cyan selection:text-cosmos-base">
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}