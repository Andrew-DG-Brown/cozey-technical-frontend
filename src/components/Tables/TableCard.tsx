import Image from 'next/image';

function buildAlt(title: string) {
    return title.replace(/\s/, '')
}

export function TableCard({ card }: { card: any }) {
    return (
        <div className='relative flex flex-col items-start justify-evenly gap-[12px] w-[400px] h-full'>
            <div className='w-full h-[300px]'>
                <div className='overflow-hidden w-full h-full bg-transparent'>
                    <Image 
                    alt={buildAlt(card.title)}
                    fill={true}
                    // style={{
                    //     maxWidth: '100%',
                    //     maxHeight: '100%'
                    // }}
                    // width="100%"
                    // height="100%"
                    src={`/images/${card.imageName}`}/>
                </div>
            </div>
            <div className='flex flex-col items-start gap-[4px] w-full'>

            </div>

        </div>
    )
}