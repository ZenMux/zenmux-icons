'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-zai-mono__clip0_8_2075)"}><path d="M19.5996 43.1004H2L28.4004 5.70001H46L19.5996 43.1004ZM44.8975 43.1004H22.9004L26.0068 38.7C26.493 38.0093 27.2852 37.6004 28.1299 37.6004H44.8975V43.1004ZM22.0195 10.0936C21.5333 10.7864 20.7394 11.2 19.8926 11.2H3.09961V5.70001H25.0996L22.0195 10.0936Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-zai-mono__clip0_8_2075"}><rect width={48} height={48} fill="#fff" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(ZaiMono);
export default ForwardRef;
