'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const TraeLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><path d="M48 41.0818H6.856V34.2298H0V6.7998H48V41.0818ZM6.856 34.2298H41.144V13.6538H6.856V34.2298ZM24.002 23.8378L19.152 28.6858L14.304 23.8378L19.152 18.9898L24.002 23.8378ZM37.716 23.8358L32.868 28.6818L28.018 23.8358L32.868 18.9858L37.716 23.8358Z" fill="white" style={{
      fill: "white",
      fillOpacity: 1
    }} /></svg>;
};
const ForwardRef = forwardRef(TraeLight);
export default ForwardRef;
