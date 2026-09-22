'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const BlackForestLabsDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-black-forest-labs-dark__clip0_1_2143)"}><path fillRule="evenodd" clipRule="evenodd" d="M34.226 20.496H29.12L24.014 13.264L8.088 35.804H13.204L24.014 20.496H29.118L18.31 35.802H23.44L34.224 20.496L48 40H39.94V35.818L34.226 27.73L28.542 35.804V40H0L24.016 6L34.226 20.496Z" fill="black" style={{
        fill: "black",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-black-forest-labs-dark__clip0_1_2143"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(BlackForestLabsDark);
export default ForwardRef;
