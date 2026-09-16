'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LovableLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -1449)"><g id={instanceId + "-lovable-light__Name=Lovable, Type=Dark, Variant=Default"}><g id={instanceId + "-lovable-light__Lovable / Icon_2"} clipPath={'url(#' + instanceId + "-lovable-light__clip61_1_3407)"}><path id={instanceId + "-lovable-light__Lovable / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M239.164 1449C246.984 1449 253.326 1455.36 253.326 1463.2V1468.6H258.04C265.86 1468.6 272.204 1474.96 272.204 1482.8C272.204 1490.65 265.864 1497 258.04 1497H225V1463.2C225 1455.36 231.34 1449 239.164 1449Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-lovable-light__clip61_1_3407"}><rect width={48} height={48} fill="#fff" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(225 1449)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(LovableLight);
export default ForwardRef;
