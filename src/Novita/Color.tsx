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
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-novita-color__clip0_22_2263)"}><path fillRule="evenodd" clipRule="evenodd" d="M18.334 8.34V19.67L0 38.006H18.334V26.674L29.666 38.006H48L18.334 8.34Z" fill="#23D57C" style={{
        fill: "color(display-p3 0.1373 0.8353 0.4863)",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-novita-color__clip0_22_2263"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(NovitaColor);
export default ForwardRef;
