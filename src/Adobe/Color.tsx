'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AdobeColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-adobe-color__Name=Adobe, Type=Color, Variant=Default"}><g id={instanceId + "-adobe-color__Adobe / Icon"}><path id={instanceId + "-adobe-color__Adobe / path 01"} d="M29.72 6H46V44L29.72 6ZM18.28 6H2V44L18.28 6ZM23.984 19.996L34.364 44H27.576L24.478 36.374H16.898L23.984 19.996Z" fill="#EB1000" style={{
          fill: "color(display-p3 0.9216 0.0627 0.0000)",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(AdobeColor);
export default ForwardRef;
