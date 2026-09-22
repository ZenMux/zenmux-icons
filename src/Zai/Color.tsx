'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-zai-color__clip0_8_2066)"}><path d="M19.5996 43.1004H2L28.4004 5.70001H46L19.5996 43.1004ZM44.8975 43.1004H22.9004L26.0068 38.7C26.493 38.0093 27.2852 37.6004 28.1299 37.6004H44.8975V43.1004ZM22.0195 10.0936C21.5333 10.7864 20.7394 11.2 19.8926 11.2H3.09961V5.70001H25.0996L22.0195 10.0936Z" fill={'url(#' + instanceId + "-zai-color__paint0_linear_8_2066)"} /></g><defs><linearGradient id={instanceId + "-zai-color__paint0_linear_8_2066"} x1={28.0634} y1={4.35335} x2={35.7219} y2={51.5805} gradientUnits="userSpaceOnUse"><stop style={{
          stopColor: "black",
          stopOpacity: 1
        }} /><stop offset={1} style={{
          stopColor: "black",
          stopOpacity: 1
        }} /></linearGradient><clipPath id={instanceId + "-zai-color__clip0_8_2066"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(ZaiColor);
export default ForwardRef;
