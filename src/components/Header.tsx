import { cozeyRegular, haffer } from '@/assets/fonts'
import { useIntersection } from '@/contexts/Intersection.context'
import { cozeyColors } from '../../tailwind.config'
import { navConfig } from '@/config/nav'

export default function Header() {
    const { currentSectionId, sectionRefs } = useIntersection()

    const scrollToSection = (id: number) => {
        sectionRefs.current[id - 1].current!.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <div className={`fixed top-0 pt-[90px] w-full pb-[16px] z-20 bg-cozey-white`}>
            <div className={`max-w-main-container-lg mx-auto`}>
                <div className="flex flex-col gap-[4px]">
                    <h1 className={`${cozeyRegular.className} text-[60px] text-cozey-blue h-[75px]`}>Tables</h1>
                    <span className={`${haffer.className} font-normal text-cozey-black text-[20px] mb-[20px]`}>A perfect pairing to your sofa.</span>
                    <div className="flex h-[48px] bg-cozey-beige gap-[10px] w-fit rounded-[24px] overflow-hidden p-[8px]">
                        {navConfig.map(navItem => {
                            const isActive = navItem.id == currentSectionId
                            return (
                                <a key={navItem.id} style={{ 
                                    backgroundColor: isActive ? cozeyColors['cozey-blue'] : 'transparent',
                                    color: isActive ? 'white' : cozeyColors['cozey-blue'],
                                    transition: 'all 0.2s ease-in-out 0s'
                                }}
                                onClick={() => scrollToSection(navItem.id)}
                                className={`bg-cozey-blue text-white h-full ${haffer.className} text-[15px] py-[6px] px-[16px] flex items-center justify-center rounded-[16px] overflow-hidden cursor-pointer whitespace-nowrap`}>{navItem.label}</a>
                            )
                        })}
                    </div>
                </div>  
            </div>
        </div>
    )
}