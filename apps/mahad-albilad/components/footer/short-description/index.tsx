import React from 'react'

import { Text } from 'packages/ui'

export default function FooterShortDescription() {
    return (
        <div className='flex flex-col gap-y-4'>
            <Text intent='white' size='heading-4' transform='uppercase'>
                Tentang Kami
            </Text>
            <Text intent='light' size='paragraph-2'>
                MA&apos;HAD AL-BILAD LI-I&apos;DADI AD-DU&apos;AT WA AL-HUFFADZ Al-Bilad Islamic
                Boarding School didirikan oleh DKM Al Bilad perumahan Taman Kenari Nusantara
                Cibubur.
            </Text>
        </div>
    )
}
