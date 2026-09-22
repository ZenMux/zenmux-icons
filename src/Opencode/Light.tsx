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
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-opencode-light__clip0_31_72)"}><path fillRule="evenodd" clipRule="evenodd" d="M32.7999 10.8H15.1999V37.2H32.7999V10.8ZM41.5999 46H6.3999V2H41.5999V46Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-opencode-light__clip0_31_72"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(OpencodeLight);
export default ForwardRef;
