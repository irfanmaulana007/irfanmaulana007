import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

declare const buttonStyle: (props?: ({
    intent?: "primary" | null | undefined;
    size?: "xl" | "lg" | "base" | "sm" | "xs" | "2xs" | "compact" | null | undefined;
    transform?: "normal" | "lowercase" | "capitalize" | "uppercase" | null | undefined;
    width?: "fit" | "full" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyle> {
}

declare const ButtonTransparent: React.FC<PropsWithChildren<ButtonProps>>;

export { ButtonTransparent };
