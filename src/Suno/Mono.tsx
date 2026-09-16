'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const SunoMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -2401)"><g id={instanceId + "-suno-mono__Name=Suno, Type=Dark, Variant=Default"}><g id={instanceId + "-suno-mono__Suno / Icon_2"} clipPath={'url(#' + instanceId + "-suno-mono__clip104_1_3407)"}><path id={instanceId + "-suno-mono__Suno / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M258 2401C266.284 2401 273 2411.75 273 2425H255C255 2438.25 248.284 2449 240 2449C231.716 2449 225 2438.25 225 2425H243C243 2411.75 249.716 2401 258 2401Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-suno-mono__clip104_1_3407"}><rect width={48} height={48} fill="#fff" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(225 2401)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(SunoMono);
export default ForwardRef;
