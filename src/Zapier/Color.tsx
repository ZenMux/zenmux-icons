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
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-zapier-color__Name=Zapier, Type=Color, Variant=Default"}><g id={instanceId + "-zapier-color__Zapier / Icon"}><path id={instanceId + "-zapier-color__Zapier / path 01"} d="M37 32H11V38H37V32Z" fill="#FF4F00" style={{
          fill: "color(display-p3 1.0000 0.3098 0.0000)",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(ZapierColor);
export default ForwardRef;
