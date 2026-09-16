'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AnthropicMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -293)"><g id={instanceId + "-anthropic-mono__Name=Anthropic, Type=Dark, Variant=Default"}><g id={instanceId + "-anthropic-mono__Anthropic / Icon_2"}><path id={instanceId + "-anthropic-mono__Anthropic / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M388.654 300.04H395.86L409 333H401.794L388.654 300.04ZM374.138 300.04H381.672L394.812 333H387.464L384.778 326.078H371.034L368.346 332.998H361L374.14 300.044L374.138 300.04ZM382.402 319.958L377.906 308.374L373.41 319.96H382.4L382.402 319.958Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(AnthropicMono);
export default ForwardRef;
