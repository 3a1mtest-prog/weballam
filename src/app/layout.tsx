import type { Metadata } from "next";
import { Archivo, Inter, Dancing_Script } from "next/font/google";
import { identity } from "@/config/portfolio";
import "./globals.css";

/** Heavy grotesque for the display type — the chrome headings and numerals. */
const display = Archivo({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

/** The signature face used by the wordmark. */
const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-script",
});

const title = `${identity.name} — ${identity.role.toLowerCase()}`;

export const metadata: Metadata = {
  title,
  description: `Portfolio ${identity.year}. ${identity.name} builds fast, accessible products for the browser.`,
  openGraph: {
    title,
    description: `Portfolio ${identity.year}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${script.variable}`}
    >
      <body className="bg-ink">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
