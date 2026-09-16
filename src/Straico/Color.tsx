'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const StraicoColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -2265)"><g id={instanceId + "-straico-color__Name=Straico, Type=Color, Variant=Default"}><g id={instanceId + "-straico-color__Straico / Icon"}><path id={instanceId + "-straico-color__Straico / path 01"} d="M337 2277H326.444L332.776 2265H315.89L299 2297H311.666V2313L337 2277Z" fill="#464BBA" style={{
            fill: "color(display-p3 0.2745 0.2941 0.7294)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(StraicoColor);
export default ForwardRef;
