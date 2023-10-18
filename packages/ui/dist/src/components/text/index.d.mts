import React, { HTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';

declare const textStyle: (props?: ({
    intent?: "base" | "grey" | "dark" | "light" | "white" | null | undefined;
    align?: "center" | "left" | "right" | "justify" | null | undefined;
    size?: "base" | "heading-1" | "heading-2" | "heading-3" | "heading-4" | "heading-5" | "heading-6" | "paragraph-1" | "paragraph-2" | "paragraph-3" | "paragraph-4" | null | undefined;
    transform?: "normal" | "lowercase" | "capitalize" | "uppercase" | null | undefined;
    weight?: "bold" | "regular" | "semibold" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;

interface TextProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof textStyle> {
}

declare const Text: React.FC<TextProps>;

export { Text };
