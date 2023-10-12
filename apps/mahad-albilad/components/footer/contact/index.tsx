import { Text } from 'packages/ui'

export default function FooterContact() {
    return (
        <div className='flex flex-col gap-y-4'>
            <Text intent='white' size='heading-4' transform='uppercase'>
                Kontak
            </Text>
            <ul className='list-unstyled'>
                <li>
                    <a
                        href='https://www.facebook.com/mahad.albilad/'
                        target='_blank'
                        rel='noreferrer'>
                        <Text intent='light' size='paragraph-2'>
                            <i className='fa fa-facebook mr-3'></i> Al-Bilad Islamic Boarding School
                        </Text>
                    </a>
                </li>
                <li>
                    <a href='https://wa.me/6285325434248' target='_blank' rel='noreferrer'>
                        <Text intent='light' size='paragraph-2'>
                            <i className='fa fa-whatsapp mr-3'></i> +62 8532 5434 248 (Ustadz Kholid
                            Mirbah, Lc*)
                        </Text>
                    </a>
                </li>
                {/* <li><FontAwesomeIcon icon={faEnvelope} className="mr-3" /> khalid@mahad-albilad.or.id</li> */}
            </ul>
        </div>
    )
}
