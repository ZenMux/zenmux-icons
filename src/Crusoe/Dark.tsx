'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const CrusoeDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -837)"><g id={instanceId + "-crusoe-dark__Name=Crusoe, Type=Dark, Variant=Default"}><g id={instanceId + "-crusoe-dark__Crusoe / Icon_2"}><path id={instanceId + "-crusoe-dark__Crusoe / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M385 837L370.166 850.166C363.706 855.904 363.706 866.096 370.166 871.834L385 885L399.834 871.834C406.294 866.096 406.294 855.904 399.834 850.166L385 837Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(CrusoeDark);
export default ForwardRef;
