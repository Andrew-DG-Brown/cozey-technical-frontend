import { cozeyRegular, haffer } from '@/assets/fonts'


export default function Header() {
    return (
        <div className='fixed w-full top-[90px] pb-[16px] z-20'>
            <div className='w-[89%] mx-auto'>
                <div className="flex flex-col gap-[4px]">
                    <h1 className={`${cozeyRegular.className} text-[60px] text-cozey-blue h-[75px]`}>Tables</h1>
                    <span className={`${haffer.className} font-normal text-cozey-black text-[20px] mb-[20px]`}>A perfect pairing to your sofa.</span>
                    <div className="flex h-[48px] bg-cozey-beige gap-[10px] w-fit rounded-[24px] overflow-hidden p-[8px]">
                        <a className={`bg-cozey-blue text-white h-full ${haffer.className} text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>Coffee Tables</a>
                        <a className={`bg-transparent text-cozey-blue h-full ${haffer.className} text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>Side Tables</a>
                        <a className={`bg-transparent text-cozey-blue h-full ${haffer.className} text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>Media Units</a>
                        <a className={`bg-transparent text-cozey-blue h-full ${haffer.className} text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>Table Bundles</a>
                        </div>
                </div>  
            </div>
        </div>
    )
}