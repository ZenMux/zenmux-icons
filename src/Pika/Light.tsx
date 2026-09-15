'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const PikaLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g id={instanceId + "-pika-light__Name=Pika, Type=Dark, Variant=Default"}><g id={instanceId + "-pika-light__Pika / Icon"} clipPath={'url(#' + instanceId + "-pika-light__clip0_436_4685)"}><path id={instanceId + "-pika-light__Pika / path 01"} fillRule="evenodd" clipRule="evenodd" d="M1.3219 39.778H18.6539C18.3739 36.958 16.3639 33.868 11.4519 31.764V31.556C17.1779 33.316 19.2379 36.328 20.0759 39.776H41.4599L38.0199 36.824C40.0339 30.488 47.9999 27.494 47.9999 27.494C47.7179 22.412 45.1179 17.676 36.4259 13.84L16.6519 6C17.3139 14.358 20.2739 19.15 27.6979 20.326V20.53C22.5399 20.402 18.9619 18.098 17.1479 13.354C1.3959 16.246 -2.4001 28.312 1.3219 39.778Z" fill="#000000" fillOpacity={1} /></g></g><defs><clipPath id={instanceId + "-pika-light__clip0_436_4685"}><rect width={48} height={48} fill="#fff" fillOpacity={1} /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(PikaLight);
export default ForwardRef;
