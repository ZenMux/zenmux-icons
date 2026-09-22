'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const OhMyPiColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-oh-my-pi-color__clip0_31_115)"}><path d="M3.42871 5.14286H44.5716V13.5584H34.2859V44.4156H25.8703V13.5584H17.4547V34.1299H9.0391V13.5584H3.42871V5.14286Z" fill={'url(#' + instanceId + "-oh-my-pi-color__paint0_linear_31_115)"} /></g><defs><linearGradient id={instanceId + "-oh-my-pi-color__paint0_linear_31_115"} x1={3.42871} y1={5.14286} x2={42.659} y2={46.2412} gradientUnits="userSpaceOnUse"><stop stopColor="#F84FCC" style={{
          stopColor: "color(display-p3 0.9725 0.3098 0.8000)",
          stopOpacity: 1
        }} /><stop offset={0.5} stopColor="#9362F4" style={{
          stopColor: "color(display-p3 0.5765 0.3843 0.9569)",
          stopOpacity: 1
        }} /><stop offset={1} stopColor="#00DBE4" style={{
          stopColor: "color(display-p3 0.0000 0.8588 0.8941)",
          stopOpacity: 1
        }} /></linearGradient><clipPath id={instanceId + "-oh-my-pi-color__clip0_31_115"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(OhMyPiColor);
export default ForwardRef;
