import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import './globals.css';
import Provider from '@/components/provider/Provider';

export const metadata: Metadata = {
  title: {
    template: '%s | Dvivas Shop',
    default: 'Dvivas Shop | Home',
  },
  description: 'Tienda virtual De productos de moda',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
