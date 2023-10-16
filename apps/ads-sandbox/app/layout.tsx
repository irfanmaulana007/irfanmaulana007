import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Script from 'next/script'

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

                {/* <script type="text/javascript" src='https://widget.p3a.net/widget-exchange.dev.js?click_url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fclick%3Fbidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26url%3Dhttps%25253A%25252F%25252Fnoctuagames.com%25252Fgames%25252Fsaint-seiya&creative_url=https%253A%252F%252Fmedia.play3.id%252Frtb%252FSS-pubmatic_160x600.jpg&height=600&network=pubmatic&placement=native&url=http%3A%2F%2Flocalhost%3A8080%2Fapi%2Fv1%2Ftrack%2Fimpression%3Fadid%3D106aba8c-45a0-45d2-b1ee-6c241d6061cf%26advid%3Deffe0ae0-eb2a-4a87-a431-1a4fffdd348d%26bidid%3D7d4504a7-06c2-4e78-9de6-636921427ddd%26network%3Dpubmatic%26pubid%3Dpub12345%26userid%3D456789876567897654678987656789%26url%3Dhttps%25253A%25252F%25252Fmedia.play3.id%25252Frtb%25252FSS-pubmatic_160x600.jpg&width=160&price=0.001'></script> */}
                {/* <Script src='http://localhost:5173/js/widget.js?am=bottom-banner&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQbGF5MyIsInN1YiI6ImRpZDpldGhyOjB4MzI5QWM5MkU5Q2RFNTQ5RTBkYTJiMTQwYzY1MjU1ZDhhRWZEQzE4NSJ9.bir3iIOeFqMWSwPwDpQk9ArJjJYtsSfcy-O72kIfvLM' /> */}

                {/* <Script src='http://localhost:5173/js/widget-external-platform.js?am=bottom-banenr&aus=160x600&key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJQbGF5MyIsInN1YiI6ImRpZDpldGhyOjB4MzI5QWM5MkU5Q2RFNTQ5RTBkYTJiMTQwYzY1MjU1ZDhhRWZEQzE4NSJ9.bir3iIOeFqMWSwPwDpQk9ArJjJYtsSfcy-O72kIfvLM&click_url=https%3A%2F%2Fnoctua.gg%2Fgames%2Fidle_dino_museum&creative_url=https%3A%2F%2Fmedia.play3.id%2Frtb%2FIDM-ads_banner-160x600.jpg' /> */}
            </body>
        </html>
    )
}
