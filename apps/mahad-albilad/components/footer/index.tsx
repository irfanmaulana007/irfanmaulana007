import FooterContact from './contact'
import FooterCopyright from './copyright'
import FooterInformation from './information'
import FooterShortDescription from './short-description'

export default function Footer() {
    return (
        <footer className='bg-albilad-green pt-10 pb-8'>
            <div className='flex flex-col gap-y-5 px-40'>
                <div className='grid grid-cols-12 gap-x-20 mb-2'>
                    <div className='col-span-4'>
                        <FooterShortDescription />
                    </div>
                    <div className='col-span-3 offset-1'>
                        <FooterInformation />
                    </div>
                    <div className='col-span-4'>
                        <FooterContact />
                    </div>
                </div>
                <hr />
                <FooterCopyright />
            </div>
        </footer>
    )
}
