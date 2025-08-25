import type { Metadata } from 'next';
import { Jost, Raleway } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { ConvexClientProvider } from './ConvexClientProvider';

const jost = Jost({
  variable: '--font-Jost',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wakpon Bénin',
  description: 'Plateforme Tourisme & Artisanat Béninois',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${jost.variable} ${raleway.variable} antialiased`}
      >
          <ConvexClientProvider>
        <Providers>
            {children}
        </Providers>
          </ConvexClientProvider>
      </body>
    </html>
  );
}
