'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZapierColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -2809)"><g id={instanceId + "-zapier-color__Name=Zapier, Type=Color, Variant=Default"}><g id={instanceId + "-zapier-color__Zapier / Icon"}><path id={instanceId + "-zapier-color__Zapier / path 01"} d="M194 2841H168V2847H194V2841Z" fill="#FF4F00" style={{
            fill: "color(display-p3 1.0000 0.3098 0.0000)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ZapierColor);
export default ForwardRef;
