import type { Metadata, Viewport } from "next";
import { Cairo, Archivo } from "next/font/google";
import "./globals.css";

import { site } from "@/config/site";
import { CartProvider } from "@/components/cart/CartProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { CartDrawer } from "@/components/cart/CartDrawer";

/* Cairo carries the Arabic; Archivo stands in for DIN on Latin + numerals. */
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.nameEn} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "غزاوي ستور",
    "متجر رقمي",
    "زيادة متابعين",
    "يوزرات مميزة",
    "اشتراكات رقمية",
    "شحن ألعاب",
    "شدات ببجي",
    "باقات جوال",
    "تصميم هوية بصرية",
    "تصميم مواقع",
    "AL-GHAZAWE STORE",
  ],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030807",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${archivo.variable} no-js h-full antialiased`}
    >
      <head>
        {/*
          Drops the `no-js` class before first paint, so JS-capable browsers get
          the scroll-reveal animation and everyone else sees the content.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js')`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-100 focus:rounded-full focus:bg-neon focus:px-5 focus:py-2 focus:font-bold focus:text-ink-950"
        >
          تخطَّ إلى المحتوى
        </a>

        <CartProvider>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <CartDrawer />
          <WhatsAppFab />
        </CartProvider>
      </body>
    </html>
  );
}
