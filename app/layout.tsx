import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Knecht & Partners AB — Payroll, HR & AI-konsulting",
  description:
    "Snabb, effektiv och med hjärtat på rätt plats. Jag hjälper företag optimera processer med expertis inom lönehantering, HR och AI-lösningar.",
  keywords: [
    "Payroll",
    "Lönehantering",
    "HR",
    "AI",
    "Konsulting",
    "Sverige",
    "Processoptimering",
  ],
  authors: [{ name: "Josef Knecht" }],
  openGraph: {
    title: "Knecht & Partners AB",
    description:
      "Expertkonsulting inom lönehantering, HR och AI-processoptimering.",
    url: "https://knecht-partners.se",
    siteName: "Knecht & Partners AB",
    locale: "sv_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knecht & Partners AB",
    description: "Expertkonsulting inom lönehantering, HR och AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${dmSerif.variable}`}>
      <body className="antialiased font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
