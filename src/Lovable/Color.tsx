'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LovableColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-lovable-color__Name=Lovable, Type=Color, Variant=Default"}><g id={instanceId + "-lovable-color__Lovable / Icon"} clipPath={'url(#' + instanceId + "-lovable-color__clip0_436_4507)"}><path id={instanceId + "-lovable-color__Lovable / path 01"} fillRule="evenodd" clipRule="evenodd" d="M14.164 0C21.984 0 28.326 6.358 28.326 14.2V19.6H33.04C40.86 19.6 47.204 25.956 47.204 33.8C47.204 41.646 40.864 48 33.04 48H0V14.2C0 6.36 6.34 0 14.164 0Z" fill={'url(#' + instanceId + "-lovable-color__paint0_radial_436_4507)"} /></g></g><defs><radialGradient id={instanceId + "-lovable-color__paint0_radial_436_4507"} cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(28 6) rotate(92.5448) scale(45.0444 60.968)"><stop offset={0.25} stopColor="#FE7B02" style={{
          stopColor: "color(display-p3 0.9961 0.4824 0.0078)",
          stopOpacity: 1
        }} /><stop offset={0.433} stopColor="#FE4230" style={{
          stopColor: "color(display-p3 0.9961 0.2588 0.1882)",
          stopOpacity: 1
        }} /><stop offset={0.548} stopColor="#FE529A" style={{
          stopColor: "color(display-p3 0.9961 0.3216 0.6039)",
          stopOpacity: 1
        }} /><stop offset={0.654} stopColor="#DD67EE" style={{
          stopColor: "color(display-p3 0.8667 0.4039 0.9333)",
          stopOpacity: 1
        }} /><stop offset={0.95} stopColor="#4B73FF" style={{
          stopColor: "color(display-p3 0.2941 0.4510 1.0000)",
          stopOpacity: 1
        }} /></radialGradient><clipPath id={instanceId + "-lovable-color__clip0_436_4507"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(LovableColor);
export default ForwardRef;
