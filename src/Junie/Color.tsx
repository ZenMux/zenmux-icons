'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const JunieColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -1177)"><g id={instanceId + "-junie-color__Name=Junie, Type=Color, Variant=Default"}><g id={instanceId + "-junie-color__Junie / Icon"} clipPath={'url(#' + instanceId + "-junie-color__clip47_1_3407)"}><path id={instanceId + "-junie-color__Junie / path 01"} d="M69 1195.67C69 1214.33 61 1225 39.666 1225H37V1209H39.666C49 1209 53 1205 53 1195.67V1193H69V1195.67ZM37 1209H21V1193H37V1209ZM53 1193H37V1177H53V1193Z" fill="#47E054" style={{
            fill: "color(display-p3 0.2784 0.8784 0.3294)",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-junie-color__clip47_1_3407"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(21 1177)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(JunieColor);
export default ForwardRef;
