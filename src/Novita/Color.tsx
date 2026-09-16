'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const NovitaColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -1857)"><g id={instanceId + "-novita-color__Name=Novita, Type=Color, Variant=Default"}><g id={instanceId + "-novita-color__Novita / Icon"}><path id={instanceId + "-novita-color__Novita / path 01"} fillRule="evenodd" clipRule="evenodd" d="M39.334 1865.34V1876.67L21 1895.01H39.334V1883.67L50.666 1895.01H69L39.334 1865.34Z" fill="#23D57C" style={{
            fill: "color(display-p3 0.1373 0.8353 0.4863)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(NovitaColor);
export default ForwardRef;
