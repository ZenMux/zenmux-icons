'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const SiliconflowLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-siliconflow-light__clip0_22_2293)"}><path fillRule="evenodd" clipRule="evenodd" d="M45.912 13.042H25.044C23.89 13.042 22.956 13.978 22.956 15.13V21.39C22.956 22.544 22.024 23.478 20.87 23.478H2.088C0.934 23.478 0 24.412 0 25.566V33.914C0 35.066 0.934 36 2.088 36H22.956C24.11 36 25.044 35.066 25.044 33.914V27.654C25.044 26.498 25.976 25.566 27.13 25.566H45.912C47.066 25.566 48 24.632 48 23.478V15.13C48 13.978 47.066 13.042 45.912 13.042Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-siliconflow-light__clip0_22_2293"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(SiliconflowLight);
export default ForwardRef;
