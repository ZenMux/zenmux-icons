'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const InferenceColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -1313)"><g id={instanceId + "-inference-color__Name=Inference, Type=Color, Variant=Default"}><g id={instanceId + "-inference-color__Inference / Icon"}><path id={instanceId + "-inference-color__Inference / path 01"} fillRule="evenodd" clipRule="evenodd" d="M65 1355.75H55.22V1318.24H65V1355.75ZM50.064 1355.75H43.126V1318.24H50.064V1355.75ZM38.528 1355.75H33.208V1318.24H38.528V1355.75ZM28.806 1355.75H25V1318.24H28.806V1355.75Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(InferenceColor);
export default ForwardRef;
