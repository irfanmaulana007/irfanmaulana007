import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import 'assets/css/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ads Sandbox',
    description: 'description test',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en' className='min-h-screen'>
            <body className={clsx('min-h-screen', inter.className)}>
                <header className='flex justify-between items-center h-[57px] border-b border-[#f2f2f2] px-5 sticky top-0 bg-white'>
                    <span className='font-bold'>Irfanmaulana007 - Ads Sandbox</span>
                </header>
                <main className='container min-h-screen px-5 py-14'>{children}</main>

                <Script src='https://widget.p3a.net/widget.dev.js?am=overlay&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQbGF5MyIsInN1YiI6ImRpZDpldGhyOjB4MzI5QWM5MkU5Q2RFNTQ5RTBkYTJiMTQwYzY1MjU1ZDhhRWZEQzE4NSJ9.bir3iIOeFqMWSwPwDpQk9ArJjJYtsSfcy-O72kIfvLM' />
                {/* <Script src='http://localhost:3000/widget.js?am=bottom-banner&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQbGF5MyIsInN1YiI6ImRpZDpldGhyOjB4MzI5QWM5MkU5Q2RFNTQ5RTBkYTJiMTQwYzY1MjU1ZDhhRWZEQzE4NSJ9.bir3iIOeFqMWSwPwDpQk9ArJjJYtsSfcy-O72kIfvLM' /> */}
            </body>
        </html>
    )
}
