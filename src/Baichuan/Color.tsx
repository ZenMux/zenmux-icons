'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const BaichuanColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -225)"><g id={instanceId + "-baichuan-color__Name=Baichuan, Type=Color, Variant=Default"}><g id={instanceId + "-baichuan-color__Baichuan / Icon"}><path id={instanceId + "-baichuan-color__Baichuan / path 01"} d="M35.666 229H29.266L25.266 237.666V260.6L21 269H31.4L35.456 260.6L35.666 229ZM50.334 229H39.934V269H50.334V229ZM54.6 240.466H65V269H54.6V240.466ZM65 229H54.6V237.266H65V229Z" fill={'url(#' + instanceId + "-baichuan-color__paint1_linear_1_3407)"} /></g></g></g><defs><linearGradient id={instanceId + "-baichuan-color__paint1_linear_1_3407"} x1={28.8162} y1={232.471} x2={61.5463} y2={268.653} gradientUnits="userSpaceOnUse"><stop stopColor="#FEC13E" style={{
          stopColor: "color(display-p3 0.9961 0.7569 0.2431)",
          stopOpacity: 1
        }} /><stop offset={1} stopColor="#FF6933" style={{
          stopColor: "color(display-p3 1.0000 0.4118 0.2000)",
          stopOpacity: 1
        }} /></linearGradient></defs></svg>;
};
const ForwardRef = forwardRef(BaichuanColor);
export default ForwardRef;
