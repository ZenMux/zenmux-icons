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
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-luma-mono__Name=Luma, Type=Dark, Variant=Default"}><g id={instanceId + "-luma-mono__Luma / Icon"}><path id={instanceId + "-luma-mono__Luma / path 01"} fillRule="evenodd" clipRule="evenodd" d="M24.786 48L4 35.996L24.786 23.996L45.57 35.996L24.784 47.996L24.786 48Z" fill="currentColor" fillOpacity={0.66} /><path id={instanceId + "-luma-mono__Luma / path 02"} fillRule="evenodd" clipRule="evenodd" d="M4 11.998L24.786 0V48L4 36V11.998Z" fill="currentColor" fillOpacity={0.66} /></g></g></svg>;
};
const ForwardRef = forwardRef(LumaMono);
export default ForwardRef;
