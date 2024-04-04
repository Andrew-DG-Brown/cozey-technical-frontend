'use client'
import { larsseit } from '@/assets/fonts';
import Header from './Header';
import Tables from './Tables/Tables';
import { IntersectionProvider } from '@/contexts/Intersection.context';

export default function Shop() {
    return (
        <IntersectionProvider>
            <section className={`relative pt-[318px] ${larsseit.className} antialiased w-full`}>
                <Header />
                <Tables />
            </section>
        </IntersectionProvider>
    )
}