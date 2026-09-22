'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const NovitaLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-novita-light__clip0_22_2272)"}><path fillRule="evenodd" clipRule="evenodd" d="M18.334 8.34V19.67L0 38.006H18.334V26.674L29.666 38.006H48L18.334 8.34Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-novita-light__clip0_22_2272"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(NovitaLight);
export default ForwardRef;
