import { cozeyRegular, haffer } from '@/assets/fonts'
import { useIntersection } from '@/contexts/Intersection.context'
import { cozeyColors } from '../../tailwind.config'
import { navConfig } from '@/config/nav'
import Headroom from 'react-headroom'
import { useState } from 'react'

export default function Header() {
    const { currentSectionId, sectionRefs } = useIntersection()
    const [unPinned, setUnPinned] = useState<boolean>(false)

    const scrollToSection = (id: number) => {
        sectionRefs.current[id - 1].current!.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <Headroom
        onUnpin={() => setUnPinned(true)} 
        onPin={() => setUnPinned(false)} 
        style={{ top: unPinned ? '90px' : '0px'}}
        >
            <div className={`top-0 pt-[90px] w-full h-full pb-[16px] z-20 bg-cozey-white`}>
                <div className={`max-w-[90%] xs:max-w-[80%] 1xl:max-w-main-container-lg mx-auto`}>
                    <div className="flex flex-col gap-[4px]">
                        <h1 className={`${cozeyRegular.className} text-[30px] md:text-[44px] xl:text-[60px] text-cozey-blue md:h-[75px]`}>Tables</h1>
                        <span className={`${haffer.className} font-normal text-cozey-black text-[15px] md:text-[20px] mb-[25px] md:mb-[20px]`}>A perfect pairing to your sofa.</span>
                        <div className='w-full flex max-1md:justify-center'>
                            <div className="flex xs:h-[48px] bg-cozey-beige gap-[10px] md:w-fit rounded-[24px] p-[8px] overflow-hidden xs:min-w-[480px]">
                                {navConfig.map(navItem => {
                                    const isActive = navItem.id == currentSectionId
                                    return (
                                        <a key={navItem.id} style={{ 
                                            backgroundColor: isActive ? cozeyColors['cozey-blue'] : 'transparent',
                                            color: isActive ? 'white' : cozeyColors['cozey-blue'],
                                            transition: 'all 0.2s ease-in-out 0s'
                                        }}
                                        onClick={() => scrollToSection(navItem.id)}
                                        className={`bg-cozey-blue text-white h-full ${haffer.className} text-[9.5px] xs:text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>{navItem.label}</a>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Headroom>
    )
}