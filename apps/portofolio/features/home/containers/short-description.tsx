import { Text } from 'packages/ui'

export default function HomeShortDescriptionContainer() {
    return (
        <section className='min-h-screen bg-[#E6EBE4]'>
            <div className='h-full container mx-auto py-10'>
                <div className='h-full w-full gap-20 flex flex-col sm:flex-row items-center justify-between'>
                    <div className='h-[500px] w-full sm:w-[400px] border border-black'></div>
                    <div className='flex flex-col gap-y-4 flex-1'>
                        <Text size='heading-2' weight='semibold'>
                            Hi, I'm Irfan Maulana.
                        </Text>
                        <Text size='heading-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
                            blanditiis, dolor voluptatem aperiam voluptatibus sint enim at est hic,
                            placeat sunt maxime! Mollitia quam commodi explicabo recusandae, vitae
                            tempore numquam!
                        </Text>
                        <Text size='heading-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
                            blanditiis, dolor voluptatem aperiam voluptatibus sint enim at est hic,
                            placeat sunt maxime! Mollitia quam commodi explicabo recusandae, vitae
                            tempore numquam!
                        </Text>
                        <Text size='heading-5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
                            blanditiis, dolor voluptatem aperiam voluptatibus sint enim at est hic,
                            placeat sunt maxime! Mollitia quam commodi explicabo recusandae, vitae
                            tempore numquam!
                        </Text>
                    </div>
                </div>
            </div>
        </section>
    )
}
