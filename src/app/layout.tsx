import type { Metadata } from 'next';
import { inter } from '@/config/fonts';
import './globals.css';

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
