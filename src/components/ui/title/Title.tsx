import { title_font } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
}
export default function Title({ title, subtitle, className }: Props) {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${title_font.className} antialiased text-4xl font-semibold my-7`}>
        {title}
      </h1>

      {subtitle && <h3 className="text-xl mb-5"> {subtitle} </h3>}
    </div>
  );
}
