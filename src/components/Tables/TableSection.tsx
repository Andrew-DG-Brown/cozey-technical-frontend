'use client'
import { TableSection } from '@/config/tables';
import { cozeyRegular } from '@/assets/fonts';
import { TableCard } from './TableCard';
import { InView } from 'react-intersection-observer';
import { useIntersection } from '@/contexts/Intersection.context';

export default function TableSection({ section }: { section: TableSection }) {
    const { setCurrentSectionId } = useIntersection()

    function handleSectionChange(inView: boolean) {
        if (inView) {
            console.log(section.sectionName)
            setCurrentSectionId(Number(section.sectionId))
        }
    }

    return (
        <InView as='div' 
        onChange={(inView, entry) => handleSectionChange(inView)}
        rootMargin='-30% 0px -70% 0px'
        id={`${section.sectionName}-${section.sectionId}`} 
        className={`relative mx-auto max-w-main-container-lg`}>
            <h2  className={`text-cozey-light-blue w-full text-[48px] ${cozeyRegular.className} pb-2 pl-4`}>{section.sectionName}</h2>
            <div className='grid grid-cols-[1fr_1fr_1fr] relative justify-center gap-[40px] mx-auto'>
                {section.tables?.map((tableCard, i) => {
                    return <TableCard key={i} card={tableCard}/>
                })}
            </div>
        </InView>
    )
}