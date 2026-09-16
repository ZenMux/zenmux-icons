'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const VercelLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -2537)"><g id={instanceId + "-vercel-light__Name=Vercel, Type=Dark, Variant=Default"}><g id={instanceId + "-vercel-light__Vercel / Icon_2"}><path id={instanceId + "-vercel-light__Vercel / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M113 2537L137 2578.57H89L113 2537Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(VercelLight);
export default ForwardRef;
