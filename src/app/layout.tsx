import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neue = localFont({
  src: "./fonts/NeueHaasDisplayBlack.ttf",
  variable: "--font-neue-hass",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Numeris",
  description: "Numeris admin panel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
