import { larsseit } from '@/assets/fonts';
import Header from '@/components/Header';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-cozey-white">
      <section className={`relative pt-200px ${larsseit.className} antialiased`}>
        <Header />
      </section>
    </main>
  );
}
