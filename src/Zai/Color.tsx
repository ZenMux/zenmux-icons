'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -2809)"><g id={instanceId + "-zai-color__Name=Z.ai, Type=Color, Variant=Default"}><g id={instanceId + "-zai-color__Z.ai / Icon"}><path id={instanceId + "-zai-color__Z.ai / path 01"} fillRule="evenodd" clipRule="evenodd" d="M45.21 2813L40.854 2818.91H22.306L26.66 2813H45.212H45.21ZM67.508 2847.1L63.156 2853H44.672L49.02 2847.1H67.508ZM69 2813L39.528 2853H21L50.472 2813H69Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ZaiColor);
export default ForwardRef;
