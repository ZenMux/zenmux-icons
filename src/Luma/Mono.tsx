'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LumaMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -1517)"><g id={instanceId + "-luma-mono__Name=Luma, Type=Dark, Variant=Default"}><g id={instanceId + "-luma-mono__Luma / Icon_2"}><path id={instanceId + "-luma-mono__Luma / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M113.786 1565L93 1553L113.786 1541L134.57 1553L113.784 1565L113.786 1565Z" fill="currentColor" fillOpacity={0.66} style={{
            fill: "currentColor",
            fillOpacity: 0.66
          }} /><path id={instanceId + "-luma-mono__Luma / path 02_2"} fillRule="evenodd" clipRule="evenodd" d="M93 1529L113.786 1517V1565L93 1553V1529Z" fill="currentColor" fillOpacity={0.66} style={{
            fill: "currentColor",
            fillOpacity: 0.66
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LumaMono);
export default ForwardRef;
