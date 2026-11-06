import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lean Ops: Cockpit Comercial com IA a Custo Zero | Carlos Felipe Carreira",
  description: "Como substituí a assinatura de um CRM por um motor próprio que capta, qualifica, faz o prontuário de cada lead, conversa com a voz da marca e prevê receita a custo zero.",
  openGraph: {
    title: "Lean Ops: Cockpit Comercial com IA a Custo Zero | Carlos Felipe Carreira",
    description: "Do SaaS caro a um motor comercial próprio com IA para captação e forecast a custo mensal R$ 0.",
    url: "https://labscarreira.vercel.app/lean-ops",
    siteName: "Carlos Felipe Carreira Portfolio",
    locale: "pt_BR",
    type: "article",
    images: [{ url: "/images/lean-ops.jpg", width: 1200, height: 630, alt: "Lean Ops Case Study - Auren CRM" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Ops: Cockpit Comercial com IA a Custo Zero | Carlos Felipe Carreira",
    description: "Do SaaS caro a um motor comercial próprio com IA para captação e forecast a custo mensal R$ 0.",
    images: ["/images/lean-ops.jpg"]
  }
};

export default function LeanOpsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

