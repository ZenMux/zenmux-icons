'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ReplitLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-replit-light__Name=Replit, Type=Dark, Variant=Default"}><g id={instanceId + "-replit-light__Replit / Icon"}><path id={instanceId + "-replit-light__Replit / path 01"} fillRule="evenodd" clipRule="evenodd" d="M23.756 15.522H6.964C6.57801 15.5254 6.19512 15.4528 5.83722 15.3081C5.47932 15.1635 5.15343 14.9498 4.87817 14.6792C4.60291 14.4086 4.38367 14.0864 4.23299 13.731C4.08231 13.3756 4.00314 12.994 4 12.608V2.914C4 1.288 5.34 0 6.964 0H20.79C22.444 0 23.756 1.316 23.756 2.914V15.522ZM41.764 32.43H23.774V15.5H41.764C43.504 15.5 44.94 16.934 44.94 18.672V29.26C44.94 31.03 43.506 32.43 41.764 32.43ZM20.79 48H6.964C5.34 48 4 46.686 4 45.092V35.386C4 33.792 5.34 32.478 6.964 32.478H23.756V45.092C23.756 46.686 22.416 48 20.79 48Z" fill="#000000" fillOpacity={1} /></g></g></svg>;
};
const ForwardRef = forwardRef(ReplitLight);
export default ForwardRef;
