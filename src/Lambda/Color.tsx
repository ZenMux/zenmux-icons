'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LambdaColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-157 -1517)"><g id={instanceId + "-lambda-color__Name=Lambda, Type=Color, Variant=Default"}><g id={instanceId + "-lambda-color__Lambda / Icon"}><path id={instanceId + "-lambda-color__Lambda / path 01"} fillRule="evenodd" clipRule="evenodd" d="M161 1521H201V1561H161V1521ZM164.536 1557.47H197.454V1524.52H164.536V1557.47ZM171.566 1527.65L178.524 1540.01L170.782 1554.31H175.768L180.928 1544.55L186.422 1554.31H191.502L176.64 1527.65L171.564 1527.65L171.566 1527.65Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LambdaColor);
export default ForwardRef;
