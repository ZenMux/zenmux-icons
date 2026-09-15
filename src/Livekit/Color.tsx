'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LivekitColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-livekit-color__Name=LiveKit, Type=Color, Variant=Default"}><g id={instanceId + "-livekit-color__LiveKit / Icon"}><path id={instanceId + "-livekit-color__LiveKit / path 01"} d="M28 20H20V28H28V20ZM36 12H28V20.002H36V12ZM36 28H28V36H36V28ZM44 4H36V12H44V4ZM44 36H36V44H44V36Z" fill="#1FD5F9" style={{
          fill: "color(display-p3 0.1216 0.8353 0.9765)",
          fillOpacity: 1
        }} /><path id={instanceId + "-livekit-color__LiveKit / path 02"} d="M12 36V4H4V44H28V36H12Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(LivekitColor);
export default ForwardRef;
