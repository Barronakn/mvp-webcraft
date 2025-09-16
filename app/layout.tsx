
import type { Metadata } from 'next';
import './globals.css';
import './styles/hero.css';
import Providers from './providers';
import { ConvexClientProvider } from './ConvexClientProvider';
import ScrollbarWrapper from './ScrollbarWrapper';

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
      <body className={`antialiased`}>
        <ConvexClientProvider>
          <Providers> <ScrollbarWrapper>{children}</ScrollbarWrapper> </Providers>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
