'use client';
import { forwardRef, type ComponentType, type CSSProperties, type HTMLAttributes } from 'react';
import type { IconProps } from './types.js';

type Artwork = ComponentType<IconProps>;
type Box = readonly [number, number, number, number];
export interface CombineProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  type?: 'mono' | 'color';
  color?: string;
  showLogo?: boolean;
  showText?: boolean;
  inverse?: boolean;
  spaceMultiple?: number;
  textMultiple?: number;
  iconProps?: IconProps;
  extra?: string;
  extraClassName?: string;
  extraStyle?: CSSProperties;
}
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  size: number;
  shape?: 'circle' | 'square';
  background?: string;
  color?: string;
  iconMultiple?: number;
  iconClassName?: string;
  iconStyle?: CSSProperties;
}

// Local layout primitives implement the compound API without a UI dependency.
// Only Combine trims transparent padding; standalone artwork stays unchanged.
export function createCombine(Mono: Artwork, Color: Artwork, Text: Artwork, monoBox: Box, colorBox: Box, textBox: Box) {
  return forwardRef<HTMLDivElement, CombineProps>(function Combine({
    size = 24, type = 'mono', color, showLogo = true, showText = true,
    inverse = false, spaceMultiple = 0.25, textMultiple = 0.8, iconProps,
    extra, extraClassName, extraStyle, style, ...props
  }, ref) {
    const Icon = type === 'color' ? Color : Mono;
    const box = type === 'color' ? colorBox : monoBox;
    const logo = showLogo ? <Icon size={size} viewBox={box.join(' ')}
      width={size * box[2] / box[3]} height={size} {...iconProps} /> : null;
    const text = showText ? <Text size={size * textMultiple} viewBox={textBox.join(' ')}
      width={size * textMultiple * textBox[2] / textBox[3]} height={size * textMultiple} /> : null;
    return <div ref={ref} style={{ display: 'inline-flex', flex: 'none', alignItems: 'center', color, ...style }} {...props}>
      <span style={{ display: 'inline-flex', alignItems: 'center', flexDirection: inverse ? 'row-reverse' : 'row',
        gap: showLogo && showText ? size * spaceMultiple : 0 }}>{logo}{text}</span>
      {extra && <span className={extraClassName} style={{ fontSize: size * textMultiple * 0.95, lineHeight: 1, ...extraStyle }}>{extra}</span>}
    </div>;
  });
}

export function createAvatar(Mono: Artwork) {
  return forwardRef<HTMLDivElement, AvatarProps>(function Avatar({
    size, shape = 'circle', background = '#000', color = '#fff',
    iconMultiple = 0.75, iconClassName, iconStyle, style, ...props
  }, ref) {
    return <div ref={ref} style={{ display: 'inline-flex', flex: 'none', alignItems: 'center',
      justifyContent: 'center', background, color, width: size, height: size,
      borderRadius: shape === 'circle' ? '50%' : Math.floor(size * 0.1),
      overflow: 'hidden', ...style }} {...props}>
      <Mono size={size} color={color} className={iconClassName}
        style={{ transform: `scale(${iconMultiple})`, ...iconStyle }} />
    </div>;
  });
}
