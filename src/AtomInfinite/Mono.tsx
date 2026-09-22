'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AtomInfiniteMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-atom-infinite-mono__clip0_28_7285)"}><path fillRule="evenodd" clipRule="evenodd" d="M0 43.3442L14.3193 6.23489C14.5882 5.42816 15.126 5.02484 15.9328 5.02484H24.6051C25.5462 5.02484 26.2858 5.62987 26.8235 6.84001L40.5379 43.3442H31.2605L27.2269 33.4618H13.3109L9.47899 43.3442H0ZM15.7311 25.9997H25.0084L20.3697 13.2938L15.7311 25.9997ZM35.6975 5.02484H44.5714V43.3442H42.3529L35.6975 25.9997V5.02484Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-atom-infinite-mono__clip0_28_7285"}><rect width={48} height={48} fill="#fff" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(AtomInfiniteMono);
export default ForwardRef;
