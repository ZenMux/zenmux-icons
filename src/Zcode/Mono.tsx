'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZcodeMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M19.5996 43.1004H2L28.4004 5.7H46L19.5996 43.1004ZM44.8975 43.1004H22.9004L26.0068 38.7C26.493 38.0093 27.2852 37.6004 28.1299 37.6004H44.8975V43.1004ZM22.0195 10.0936C21.5333 10.7864 20.7394 11.2 19.8926 11.2H3.09961V5.7H25.0996L22.0195 10.0936Z" fill="currentColor" /><defs><linearGradient id={instanceId + "-zcode-mono__paint0_linear_31_2516"} x1={28.0634} y1={4.35334} x2={35.7219} y2={51.5805} gradientUnits="userSpaceOnUse"><stop style={{
          stopColor: "currentColor",
          stopOpacity: 1
        }} /><stop offset={1} style={{
          stopColor: "currentColor",
          stopOpacity: 1
        }} /></linearGradient></defs></svg>;
};
const ForwardRef = forwardRef(ZcodeMono);
export default ForwardRef;
