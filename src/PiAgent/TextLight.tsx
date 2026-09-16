'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PiAgentTextLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -4201) scale(1.43359375)"><g id={instanceId + "-pi-agent-text-light__Name=Pi Agent, Type=Color, Language=Default"}><g id={instanceId + "-pi-agent-text-light__Pi Agent / Wordmark"}><path id={instanceId + "-pi-agent-text-light__Pi Agent / path 01"} fillRule="evenodd" clipRule="evenodd" d="M15.346 2931.1H26.8556V2938.77H23.0191V2942.6H19.1826V2946.44H15.346V2931.1ZM19.1826 2934.93V2938.77H23.0191V2934.93H19.1826Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /><path id={instanceId + "-pi-agent-text-light__Pi Agent / path 02"} fillRule="evenodd" clipRule="evenodd" d="M26.8556 2938.77H30.6921V2946.44H26.8556V2938.77Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(PiAgentTextLight);
export default ForwardRef;
