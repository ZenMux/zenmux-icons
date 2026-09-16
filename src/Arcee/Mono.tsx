'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ArceeMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -89)"><g id={instanceId + "-arcee-mono__Name=Arcee, Type=Dark, Variant=Default"}><g id={instanceId + "-arcee-mono__Arcee / Icon_2"}><path id={instanceId + "-arcee-mono__Arcee / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M387.472 93.754L366.502 129.986H361L384.726 89L387.472 93.754ZM394.58 106.066L375.368 129.986H369.26L392.022 101.64L394.58 106.064V106.066ZM408.396 129.986H389.1L405.912 125.684L408.396 129.986ZM401.556 118.142L385.87 129.982H377.964L399.158 113.988L401.556 118.142Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ArceeMono);
export default ForwardRef;
