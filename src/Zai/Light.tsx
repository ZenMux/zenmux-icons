'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-zai-light__Name=Z.ai, Type=Dark, Variant=Default"}><g id={instanceId + "-zai-light__Z.ai / Icon"}><path id={instanceId + "-zai-light__Z.ai / path 01"} fillRule="evenodd" clipRule="evenodd" d="M24.21 4L19.854 9.906H1.306L5.66 4H24.212H24.21ZM46.508 38.096L42.156 44H23.672L28.02 38.096H46.508ZM48 4L18.528 44H0L29.472 4H48Z" fill="#000000" fillOpacity={1} /></g></g></svg>;
};
const ForwardRef = forwardRef(ZaiLight);
export default ForwardRef;
