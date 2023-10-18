import React from 'react'

import { textStyle } from './style'
import { TextProps } from './type'

export const Text: React.FC<TextProps> = ({ className, intent, align, size, transform, weight, ...props }) => (
    <span className={textStyle({ intent, align, size, transform, weight, className })} {...props} />
)
