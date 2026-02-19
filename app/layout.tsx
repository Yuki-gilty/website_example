import type { Metadata } from "next";
import { Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { SALON_NAME } from "@/lib/content";

const sans = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SALON_NAME} | Hair Salon`,
  description:
    "静かにカッコいい空気感にこだわった、青山のプライベートヘアサロン。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${sans.variable} ${serif.variable} antialiased bg-base text-main`}
      >
        {children}
      </body>
    </html>
  );
}
