'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const SunoLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-suno-light__Name=Suno, Type=Dark, Variant=Default"}><g id={instanceId + "-suno-light__Suno / Icon"} clipPath={'url(#' + instanceId + "-suno-light__clip0_436_4800)"}><path id={instanceId + "-suno-light__Suno / path 01"} fillRule="evenodd" clipRule="evenodd" d="M33 0C41.284 0 48 10.746 48 24H30C30 37.254 23.284 48 15 48C6.716 48 0 37.254 0 24H18C18 10.746 24.716 0 33 0Z" fill="#000000" fillOpacity={1} /></g></g><defs><clipPath id={instanceId + "-suno-light__clip0_436_4800"}><rect width={48} height={48} fill="#fff" fillOpacity={1} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(SunoLight);
export default ForwardRef;
