'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AdobeDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-adobe-dark__Name=Adobe, Type=Dark, Variant=Default"}><g id={instanceId + "-adobe-dark__Adobe / Icon"}><path id={instanceId + "-adobe-dark__Adobe / path 01"} fillRule="evenodd" clipRule="evenodd" d="M29.72 6H46V44L29.72 6ZM18.28 6H2V44L18.28 6ZM23.984 19.996L34.364 44H27.576L24.478 36.374H16.898L23.984 19.996Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(AdobeDark);
export default ForwardRef;
