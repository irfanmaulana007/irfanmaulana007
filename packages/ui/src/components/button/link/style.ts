import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
    ['font-medium', 'ease-in', 'duration-100', 'border-transparent', 'rounded-full'],
    {
        variants: {
            intent: {
                primary: ['text-green-600', 'enabled:hover:underline', 'focus:underline'],
            },
            size: {
                xl: ['px-[24px', 'py-[14px]', 'text-xl', 'rounded-[10px]'],
                lg: ['px-[24px]', 'py-[14px]', 'text-lg', 'rounded-[10px]'],
                base: ['px-[20px]', 'py-[9px]', 'rounded-[8px]'],
                sm: ['px-[14px]', 'py-[6px]', 'text-sm', 'rounded-[7px]'],
                xs: ['px-[10px]', 'py-[4px]', 'text-xs', 'rounded-[6px]'],
                '2xs': ['text-2xs'],
                compact: ['text-xs'],
            },
            transform: {
                normal: ['normal-case'],
                lowercase: ['lowercase'],
                capitalize: ['capitalize'],
                uppercase: ['uppercase'],
            },
            width: {
                fit: ['w-fit'],
                full: ['w-full'],
            },
        },
        defaultVariants: {
            intent: 'primary',
            size: 'base',
            transform: 'normal',
            width: 'fit',
        },
    },
)
