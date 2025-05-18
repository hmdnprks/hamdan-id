import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Load JustSans locally
const justSans = localFont({
  variable: "--font-justsans",
  display: "swap",
  src: [
    {
      path: "./fonts/justsans/JUST Sans Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/justsans/JUST Sans Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/justsans/JUST Sans SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/justsans/JUST Sans Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

// Load Poppins as fallback
const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "hamdan.id",
  description: "Personal site of Hamdan Prakoso",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${justSans.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}