'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ZaiTextLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 59 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={typeof size === 'number' ? size * 2.4583333333333335 : 'calc(' + size + ' * 2.4583333333333335)'} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-zai-text-light__clip0_8_40)"}><g clipPath={'url(#' + instanceId + "-zai-text-light__clip1_8_40)"}><path d="M9.39355 22H0L14.0898 2H23.4834L9.39355 22ZM22.8965 22H11.1553L12.8105 19.6465C12.9397 19.4646 13.1106 19.3161 13.3086 19.2139C13.5066 19.1116 13.7265 19.0584 13.9492 19.0586H22.8965V22ZM10.6846 4.35254C10.5572 4.53638 10.3871 4.68651 10.1885 4.78906C9.98998 4.89158 9.76927 4.94408 9.5459 4.94141H0.586914V2H12.3291L10.6846 4.35254Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /><path d="M29.9888 21.9182H26.5366V18.2952H29.9888V21.9182ZM52.1333 21.9163H48.6108L46.897 17.5989H38.0552L36.3647 21.9163H32.9126L40.8735 2.05786H43.9263L52.1333 21.9163ZM59.0024 21.9163H55.7495V2.05786H59.0024V21.9163ZM39.1821 14.6819H45.7583L42.4468 6.30493L39.1821 14.6819Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g><defs><clipPath id={instanceId + "-zai-text-light__clip0_8_40"}><rect width={59.0024} height={24} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath><clipPath id={instanceId + "-zai-text-light__clip1_8_40"}><rect width={59.0024} height={24} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(ZaiTextLight);
export default ForwardRef;
