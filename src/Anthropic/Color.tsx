'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AnthropicColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -293)"><g id={instanceId + "-anthropic-color__Name=Anthropic, Type=Color, Variant=Default"}><g id={instanceId + "-anthropic-color__Anthropic / Icon"}><path id={instanceId + "-anthropic-color__Anthropic / path 01"} fillRule="evenodd" clipRule="evenodd" d="M320.654 300.04H327.86L341 333H333.794L320.654 300.04ZM306.138 300.04H313.672L326.812 333H319.464L316.778 326.078H303.034L300.346 332.998H293L306.14 300.044L306.138 300.04ZM314.402 319.958L309.906 308.374L305.41 319.96H314.4L314.402 319.958Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(AnthropicColor);
export default ForwardRef;
