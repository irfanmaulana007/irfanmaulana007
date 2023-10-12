import { Text } from 'packages/ui'

export default function FooterCopyright() {
    return (
        <div className='flex justify-between'>
            <Text intent='light' size='paragraph-2' transform='uppercase'>
                Ma&apos;had Al Bilad Li I&apos;dadi Ad-Du&apos;at Walhuffadz
            </Text>
            <Text intent='light' size='paragraph-2' align='right'>
                &copy; Ma&apos;had-Albilad 2021.
            </Text>
        </div>
    )
}
