import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KI Starter Set - DSGVO-konformer ChatBot für Unternehmen",
  description: "Automatisieren Sie Ihren Kundenservice mit unserem intelligenten KI-ChatBot. 100% DSGVO-konform, Server in Deutschland, einfache Integration.",
  keywords: "KI ChatBot, DSGVO, Kundenservice, Chatbot Deutschland, AI Customer Service",
  openGraph: {
    title: "KI Starter Set - DSGVO-konformer ChatBot",
    description: "Intelligenter Kundenservice für deutsche Unternehmen",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
