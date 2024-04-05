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
        rootMargin='-40% 0px -50% 0px'
        id={section.sectionId} 
        className={`relative mx-auto w-[80%] 1xl:max-w-main-container-lg`}>
            <h2 ref={sectionRefs.current[Number(section.sectionId) - 1]} className={`text-cozey-light-blue w-full text-[30px] md:text-[48px] ${cozeyRegular.className} pb-2 scroll-mt-[350px] max-1xl:text-center`}>{section.sectionName}</h2>
            <div className='grid 1md:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_1fr_1fr] relative items-center xl:justify-center gap-[30px] 1md:gap-[20px] 1lg:gap-[40px] mx-auto'>
                {section.tables?.map((tableCard, i) => {
                    return (
                        <div className='w-full h-full flex max-1xl:justify-center' key={i}>
                            <TableCard card={tableCard}/>
                        </div>
                    )
                })}
            </div>
        </InView>
    )
}