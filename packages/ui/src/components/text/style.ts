import { cva } from 'class-variance-authority'

export const textStyle = cva([], {
    variants: {
        intent: {
            base: ['text-black'],
            grey: ['text-grey'],
            dark: ['text-dark'],
            light: ['text-light'],
            white: ['text-white'],
        },
        align: {
            left: ['text-left'],
            center: ['text-center'],
            right: ['text-right'],
            justify: ['text-justify'],
        },
        size: {
            'heading-1': ['text-[3.375rem]', 'leading-[4.5rem]'],
            'heading-2': ['text-[2.25rem]', 'leading-[3.375rem]'],
            'heading-3': ['text-[1.5rem]', 'leading-[2.25rem]'],
            'heading-4': ['text-[1.25rem]', 'leading-[1.875rem]'],
            'heading-5': ['text-[1.125rem]', 'leading-[1.625rem]'],
            'heading-6': ['text-[1rem]', 'leading-[1.5rem]'],
            base: ['text-[1rem] ', 'leading-[1.5rem]'],
            'paragraph-1': ['text-[0.875rem] ', 'leading-[1.25rem]'],
            'paragraph-2': ['text-[0.75rem] ', 'leading-[1.125rem]'],
            'paragraph-3': ['text-[0.625rem] ', 'leading-[0.875rem]'],
            'paragraph-4': ['text-[0.5rem] ', 'leading-[0.75rem]'],
        },
        transform: {
            normal: ['normal-case'],
            lowercase: ['lowercase'],
            capitalize: ['capitalize'],
            uppercase: ['uppercase'],
        },
        weight: {
            regular: ['font-regular'],
            semibold: ['font-medium'],
            bold: ['font-bold'],
        },
    },
    defaultVariants: {
        intent: 'base',
        align: 'left',
        size: 'base',
        transform: 'normal',
        weight: 'regular',
    },
})
