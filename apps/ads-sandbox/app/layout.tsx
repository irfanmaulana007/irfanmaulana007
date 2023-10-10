import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'assets/css/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ads Sandbox',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='min-h-screen'>
            <body className={clsx('min-h-screen', inter.className)}>
                <header className='flex justify-between items-center h-[57px] border-b border-[#f2f2f2] px-5 sticky top-0 bg-white'>
                    <span className='font-bold'>Irfanmaulana007 - Ads Sandbox</span>
                </header>
                <main className='container min-h-screen px-5 py-14'>{children}</main>
            </body>
        </html>
    )
}
