'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZapierLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -2809)"><g id={instanceId + "-zapier-light__Name=Zapier, Type=Dark, Variant=Default"}><g id={instanceId + "-zapier-light__Zapier / Icon_2"}><path id={instanceId + "-zapier-light__Zapier / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M262 2841H236V2847H262V2841Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ZapierLight);
export default ForwardRef;
