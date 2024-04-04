import Image from 'next/image';
import { haffer } from '@/assets/fonts';
import { CozeyColorName, cozeyColors } from '../../../tailwind.config';

function buildAlt(title: string) {
    return title.replace(/\s/g, '')
}

export function TableCard({ card }: { card: any }) {
    return (
        <div className='relative flex flex-col items-start justify-evenly gap-[12px] w-[400px] h-full'>
            <div className='w-full h-[300px]'>
                <div className='relative overflow-hidden w-full h-full bg-transparent cursor-pointer rounded-[20px] border-[2px] border-solid border-cozey-beige'>
                    <Image 
                    alt={buildAlt(card.title)}
                    fill={true}
                    sizes="(max-width: 400px) 100vw, (max-width: 400px) 50vw, 33vw"
                    src={`/images/${card.tableId}.webp`}/>
                    {/* Floating chips */}
                    <div className='absolute bottom-[12px] z-10 right-[12px] flex justify-end items-center py-[6px] pr-[6px] pl-[10px] gap-[8px] bg-white rounded-[100px] cursor-pointer border-[0.5px] border-solid border-cozey-beige-dark'>
                        <div className={`flex ${haffer.className} font-semibold text-[12px] leading-[18px] justify-end items-center text-right text-cozey-gray`}>{card.color.label}</div>
                        <div style={{ backgroundColor: cozeyColors[card.color.name as CozeyColorName] }} className={`rounded-full w-[20px] h-[20px]`}></div>
                    </div>
                    {card.outdoor ? (
                        <div className='absolute inline-flex px-[12px] py-[8px] bg-cozey-brown rounded-[16px] max-w-fit top-[12px] z-10 left-[12px]'>
                            <div className={`text-white ${haffer.className} font-normal text-[10px] leading-[12px] flex items-center justify-center whitespace-nowrap`}>
                                OUTDOOR
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
            <div className='relative flex flex-col items-start gap-[4px] w-full'>
                <p className={`block w-full text-[16px] leading-[19px] ${haffer.className} font-semibold text-cozey-blue cursor-pointer`}>{card.title}</p>
                <div className='h-[18px] flex items-center gap-[8px]'>
                    <span className={`${haffer.className} font-normal text-[14px] leading-[17.56px] text-cozey-violet whitespace-nowrap`}>${card.price}{' '}{card.financing ? 'or financing' : ''}</span>
                    <span className={`${haffer.className} font-normal text-[14px] leading-[17.56px] text-cozey-violet`}>|</span>
                    <span className={`flex items-center relative ${haffer.className} font-bold text-[14px] leading-[18px] cursor-pointer text-cozey-cyan`}>
                        Customize <span className='pl-[4px]'>{'->'}</span>
                    </span>
                </div>
            </div>

        </div>
    )
}