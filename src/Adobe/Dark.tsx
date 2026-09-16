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
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -89)"><g id={instanceId + "-adobe-dark__Name=Adobe, Type=Dark, Variant=Default"}><g id={instanceId + "-adobe-dark__Adobe / Icon_2"}><path id={instanceId + "-adobe-dark__Adobe / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M118.72 95H135V133L118.72 95ZM107.28 95H91V133L107.28 95ZM112.984 108.996L123.364 133H116.576L113.478 125.374H105.898L112.984 108.996Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(AdobeDark);
export default ForwardRef;
