'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const XaiDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-xai-dark__clip0_7_515)"}><path fillRule="evenodd" clipRule="evenodd" d="M12.8092 17.0809L32.6059 44.6668H23.8065L4.00986 17.0809H12.8092ZM12.8014 32.4021L17.203 38.5384L12.8053 44.6668H4L12.8014 32.4021ZM43.4237 5.0683V44.6668H36.2112V15.1182L43.4237 5.0683ZM43.4237 2.00018L23.8065 29.3359L19.4048 23.2016L34.6185 2.00018H43.4237Z" fill="black" style={{
        fill: "black",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-xai-dark__clip0_7_515"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(XaiDark);
export default ForwardRef;
