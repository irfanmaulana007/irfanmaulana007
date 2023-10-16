import { cva } from 'class-variance-authority'

export const buttonStyle = cva(
    ['font-medium', 'ease-in', 'duration-100', 'border-transparent', 'rounded-full'],
    {
        variants: {
            intent: {
                primary: [
                    'bg-green-600',
                    'enabled:hover:bg-green-600/5',
                    'enabled:active:bg-green-600/10',
                    'text-green-600',
                    'disabled:bg-gray-60',
                    'disabled:text-gray-70',
                ],
            },
            size: {
                xl: ['px-[24px', 'py-[14px]', 'text-[20px]', 'rounded-[10px]'],
                lg: ['px-[24px]', 'py-[14px]', 'text-[14px]', 'rounded-[10px]'],
                base: ['px-[20px]', 'py-[9px]', 'text-[14px]', 'rounded-[8px]'],
                sm: ['px-[14px]', 'py-[6px]', 'text-[12px]', 'rounded-[7px]'],
                xs: ['px-[10px]', 'py-[4px]', 'text-[11px]', 'rounded-[6px]'],
                '2xs': ['text-[8px]'],
                compact: ['text-[12px]'],
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
