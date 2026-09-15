'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const JunieColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-junie-color__Name=Junie, Type=Color, Variant=Default"}><g id={instanceId + "-junie-color__Junie / Icon"} clipPath={'url(#' + instanceId + "-junie-color__clip0_436_4424)"}><path id={instanceId + "-junie-color__Junie / path 01"} d="M48 18.666C48 37.332 40 48 18.666 48H16V32H18.666C28 32 32 28 32 18.666V16H48V18.666ZM16 32H0V16H16V32ZM32 16H16V0H32V16Z" fill="#47E054" style={{
          fill: "color(display-p3 0.2784 0.8784 0.3294)",
          fillOpacity: 1
        }} /></g></g><defs><clipPath id={instanceId + "-junie-color__clip0_436_4424"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(JunieColor);
export default ForwardRef;
