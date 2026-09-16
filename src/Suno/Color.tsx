'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const SunoColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -2401)"><g id={instanceId + "-suno-color__Name=Suno, Type=Color, Variant=Default"}><g id={instanceId + "-suno-color__Suno / Icon"} clipPath={'url(#' + instanceId + "-suno-color__clip103_1_3407)"}><path id={instanceId + "-suno-color__Suno / path 01"} fillRule="evenodd" clipRule="evenodd" d="M190 2401C198.284 2401 205 2411.75 205 2425H187C187 2438.25 180.284 2449 172 2449C163.716 2449 157 2438.25 157 2425H175C175 2411.75 181.716 2401 190 2401Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-suno-color__clip103_1_3407"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(157 2401)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(SunoColor);
export default ForwardRef;
