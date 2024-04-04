import { TableSection } from '@/config/tables';
import { cozeyRegular } from '@/assets/fonts';
import { TableCard } from './TableCard';

export default function TableSection({ section }: { section: TableSection }) {
    return (
        <div id={`${section.sectionName}-${section.sectionId}`} className={`relative mx-auto max-w-main-container-lg`}>
            <h2  className={`text-cozey-light-blue w-full text-[48px] ${cozeyRegular.className} pb-2 pl-4`}>{section.sectionName}</h2>
            <div className='grid grid-cols-[1fr_1fr_1fr] relative justify-center gap-[40px] mx-auto'>
                {section.tables?.map((tableCard, i) => {
                    return <TableCard key={i} card={tableCard}/>
                })}
            </div>
        </div>
    )
}