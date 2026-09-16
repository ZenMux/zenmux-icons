'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LivekitColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -1381)"><g id={instanceId + "-livekit-color__Name=LiveKit, Type=Color, Variant=Default"}><g id={instanceId + "-livekit-color__LiveKit / Icon"}><path id={instanceId + "-livekit-color__LiveKit / path 01"} d="M321 1401H313V1409H321V1401ZM329 1393H321V1401H329V1393ZM329 1409H321V1417H329V1409ZM337 1385H329V1393H337V1385ZM337 1417H329V1425H337V1417Z" fill="#1FD5F9" style={{
            fill: "color(display-p3 0.1216 0.8353 0.9765)",
            fillOpacity: 1
          }} /><path id={instanceId + "-livekit-color__LiveKit / path 02"} d="M305 1417V1385H297V1425H321V1417H305Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LivekitColor);
export default ForwardRef;
