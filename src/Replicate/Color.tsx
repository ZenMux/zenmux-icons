'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ReplicateColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -2061)"><g id={instanceId + "-replicate-color__Name=Replicate, Type=Color, Variant=Default"}><g id={instanceId + "-replicate-color__Replicate / Icon"}><path id={instanceId + "-replicate-color__Replicate / path 01"} fillRule="evenodd" clipRule="evenodd" d="M65 2082.1V2086.62H49.136V2105H44.08V2082.1H65ZM65 2065V2069.53H30.056V2105H25V2065H65ZM65 2073.55V2078.08H39.592V2105H34.536V2073.55H65Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ReplicateColor);
export default ForwardRef;
