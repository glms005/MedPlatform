import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  IBM_Plex_Sans,
  Noto_Sans_Georgian,
  Playfair_Display,
} from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import "./globals.css";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontKa = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-ka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plastic Surgery Research Platform",
  description:
    "A transparency-first research platform for plastic surgery decisions — surgeons, procedures, recovery, and discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable} ${fontKa.variable}`}
    >
      <body className="bg-brand-ivory font-sans text-brand-ink antialiased">
        <LocaleProvider>
          <Navbar />
          {/* Fixed navbar offset — see Navbar.tsx */}
          <div className="pt-14">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
