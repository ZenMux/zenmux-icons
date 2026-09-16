'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PikaDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -1993)"><g id={instanceId + "-pika-dark__Name=Pika, Type=Dark, Variant=Default"}><g id={instanceId + "-pika-dark__Pika / Icon_2"} clipPath={'url(#' + instanceId + "-pika-dark__clip95_1_3407)"}><path id={instanceId + "-pika-dark__Pika / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M362.322 2032.78H379.654C379.374 2029.96 377.364 2026.87 372.452 2024.76V2024.56C378.178 2026.32 380.238 2029.33 381.076 2032.78H402.46L399.02 2029.82C401.034 2023.49 409 2020.49 409 2020.49C408.718 2015.41 406.118 2010.68 397.426 2006.84L377.652 1999C378.314 2007.36 381.274 2012.15 388.698 2013.33V2013.53C383.54 2013.4 379.962 2011.1 378.148 2006.35C362.396 2009.25 358.6 2021.31 362.322 2032.78Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-pika-dark__clip95_1_3407"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(361 1993)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(PikaDark);
export default ForwardRef;
