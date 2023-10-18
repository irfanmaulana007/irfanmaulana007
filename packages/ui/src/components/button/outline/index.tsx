import { buttonStyle } from './style'
import { ButtonProps } from './type'
import React, { PropsWithChildren } from 'react'

export const ButtonOutline: React.FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className,
    intent,
    size,
    transform,
    width,
    ...props
}) => (
    <button className={buttonStyle({ intent, size, transform, width, className })} {...props}>
        <div className='flex items-center justify-center whitespace-nowrap gap-x-[5px]'>
            {children}
        </div>
    </button>
)
