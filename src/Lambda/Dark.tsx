'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LambdaDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -1517)"><g id={instanceId + "-lambda-dark__Name=Lambda, Type=Dark, Variant=Default"}><g id={instanceId + "-lambda-dark__Lambda / Icon_2"}><path id={instanceId + "-lambda-dark__Lambda / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M229 1521H269V1561H229V1521ZM232.536 1557.47H265.454V1524.52H232.536V1557.47ZM239.566 1527.65L246.524 1540.01L238.782 1554.31H243.768L248.928 1544.55L254.422 1554.31H259.502L244.64 1527.65L239.564 1527.65L239.566 1527.65Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LambdaDark);
export default ForwardRef;
