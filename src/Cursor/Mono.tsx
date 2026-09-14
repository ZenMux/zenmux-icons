'use client';
// Generated from SVG assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const CursorMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 86 86" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-cursor-mono__a)"}><path fill="currentColor" fillRule="evenodd" d="M76.199 22.238 44.644 4.023a3.28 3.28 0 0 0-3.279 0L9.8 22.238a2.76 2.76 0 0 0-1.376 2.385v36.745c0 .986.525 1.896 1.38 2.389l31.558 18.221a3.28 3.28 0 0 0 3.278 0l31.562-18.221a2.76 2.76 0 0 0 1.38-2.389V24.627a2.76 2.76 0 0 0-1.38-2.385zm-1.98 3.863L43.75 78.871c-.207.355-.749.21-.749-.2V44.115a1.94 1.94 0 0 0-.969-1.675L12.106 25.16c-.351-.203-.207-.748.204-.748h60.936c.867 0 1.406.94.972 1.688" clipRule="evenodd" /></g><defs><clipPath id={instanceId + "-cursor-mono__a"}><path fill="#fff" d="M0 0h86v86H0z" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(CursorMono);
export default ForwardRef;
