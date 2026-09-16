'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PiAgentColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -1993)"><g id={instanceId + "-pi-agent-color__Name=Pi Agent, Type=Color, Variant=Default"}><g id={instanceId + "-pi-agent-color__Pi Agent / Icon"}><path id={instanceId + "-pi-agent-color__Pi Agent / path 01"} fillRule="evenodd" clipRule="evenodd" d="M159 1995H192V2017H181V2028H170V2039H159V1995ZM170 2006V2017H181V2006H170Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /><path id={instanceId + "-pi-agent-color__Pi Agent / path 02"} fillRule="evenodd" clipRule="evenodd" d="M192 2017H203V2039H192V2017Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(PiAgentColor);
export default ForwardRef;
