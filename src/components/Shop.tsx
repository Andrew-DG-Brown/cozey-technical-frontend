'use client'
import { larsseit } from '@/assets/fonts';
import Header from './Header';
import Tables from './Tables/Tables';
import { IntersectionProvider } from '@/contexts/Intersection.context';
import { useEffect } from 'react';

export default function Shop() {
    useEffect(() => {
        document.body.scrollIntoView({ behavior: 'smooth' })
    }, []);

    return (
        <IntersectionProvider>
            <section className={`relative ${larsseit.className} antialiased w-full`}>
                <Header />
                <Tables />
            </section>
        </IntersectionProvider>
    )
}