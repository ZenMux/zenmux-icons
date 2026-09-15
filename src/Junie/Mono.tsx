'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const JunieMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-junie-mono__Name=Junie, Type=Dark, Variant=Default"}><g id={instanceId + "-junie-mono__Junie / Icon"} clipPath={'url(#' + instanceId + "-junie-mono__clip0_436_4427)"}><path id={instanceId + "-junie-mono__Junie / path 01"} fillRule="evenodd" clipRule="evenodd" d="M48 18.666C48 37.332 40 48 18.666 48H16V32H18.666C28 32 32 28 32 18.666V16H48V18.666ZM16 32H0V16H16V32ZM32 16H16V0H32V16Z" fill="currentColor" fillOpacity={1} /></g></g><defs><clipPath id={instanceId + "-junie-mono__clip0_436_4427"}><rect width={48} height={48} fill="#fff" fillOpacity={1} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(JunieMono);
export default ForwardRef;
