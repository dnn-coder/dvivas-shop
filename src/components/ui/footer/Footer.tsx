import { title_font } from '@/config/fonts';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="flex w-full justify-center text-xs mb-10">
      <Link href="/">
        <span className={`${title_font.className} antialiased font-bold`}>
          Dvivas{' '}
        </span>
        <span>| Shop</span>
        <span> © {new Date().getFullYear()} </span>
      </Link>
      <Link href="/" className="mx-3">
        Privacidad & Legal
      </Link>
      <Link href="/" className="mx-3">
        Ubicaciones
      </Link>
    </div>
  );
}
