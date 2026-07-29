import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "weballam",
  description: "A fresh Next.js project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
