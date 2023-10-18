import { VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

import { textStyle } from './style'

export interface TextProps
    extends HTMLAttributes<HTMLSpanElement>,
        VariantProps<typeof textStyle> {}
