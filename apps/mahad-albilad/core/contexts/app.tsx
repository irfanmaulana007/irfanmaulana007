import { createContext, useContext } from 'react'

export interface IAppContext {
    session_id: string

    isLoading?: boolean
    setIsLoading?: (bool: boolean) => void
}

export const AppContext = createContext<IAppContext | undefined>(undefined)

export function useAppContext() {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('useAppContext must be used within a AppProvider')
    }
    return context
}
