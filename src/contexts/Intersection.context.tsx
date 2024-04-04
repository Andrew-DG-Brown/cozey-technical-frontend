import { navConfig } from '@/config/nav';
import { createContext, useContext, useRef, useState, createRef, MutableRefObject, RefObject } from 'react';

const IntersectionContext = createContext<{
    currentSectionId: number,
    setCurrentSectionId: React.Dispatch<React.SetStateAction<number>>,
    sectionRefs: MutableRefObject<RefObject<HTMLDivElement>[]>
} | null>(null);

export const IntersectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentSectionId, setCurrentSectionId] = useState<number>(1)
    const sectionRefs = useRef<RefObject<HTMLDivElement>[]>(navConfig.map(() => createRef<HTMLDivElement>()));

    return (
        <IntersectionContext.Provider
            value={{ 
                currentSectionId, setCurrentSectionId, sectionRefs
            }}>
            { children }
        </IntersectionContext.Provider>
    )
}

export const useIntersection = () => useContext(IntersectionContext)!;