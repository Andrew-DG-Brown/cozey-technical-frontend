import { TableSection } from '@/config/tables';
import { MAIN_CONTAINER_WIDTH } from '@/config/constants';
import { cozeyRegular } from '@/assets/fonts';
import { TableCard } from './TableCard';

export default function TableSection({ section }: { section: TableSection }) {
    return (
        <div style={{ maxWidth: MAIN_CONTAINER_WIDTH }} id={`${section.sectionName}-${section.sectionId}`} className={`relative mx-auto`}>
            <h2  className={`text-cozey-blue w-full text-[48px] ${cozeyRegular.className}`}>{section.sectionName}</h2>
            <div className='grid grid-cols-[1fr_1fr_1fr] relative justify-center gap-[40px] mx-auto'>
                {section.tables?.map((tableCard, i) => {
                    return <TableCard key={i} card={tableCard}/>
                })}
            </div>
        </div>
    )
}