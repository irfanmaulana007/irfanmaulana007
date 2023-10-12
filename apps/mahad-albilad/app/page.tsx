'use client'

// import mixpanel from 'core/utils/mixpanel'
import { useEffect } from 'react'

import { useAppContext } from 'contexts/app'

import HomeIntroContainers from 'features/home/containers/intro'

export default function HomePage() {
    const { isLoading } = useAppContext()

    useEffect(() => {
        if (isLoading) return

        // mixpanel.track('page_load', {
        //     path: 'home',
        // })
    }, [isLoading])

    return (
        <>
            <HomeIntroContainers />
        </>
    )
}
