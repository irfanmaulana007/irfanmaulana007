'use client'

import { AppContext, IAppContext } from 'contexts/app'
// import mixpanel from 'utils/mixpanel'
import { PropsWithChildren, useEffect, useState } from 'react'

export const AppProvider = ({ children, ...props }: PropsWithChildren<IAppContext>) => {
    const { session_id } = props

    const [isLoading, setIsLoading] = useState<boolean>(true)

    // useEffect(() => {
    //     mixpanel.init('c4f6e2f16e01d248fcc8c19a6c6984ab', true)

    //     mixpanel.register({
    //         session_id: session_id,
    //     })

    //     setIsLoading(false)
    // }, [session_id])

    return (
        <AppContext.Provider
            value={{
                session_id,
                isLoading,
                setIsLoading,
            }}>
            {children}
        </AppContext.Provider>
    )
}
