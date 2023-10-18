import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { AppProvider } from 'providers/app-provider'

import { sessionID } from 'packages/identifiers'
import 'packages/ui/dist/index.css'

// import { MixpanelScript } from 'utils/mixpanel'
import Footer from 'components/footer'
import WidgetContact from 'components/widget/contact'

import 'assets/css/global.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Mahad Al-Bilad',
    description:
        "MA'HAD AL-BILAD LI-I'DADI AD-DU'AT WA AL-HUFFADZ Al-Bilad Islamic Boarding School. Mencetak Generasi Qur'ani, Berkafaah ilmu Syar'I serta mempunyai semangat dakwah yang tinggi. Masjid Al Bilad Taman Kenari Nusantara, Nagrak, Kec. Gn. Putri, Bogor, Jawa Barat 16967",
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const session_id = sessionID()

    return (
        <html lang='en'>
            <body className={montserrat.className}>
                {/* <MixpanelScript /> */}
                <AppProvider session_id={session_id}>
                    {children}
                    <Footer />
                    <WidgetContact />
                </AppProvider>
            </body>
        </html>
    )
}

export default RootLayout
