'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const CloudswayLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-cloudsway-light__clip0_19_1414)"}><path d="M24.001 27.1426C31.277 27.1426 37.1759 27.8952 37.1777 28.8232C37.1777 29.7515 31.2782 30.5039 24.001 30.5039C16.7238 30.5039 10.8242 29.7515 10.8242 28.8232C10.8261 27.8952 16.725 27.1426 24.001 27.1426ZM26.5547 22.5713C41.2102 22.5713 48 23.1767 48 23.9834C47.9994 24.7901 41.2095 25.3955 26.5547 25.3955C11.8999 25.3955 0.00110204 24.7901 0 23.9834C0 23.1767 11.8992 22.5713 26.5547 22.5713ZM24 18C28.3439 18 31.865 18.7525 31.8652 19.6807C31.8652 20.6089 28.344 21.3613 24 21.3613C19.656 21.3613 16.1348 20.6089 16.1348 19.6807C16.135 18.7525 19.6561 18 24 18Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-cloudsway-light__clip0_19_1414"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(CloudswayLight);
export default ForwardRef;
