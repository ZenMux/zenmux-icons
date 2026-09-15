'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const OpencodeMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-opencode-mono__Name=opencode, Type=Dark, Variant=Default"}><g id={instanceId + "-opencode-mono__opencode / Icon"}><path id={instanceId + "-opencode-mono__opencode / path 01"} fillRule="evenodd" clipRule="evenodd" d="M32 12H16V36H32V12ZM40 44H8V4H40V44Z" fill="currentColor" fillOpacity={1} /></g></g></svg>;
};
const ForwardRef = forwardRef(OpencodeMono);
export default ForwardRef;
