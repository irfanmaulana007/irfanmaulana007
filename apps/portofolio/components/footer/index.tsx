import { ButtonLink, Text } from 'packages/ui'

export default function Footer() {
    return (
        <div className='bg-black pt-10 pb-16'>
            <div className='container mx-auto'>
                <div className='flex flex-col md:flex-row justify-between gap-10'>
                    <div className='flex-1 flex flex-col gap-4'>
                        <Text intent='white' size='heading-4' weight='semibold'>
                            Irfanmaulana007
                        </Text>
                        <div className='flex flex-col gap-2'>
                            <ButtonLink size='compact'>Page 1</ButtonLink>
                            <ButtonLink size='compact'>Page 2</ButtonLink>
                            <ButtonLink size='compact'>Page 3</ButtonLink>
                            <ButtonLink size='compact'>Page 4</ButtonLink>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <Text intent='white' size='heading-4' weight='semibold'>
                            Irfanmaulana007
                        </Text>
                        <div className='flex flex-col gap-2'>
                            <ButtonLink size='compact'>Page 1</ButtonLink>
                            <ButtonLink size='compact'>Page 2</ButtonLink>
                            <ButtonLink size='compact'>Page 3</ButtonLink>
                            <ButtonLink size='compact'>Page 4</ButtonLink>
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <Text intent='white' size='heading-4' weight='semibold'>
                            Irfanmaulana007
                        </Text>
                        <div className='flex flex-col gap-2'>
                            <ButtonLink size='compact'>Page 1</ButtonLink>
                            <ButtonLink size='compact'>Page 2</ButtonLink>
                            <ButtonLink size='compact'>Page 3</ButtonLink>
                            <ButtonLink size='compact'>Page 4</ButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
