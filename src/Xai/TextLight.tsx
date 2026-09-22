'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const XaiTextLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={typeof size === 'number' ? size * 1.5 : 'calc(' + size + ' * 1.5)'} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-xai-text-light__clip0_7_529)"}><g clipPath={'url(#' + instanceId + "-xai-text-light__clip1_7_529)"}><path fillRule="evenodd" clipRule="evenodd" d="M33.0641 3H35.5079V21H33.0641V3ZM20.7439 3H23.3204L30.6782 21H28.022L26.0297 15.9834H17.9019L15.9095 21H13.3586L20.7439 3ZM25.2862 13.9665L21.9388 5.6217L18.6453 13.9665H25.2862ZM5.07337 14.1429L0.477939 7.9662H3.18721L6.45503 12.5796L9.85466 7.9662H12.325L7.80919 14.1177L12.8029 21H10.1202L6.34882 15.7314L2.54996 21H0L5.07337 14.1429Z" fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></g></g><defs><clipPath id={instanceId + "-xai-text-light__clip0_7_529"}><rect width={35.5079} height={24} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath><clipPath id={instanceId + "-xai-text-light__clip1_7_529"}><rect width={35.5079} height={24} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(XaiTextLight);
export default ForwardRef;
