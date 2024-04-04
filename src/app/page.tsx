import { larsseit } from '@/assets/fonts';
import Header from '@/components/Header';
import Tables from '@/components/Tables/Tables';

export default function Page() {
  return (
    <main className="flex min-h-[200vh] flex-col w-full bg-cozey-white">
      <section className={`relative pt-[318px] ${larsseit.className} antialiased w-full`}>
        <Header />
        <Tables />
      </section>
    </main>
  );
}
