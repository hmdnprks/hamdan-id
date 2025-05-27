import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Umami from "@/components/analytics/Umami";

// Load JustSans locally
const justSans = localFont({
  variable: "--font-justsans",
  display: "swap",
  src: [
    {
      path: "../fonts/justsans/JUST Sans Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/justsans/JUST Sans Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/justsans/JUST Sans SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/justsans/JUST Sans Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const melangitSans = localFont({
  variable: "--font-melangit-sans",
  display: "swap",
  src: [
    {
      path: "../fonts/melangit/MelangitSans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/melangit/MelangitSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const pogoniaSans = localFont({
  variable: "--font-pogonia-sans",
  display: "swap",
  src: [
    {
      path: "../fonts/pogonia/Pogonia-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-ExtraLight.woff",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Semibold.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-ExtraBold.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/pogonia/Pogonia-Black.woff",
      weight: "900",
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Hamdan's Site",
  description: "Personal site of Hamdan Prakoso",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${justSans.variable} ${poppins.variable} ${jetbrainsMono.variable} ${plusJakartaSans.variable} ${melangitSans.variable} ${pogoniaSans.variable}`}>
      <body className="font-sans antialiased">
        <Umami />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}