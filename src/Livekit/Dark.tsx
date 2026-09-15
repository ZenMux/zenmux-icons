'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LivekitDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-livekit-dark__Name=LiveKit, Type=Dark, Variant=Default"}><g id={instanceId + "-livekit-dark__LiveKit / Icon"}><path id={instanceId + "-livekit-dark__LiveKit / path 01"} fillRule="evenodd" clipRule="evenodd" d="M28 20H20V28H28V20ZM36 12H28V20.002H36V12ZM36 28H28V36H36V28ZM44 4H36V12H44V4ZM44 36H36V44H44V36Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /><path id={instanceId + "-livekit-dark__LiveKit / path 02"} fillRule="evenodd" clipRule="evenodd" d="M12 36V4H4V44H28V36H12Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(LivekitDark);
export default ForwardRef;
