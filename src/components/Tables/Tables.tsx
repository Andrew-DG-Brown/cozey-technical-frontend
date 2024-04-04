import { tables } from '@/config/tables';
import TableSection from './TableSection';

export default function Tables() {
    return (
        <>
            {tables.map((tableSection, i) => {
                return <TableSection key={i} section={tableSection}/>
            })}
        </>
    )
}