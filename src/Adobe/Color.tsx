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
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -89)"><g id={instanceId + "-adobe-color__Name=Adobe, Type=Color, Variant=Default"}><g id={instanceId + "-adobe-color__Adobe / Icon"}><path id={instanceId + "-adobe-color__Adobe / path 01"} d="M50.72 95H67V133L50.72 95ZM39.28 95H23V133L39.28 95ZM44.984 108.996L55.364 133H48.576L45.478 125.374H37.898L44.984 108.996Z" fill="#EB1000" style={{
            fill: "color(display-p3 0.9216 0.0627 0.0000)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(AdobeColor);
export default ForwardRef;
