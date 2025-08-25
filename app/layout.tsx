import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "./providers";


const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});


const playfairDisplay = Playfair_Display({
  variable: "--font-playfairDisplay",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wakpon",
  description: "Plateforme Tourisme & Artisanat Béninois",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Providers>
      <body
        className={`${lato.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
      </Providers>
    </html>
  );
}
