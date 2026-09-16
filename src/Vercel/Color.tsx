'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const VercelColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -2537)"><g id={instanceId + "-vercel-color__Name=Vercel, Type=Color, Variant=Default"}><g id={instanceId + "-vercel-color__Vercel / Icon"}><path id={instanceId + "-vercel-color__Vercel / path 01"} fillRule="evenodd" clipRule="evenodd" d="M45 2537L69 2578.57H21L45 2537Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(VercelColor);
export default ForwardRef;
