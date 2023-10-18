import { buttonStyle } from './style'
import { VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonStyle> {}
