'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZapierLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-zapier-light__Name=Zapier, Type=Dark, Variant=Default"}><g id={instanceId + "-zapier-light__Zapier / Icon"}><path id={instanceId + "-zapier-light__Zapier / path 01"} fillRule="evenodd" clipRule="evenodd" d="M37 32H11V38H37V32Z" fill="#000000" fillOpacity={1} /></g></g></svg>;
};
const ForwardRef = forwardRef(ZapierLight);
export default ForwardRef;
