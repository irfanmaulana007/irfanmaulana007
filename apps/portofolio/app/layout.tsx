import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import 'assets/css/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Irfanmaulan007',
    description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
