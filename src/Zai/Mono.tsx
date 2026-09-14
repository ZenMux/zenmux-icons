'use client';
// Generated from SVG assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 86 86" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-zai-mono__a)"}><path fill="currentColor" d="M35.117 77.221H3.583l47.3-67.008h31.533zm45.325 0H41.03l5.565-7.883a4.65 4.65 0 0 1 3.804-1.971h30.043zm-40.99-59.137a4.66 4.66 0 0 1-3.811 1.983H5.554v-9.854h39.417z" /></g><defs><clipPath id={instanceId + "-zai-mono__a"}><path fill="#fff" d="M0 0h86v86H0z" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(ZaiMono);
export default ForwardRef;
