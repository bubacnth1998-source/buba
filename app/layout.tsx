import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "eFootball AI Coach",
  description: "Landing page MVP para análisis táctico de eFootball Mobile.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
