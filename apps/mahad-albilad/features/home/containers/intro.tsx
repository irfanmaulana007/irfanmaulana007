import Image from 'next/image'

import { Text } from 'packages/ui'

import MahadImage from 'assets/images/title.png'

export default function HomeIntroContainers() {
    return (
        <div className='h-screen'>
            <div
                id='bg1-intro'
                className='h-full pt-5 pb-10 flex flex-col items-center justify-center gap-y-6 relative'>
                <Image src={MahadImage} height={120} alt='fill' />
                <div className='flex flex-col'>
                    <Text intent='white' size='heading-3' align='center'>
                        Al-Bilad Islamic Boarding School
                    </Text>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <Text intent='light' size='paragraph-1' align='center'>
                        Mencetak Generasi Qur&apos;ani, Berkafaah ilmu Syar&apos;I serta mempunyai
                        semangat dakwah yang tinggi.
                    </Text>
                    <Text intent='light' size='paragraph-1' align='center'>
                        Masjid Al Bilad Taman Kenari Nusantara, Nagrak, Kec. Gn. Putri, Bogor, Jawa
                        Barat 16967
                    </Text>
                </div>
            </div>
        </div>
    )
}
