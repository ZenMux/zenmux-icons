'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const NovitaMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -1857)"><g id={instanceId + "-novita-mono__Name=Novita, Type=Dark, Variant=Default"}><g id={instanceId + "-novita-mono__Novita / Icon_2"}><path id={instanceId + "-novita-mono__Novita / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M107.334 1865.34V1876.67L89 1895.01H107.334V1883.67L118.666 1895.01H137L107.334 1865.34Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(NovitaMono);
export default ForwardRef;
