'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const OhMyPiDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-oh-my-pi-dark__clip0_31_121)"}><path d="M3.42871 5.14286H44.5716V13.5584H34.2859V44.4156H25.8703V13.5584H17.4547V34.1299H9.0391V13.5584H3.42871V5.14286Z" fill="black" style={{
        fill: "black",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-oh-my-pi-dark__clip0_31_121"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(OhMyPiDark);
export default ForwardRef;
