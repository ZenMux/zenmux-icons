'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const TencentColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -2401)"><g id={instanceId + "-tencent-color__Name=Tencent, Type=Color, Variant=Default"}><g id={instanceId + "-tencent-color__Tencent / Icon"}><path id={instanceId + "-tencent-color__Tencent / path 01"} fillRule="evenodd" clipRule="evenodd" d="M176.952 2403L205 2420.6L183.826 2420.63L178.446 2447H167.978L173.36 2420.6H163.488L159 2411.8H175.154L176.952 2403Z" fill="#0052D9" style={{
            fill: "color(display-p3 0.0000 0.3216 0.8510)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(TencentColor);
export default ForwardRef;
