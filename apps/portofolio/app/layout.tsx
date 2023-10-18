import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import 'packages/ui/dist/index.css'

import Footer from 'components/footer'
import Navigation from 'components/navigation'

import 'assets/css/global.css'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Irfanmaulan007',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={raleway.className}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
