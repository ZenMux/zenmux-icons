'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const TypesafeColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-typesafe-color__clip0_28_7232)"}><path d="M33.512 5.856V14.134L40.972 18.974L40.974 37.304L24.488 48L15.464 42.146V33.64L8 28.798V10.7L8.71 10.236L24.488 0L33.512 5.856ZM19.88 41.3L24.484 44.288L36.55 36.454L31.95 33.47L19.88 41.3ZM26.044 20.664V28.8L18.58 33.644V38.432L30.394 30.766V17.842L26.044 20.664ZM33.512 30.768L37.856 33.588V20.664L33.512 17.844V30.768ZM12.42 27.952L17.022 30.94L21.624 27.952L17.024 24.97L12.42 27.952ZM11.118 12.386V25.088L15.462 22.268V14.132L22.928 9.286V4.72L11.118 12.386ZM18.582 22.264L22.926 25.084V20.664L18.584 17.842L18.582 22.264ZM19.88 14.974L24.488 17.962L29.088 14.976L24.488 11.988L19.88 14.974ZM26.048 9.286L30.392 12.108V7.548L26.048 4.718V9.286Z" fill="#E650BB" style={{
        fill: "color(display-p3 0.9020 0.3137 0.7333)",
        fillOpacity: 1
      }} /></g><defs><clipPath id={instanceId + "-typesafe-color__clip0_28_7232"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(TypesafeColor);
export default ForwardRef;
