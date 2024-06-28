import { title_font } from '@/config/fonts';
import RegisterForm from './ui/RegisterForm';

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${title_font.className} text-4xl mb-5`}>Nueva cuenta</h1>
      <RegisterForm />
    </main>
  );
}
