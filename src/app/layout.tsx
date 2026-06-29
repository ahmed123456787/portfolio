import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zater Ahmed — Full Stack Developer",
  description:
    "Full Stack Developer from Algeria. React, Node.js, Django. Building performant, well-architected web products.",
  metadataBase: new URL("https://zaterahmed.dev"),
  openGraph: {
    title: "Zater Ahmed — Full Stack Developer",
    description: "Full Stack Developer from Algeria. React, Node.js, Django.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="relative">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
