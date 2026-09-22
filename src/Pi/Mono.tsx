'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PiMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M33.9707 23.9707H23.9707V33.9707H13.9707V43.9707H3.9707V3.9707H33.9707V23.9707ZM43.9707 43.9707H33.9707V23.9707H43.9707V43.9707ZM13.9707 23.9707H23.9707V13.9707H13.9707V23.9707Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
};
const ForwardRef = forwardRef(PiMono);
export default ForwardRef;
