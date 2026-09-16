'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ElevenlabsColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -565)"><g id={instanceId + "-elevenlabs-color__Name=ElevenLabs, Type=Color, Variant=Default"}><g id={instanceId + "-elevenlabs-color__ElevenLabs / Icon"}><path id={instanceId + "-elevenlabs-color__ElevenLabs / path 01"} fillRule="evenodd" clipRule="evenodd" d="M31 565H41V613H31V565ZM49 565H59V613H49V565Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ElevenlabsColor);
export default ForwardRef;
