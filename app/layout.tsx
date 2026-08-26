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
  title: "Carlos F. Carreira | Revenue Engineering",
  description: "Menos slides. Mais vendas. Orquestração de IA e dados para escala comercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const shouldInjectToolbar = process.env.NODE_ENV === 'development';

  return (
    <html lang="pt-BR" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased selection:bg-cosmos-cyan selection:text-cosmos-base">
        {children}
        {shouldInjectToolbar && <VercelToolbar />}
      </body>
    </html>
  );
}