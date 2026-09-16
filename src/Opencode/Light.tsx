'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const OpencodeLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -2877)"><g id={instanceId + "-opencode-light__Name=opencode, Type=Dark, Variant=Default"}><g id={instanceId + "-opencode-light__opencode / Icon_2"}><path id={instanceId + "-opencode-light__opencode / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M393 2889H377V2913H393V2889ZM401 2921H369V2881H401V2921Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(OpencodeLight);
export default ForwardRef;
