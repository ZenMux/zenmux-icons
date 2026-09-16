'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const JunieLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -1177)"><g id={instanceId + "-junie-light__Name=Junie, Type=Dark, Variant=Default"}><g id={instanceId + "-junie-light__Junie / Icon_2"} clipPath={'url(#' + instanceId + "-junie-light__clip48_1_3407)"}><path id={instanceId + "-junie-light__Junie / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M137 1195.67C137 1214.33 129 1225 107.666 1225H105V1209H107.666C117 1209 121 1205 121 1195.67V1193H137V1195.67ZM105 1209H89V1193H105V1209ZM121 1193H105V1177H121V1193Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-junie-light__clip48_1_3407"}><rect width={48} height={48} fill="#fff" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(89 1177)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(JunieLight);
export default ForwardRef;
