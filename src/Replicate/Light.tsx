'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ReplicateLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -2061)"><g id={instanceId + "-replicate-light__Name=Replicate, Type=Dark, Variant=Default"}><g id={instanceId + "-replicate-light__Replicate / Icon_2"}><path id={instanceId + "-replicate-light__Replicate / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M133 2082.1V2086.62H117.136V2105H112.08V2082.1H133ZM133 2065V2069.53H98.056V2105H93V2065H133ZM133 2073.55V2078.08H107.592V2105H102.536V2073.55H133Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ReplicateLight);
export default ForwardRef;
