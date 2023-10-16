import { Text } from 'packages/ui'

export default function HomeIntroContainer() {
    return (
        <section className='flex min-h-screen flex-col items-center justify-center bg-black'>
            <Text intent='white' size='heading-3'>
                Introduction
            </Text>
        </section>
    )
}
