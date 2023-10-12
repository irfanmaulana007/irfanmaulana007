'use client'

import Image from 'next/image'

import WidgetContactImage from 'assets/images/whatsapp.png'

export default function WidgetContact() {
    const onClick = () => {
        window.open('https://wa.me/+6285325434248')
    }

    return (
        <div
            className='fixed right-[20px] bottom-[20px] duration-200 cursor-pointer h-[60px] w-[60px] rounded-full bg-[#25d366] hover:bg-[#128c7e] flex items-center justify-center'
            onClick={onClick}>
            <Image src={WidgetContactImage} height={36} width={36} alt='' />
        </div>
    )
}
