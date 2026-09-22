'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ClackyaiLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M29.3402 13.72L23.9002 17L21.1802 15.38L26.6402 12.1L23.8602 10.46L15.7002 15.4L23.9202 20.3L32.1002 15.36L29.3402 13.72Z" fill="white" style={{
      fill: "white",
      fillOpacity: 1
    }} /><path fillRule="evenodd" clipRule="evenodd" d="M22 22.8L21.98 22.78L6 13L0 31.48L21.98 45.2L22 45.22V22.8Z" fill="white" fillOpacity={0.8} style={{
      fill: "white",
      fillOpacity: 0.8
    }} /><path fillRule="evenodd" clipRule="evenodd" d="M42 13L24 2L6 13L9.82 15.34L24 6.68L38.16 15.34L26.02 22.78L26 22.8V45.22L26.02 45.2L48 31.48L42 13Z" fill="white" style={{
      fill: "white",
      fillOpacity: 1
    }} /></svg>;
};
const ForwardRef = forwardRef(ClackyaiLight);
export default ForwardRef;
