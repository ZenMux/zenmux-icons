'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const VllmColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -2741)"><g id={instanceId + "-vllm-color__Name=vLLM, Type=Color, Variant=Default"}><g id={instanceId + "-vllm-color__vLLM / Icon"}><path id={instanceId + "-vllm-color__vLLM / path 01"} d="M293 2750.95H311.648V2787L293 2750.95Z" fill="#FDB515" style={{
            fill: "color(display-p3 0.9922 0.7098 0.0824)",
            fillOpacity: 1
          }} /><path id={instanceId + "-vllm-color__vLLM / path 02"} d="M320.972 2749.7L337.756 2741L325.324 2787H311.648L320.972 2749.7Z" fill="#30A2FF" style={{
            fill: "color(display-p3 0.1882 0.6353 1.0000)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(VllmColor);
export default ForwardRef;
