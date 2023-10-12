import Link from 'next/link'

import { Text } from 'packages/ui'

export default function FooterInformation() {
    return (
        <div className='flex flex-col gap-y-4'>
            <Text intent='white' size='heading-4' transform='uppercase'>
                Informasi
            </Text>
            <ul className='list-unstyled small text-capitalize mt-0'>
                <li>
                    <Link href='home'>
                        <Text intent='light' size='paragraph-2' transform='capitalize'>
                            beranda
                        </Text>
                    </Link>
                </li>
                <li>
                    <Link href='registration'>
                        <Text intent='light' size='paragraph-2' transform='capitalize'>
                            pendaftaran
                        </Text>
                    </Link>
                </li>
                <li>
                    <Link href='about'>
                        <Text intent='light' size='paragraph-2' transform='capitalize'>
                            tentang kami
                        </Text>
                    </Link>
                </li>
                <li>
                    <Link href='article'>
                        <Text intent='light' size='paragraph-2' transform='capitalize'>
                            artikel
                        </Text>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
