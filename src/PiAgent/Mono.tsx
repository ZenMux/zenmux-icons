'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PiAgentMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -1993)"><g id={instanceId + "-pi-agent-mono__Name=Pi Agent, Type=Dark, Variant=Default"}><g id={instanceId + "-pi-agent-mono__Pi Agent / Icon_2"}><path id={instanceId + "-pi-agent-mono__Pi Agent / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M227 1995H260V2017H249V2028H238V2039H227V1995ZM238 2006V2017H249V2006H238Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /><path id={instanceId + "-pi-agent-mono__Pi Agent / path 02_2"} fillRule="evenodd" clipRule="evenodd" d="M260 2017H271V2039H260V2017Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(PiAgentMono);
export default ForwardRef;
