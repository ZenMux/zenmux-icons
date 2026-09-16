'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -2809)"><g id={instanceId + "-zai-mono__Name=Z.ai, Type=Dark, Variant=Default"}><g id={instanceId + "-zai-mono__Z.ai / Icon_2"}><path id={instanceId + "-zai-mono__Z.ai / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M113.21 2813L108.854 2818.91H90.306L94.66 2813H113.212H113.21ZM135.508 2847.1L131.156 2853H112.672L117.02 2847.1H135.508ZM137 2813L107.528 2853H89L118.472 2813H137Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ZaiMono);
export default ForwardRef;
