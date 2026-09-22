'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ClaudeCodeColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-claude-code-color__clip0_30_5)"}><path fillRule="evenodd" clipRule="evenodd" d="M41.996 20.898H48V27.102H42V33.158H39.026V39H36V33.158H33.026V39H30V33.158H18V39H14.976V33.158H12V39H8.974V33.158H6V27.1H0V20.9H6V9H41.996V20.898ZM12 20.898H14.976V15.204H12V20.898ZM33.02 20.898H36V15.204H33.02V20.898Z" fill="#D97757" style={{
        fill: "color(display-p3 0.8510 0.4667 0.3412)",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-claude-code-color__clip0_30_5"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(ClaudeCodeColor);
export default ForwardRef;
