'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { ButtonLink, ButtonOutline, Text } from 'packages/ui'

export default function Navigation() {
    const [isTransparent, setIsTransparent] = useState<boolean>(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) setIsTransparent(false)
            else setIsTransparent(true)
        }

        window.addEventListener('scroll', handleScroll, false)
        return () => window.removeEventListener('scroll', handleScroll, false)
    }, [])

    return (
        <div
            className={clsx(
                { 'h-[84px] bg-transparent fixed top-[10px]': isTransparent },
                { 'h-[60px] bg-white fixed top-0': !isTransparent },
                'w-full duration-500',
            )}>
            <div className='h-full w-full flex items-center justify-between px-10'>
                <Text intent={isTransparent ? 'white' : 'black'} size='heading-4' weight='semibold'>
                    Irfanmaulana007
                </Text>
                <div className='hidden sm:flex gap-6'>
                    <ButtonLink>Home</ButtonLink>
                    <ButtonLink>About me</ButtonLink>
                    <ButtonOutline>Get Started</ButtonOutline>
                </div>
            </div>
        </div>
    )
}
