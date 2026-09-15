'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const TraeDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-trae-dark__Name=TRAE, Type=Dark, Variant=Default"}><g id={instanceId + "-trae-dark__TRAE / Icon"}><path id={instanceId + "-trae-dark__TRAE / path 01"} fillRule="evenodd" clipRule="evenodd" d="M48 41.0821H6.856V34.23H0V6.80005H48V41.0821ZM6.856 34.23H41.144V13.654H6.856V34.23ZM24.002 23.838L19.152 28.6861L14.304 23.838L19.152 18.99L24.002 23.838ZM37.716 23.836L32.868 28.682L28.018 23.836L32.868 18.986L37.716 23.836Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g></svg>;
};
const ForwardRef = forwardRef(TraeDark);
export default ForwardRef;
