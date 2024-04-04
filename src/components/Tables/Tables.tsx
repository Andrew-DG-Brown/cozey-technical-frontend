import { tables } from '@/config/tables';
import TableSection from './TableSection';

export default function Tables() {
    return (
        <div className='flex flex-col gap-8 mb-48'>
            {tables.map((tableSection, i) => {
                return <TableSection key={i} section={tableSection}/>
            })}
        </div>
    )
}