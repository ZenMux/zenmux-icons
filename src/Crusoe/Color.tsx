'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const CrusoeColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -837)"><g id={instanceId + "-crusoe-color__Name=Crusoe, Type=Color, Variant=Default"}><g id={instanceId + "-crusoe-color__Crusoe / Icon"}><path id={instanceId + "-crusoe-color__Crusoe / path 01"} d="M317 837L302.166 850.166C295.706 855.904 295.706 866.096 302.166 871.834L317 885L331.834 871.834C338.294 866.096 338.294 855.904 331.834 850.166L317 837Z" fill={'url(#' + instanceId + "-crusoe-color__paint21_linear_1_3407)"} /></g></g></g><defs><linearGradient id={instanceId + "-crusoe-color__paint21_linear_1_3407"} x1={330.838} y1={848.19} x2={302.706} y2={873.602} gradientUnits="userSpaceOnUse"><stop stopColor="#F4BF45" style={{
          stopColor: "color(display-p3 0.9569 0.7490 0.2706)",
          stopOpacity: 1
        }} /><stop offset={0.35} stopColor="#E48047" style={{
          stopColor: "color(display-p3 0.8941 0.5020 0.2784)",
          stopOpacity: 1
        }} /><stop offset={0.69} stopColor="#C73361" style={{
          stopColor: "color(display-p3 0.7804 0.2000 0.3804)",
          stopOpacity: 1
        }} /><stop offset={1} stopColor="#A42F5F" style={{
          stopColor: "color(display-p3 0.6431 0.1843 0.3725)",
          stopOpacity: 1
        }} /></linearGradient></defs></svg>;
};
const ForwardRef = forwardRef(CrusoeColor);
export default ForwardRef;
