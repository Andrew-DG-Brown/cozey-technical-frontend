import { createContext, useContext, useState } from 'react';

const IntersectionContext = createContext<{
    currentSectionId: number,
    setCurrentSectionId: React.Dispatch<React.SetStateAction<number>>
} | null>(null);

export const IntersectionProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentSectionId, setCurrentSectionId] = useState<number>(1)

    return (
        <IntersectionContext.Provider
            value={{ 
                currentSectionId, setCurrentSectionId
            }}>
            { children }
        </IntersectionContext.Provider>
    )
}

export const useIntersection = () => useContext(IntersectionContext)!;