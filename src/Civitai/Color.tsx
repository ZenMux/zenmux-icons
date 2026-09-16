'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const CivitaiColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -769)"><g id={instanceId + "-civitai-color__Name=Civitai, Type=Color, Variant=Default"}><g id={instanceId + "-civitai-color__Civitai / Icon"}><path id={instanceId + "-civitai-color__Civitai / path 01"} d="M181 769L201.784 781V805L181 817L160.216 805V781L181 769Z" fill={'url(#' + instanceId + "-civitai-color__paint19_linear_1_3407)"} /><path id={instanceId + "-civitai-color__Civitai / path 02"} d="M181 776.868L194.97 784.934V801.066L181 809.13L167.03 801.066V784.934L181 776.868Z" fill={'url(#' + instanceId + "-civitai-color__paint20_linear_1_3407)"} /><path id={instanceId + "-civitai-color__Civitai / path 03"} fillRule="evenodd" clipRule="evenodd" d="M181 782.77L189.86 787.886V790.64H185.088L181 788.28L176.912 790.64V795.36L181 797.72L185.088 795.36H189.86V798.114L181 803.23L172.14 798.114V787.886L181 782.77Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g><defs><linearGradient id={instanceId + "-civitai-color__paint19_linear_1_3407"} x1={181} y1={769} x2={181} y2={817} gradientUnits="userSpaceOnUse"><stop stopColor="#1281F4" style={{
          stopColor: "color(display-p3 0.0706 0.5059 0.9569)",
          stopOpacity: 1
        }} /><stop offset={1} stopColor="#0821C6" style={{
          stopColor: "color(display-p3 0.0314 0.1294 0.7765)",
          stopOpacity: 1
        }} /></linearGradient><linearGradient id={instanceId + "-civitai-color__paint20_linear_1_3407"} x1={181} y1={776.868} x2={181} y2={809.132} gradientUnits="userSpaceOnUse"><stop stopColor="#09138A" style={{
          stopColor: "color(display-p3 0.0353 0.0745 0.5412)",
          stopOpacity: 1
        }} /><stop offset={1} stopColor="#150740" style={{
          stopColor: "color(display-p3 0.0824 0.0275 0.2510)",
          stopOpacity: 1
        }} /></linearGradient></defs></svg>;
};
const ForwardRef = forwardRef(CivitaiColor);
export default ForwardRef;
