'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const DotsStudioColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-dots-studio-color__clip0_2_2246)"}><path d="M35.4099 47.9998L16.281 47.7771L15.449 43.0096H36.2419L35.4099 47.9998ZM40.3962 0.0456899C40.7654 -0.12216 41.1709 0.197396 41.0935 0.595495L34.155 36.2801C34.1026 36.5487 33.8431 36.7254 33.574 36.6756L6.40795 31.6433C6.07028 31.5807 5.89583 31.2033 6.06615 30.9051L7.46068 28.4646C14.2033 16.6651 24.4996 7.27259 36.8728 1.64823L40.3962 0.0456899ZM34.4812 8.44608C26.0771 13.1519 18.9236 19.8328 13.6482 27.909L30.1052 30.9558L34.4812 8.44608Z" fill="#B2E5DA" style={{
        fill: "color(display-p3 0.6980 0.8980 0.8549)",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-dots-studio-color__clip0_2_2246"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(DotsStudioColor);
export default ForwardRef;
