'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const InferenceMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -1313)"><g id={instanceId + "-inference-mono__Name=Inference, Type=Dark, Variant=Default"}><g id={instanceId + "-inference-mono__Inference / Icon_2"}><path id={instanceId + "-inference-mono__Inference / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M133 1355.75H123.22V1318.24H133V1355.75ZM118.064 1355.75H111.126V1318.24H118.064V1355.75ZM106.528 1355.75H101.208V1318.24H106.528V1355.75ZM96.806 1355.75H93V1318.24H96.806V1355.75Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(InferenceMono);
export default ForwardRef;
