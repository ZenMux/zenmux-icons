'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const MistralLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-mistral-light__clip0_5_5013)"}><path d="M6.85596 6.79999H13.714V13.656H6.85596V6.79999ZM34.284 6.79999H41.144V13.656H34.284V6.79999Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /><path d="M6.85596 13.656H20.57V20.514H6.85796L6.85596 13.656ZM27.428 13.656H41.142V20.514H27.428V13.656Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /><path d="M6.85596 20.516H41.144V27.372H6.85596V20.516Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /><path d="M6.85596 27.372H13.714V34.228H6.85596V27.372ZM20.572 27.372H27.43V34.228H20.572V27.372ZM34.284 27.372H41.144V34.228H34.284V27.372Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /><path d="M0 34.228H20.572V41.086H0V34.228ZM27.428 34.228H48V41.086H27.428V34.228Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-mistral-light__clip0_5_5013"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(MistralLight);
export default ForwardRef;
