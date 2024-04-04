'use client'
import { TableSection } from '@/config/tables';
import { cozeyRegular } from '@/assets/fonts';
import { TableCard } from './TableCard';
import { InView } from 'react-intersection-observer';
import { useIntersection } from '@/contexts/Intersection.context';

export default function TableSection({ section }: { section: TableSection }) {
    const { setCurrentSectionId, sectionRefs } = useIntersection()

    function handleSectionChange(inView: boolean) {
        if (inView) {
            setCurrentSectionId(Number(section.sectionId))
        }
    }

    return (
        <InView as='div' 
        onChange={(inView, entry) => handleSectionChange(inView)}
        rootMargin='-30% 0px -70% 0px'
        id={section.sectionId} 
        className={`relative mx-auto max-w-main-container-lg`}>
            <h2 ref={sectionRefs.current[Number(section.sectionId) - 1]} className={`text-cozey-light-blue w-full text-[48px] ${cozeyRegular.className} pb-2 pl-4 scroll-mt-[350px]`}>{section.sectionName}</h2>
            <div className='grid grid-cols-[1fr_1fr_1fr] relative justify-center gap-[40px] mx-auto'>
                {section.tables?.map((tableCard, i) => {
                    return <TableCard key={i} card={tableCard}/>
                })}
            </div>
        </InView>
    )
}