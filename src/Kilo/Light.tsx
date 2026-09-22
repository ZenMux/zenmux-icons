'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const KiloLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g clipPath={'url(#' + instanceId + "-kilo-light__clip0_33_4897)"}><path fillRule="evenodd" clipRule="evenodd" d="M29.334 34.516H33.778V38.072H28.19L25.78 35.66V30.072H29.336V34.516H29.334ZM37.334 34.516H33.778V30.072H29.334V26.516H34.92L37.334 28.93V34.516ZM22.222 29.334H18.666V25.778H22.222V29.334ZM10.666 25.778H14.222V33.778H22.222V37.334H13.08L10.666 34.92V25.78V25.778ZM37.334 18.666V22.222H25.778V18.666H29.752V14.222H25.778V10.666H30.894L33.306 13.08V18.666H37.334ZM14.222 14.666H18.666L22.222 18.222V22.222H18.666V18.222H14.222V22.222H10.666V10.666H14.222V14.666ZM22.222 14.666H18.666V10.666H22.222V14.666Z" fill="white" style={{
        fill: "white",
        fillOpacity: 1
      }} /><rect x={2} y={2} width={44} height={44} rx={6} stroke="white" style={{
        stroke: "white",
        strokeOpacity: 1
      }} strokeWidth={4} /></g><defs><clipPath id={instanceId + "-kilo-light__clip0_33_4897"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(KiloLight);
export default ForwardRef;
