'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const FluxColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -565)"><g id={instanceId + "-flux-color__Name=FLUX, Type=Color, Variant=Default"}><g id={instanceId + "-flux-color__FLUX / Icon"}><path id={instanceId + "-flux-color__FLUX / path 01"} fillRule="evenodd" clipRule="evenodd" d="M293 606.366L317.02 570L341 606.366H336.534L317.018 576.756L299.942 602.612H324.186L326.664 606.366H293Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /><path id={instanceId + "-flux-color__FLUX / path 02"} fillRule="evenodd" clipRule="evenodd" d="M309.138 598.448L313.284 592.218L317.432 598.448H309.138ZM329.48 606.366L318.144 588.952H322.498L333.87 606.366H329.48ZM332.48 588.352L336.74 581.972L341 588.352H332.48Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(FluxColor);
export default ForwardRef;
