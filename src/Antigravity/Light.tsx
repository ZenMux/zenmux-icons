'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AntigravityLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-antigravity-light__clip0_38_8956)"}><path fillRule="evenodd" clipRule="evenodd" d="M43.5022 45.214C46.1822 47.224 50.2022 45.884 46.5182 42.198C35.4602 31.48 37.8082 2 24.0742 2C10.3402 2 12.6842 31.48 1.6302 42.2C-2.3898 46.218 1.9642 47.222 4.6442 45.212C15.0282 38.178 14.3582 25.784 24.0742 25.784C33.7882 25.784 33.1182 38.178 43.5022 45.214Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-antigravity-light__clip0_38_8956"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(AntigravityLight);
export default ForwardRef;
