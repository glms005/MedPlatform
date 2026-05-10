import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import "./globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontKa = Noto_Sans_Georgian({
  subsets: ["georgian"],
  variable: "--font-ka",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Plastic Surgery Research Platform",
  description:
    "A transparency-first research platform for plastic surgery decisions in Georgia — surgeons, procedures, recovery, and discussion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontDisplay.variable} ${fontKa.variable}`}
    >
      <body className="bg-brand-cream text-brand-ink antialiased">
        <LocaleProvider>
          <Navbar />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

