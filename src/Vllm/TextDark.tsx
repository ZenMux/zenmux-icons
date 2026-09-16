'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const VllmTextDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 24" fill="none" color="#ffffff" width={typeof size === 'number' ? size * 2.1666666666666665 : 'calc(' + size + ' * 2.1666666666666665)'} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -5741) scale(1.43359375)"><g id={instanceId + "-vllm-text-dark__Name=vLLM, Type=Color, Language=Default"}><g id={instanceId + "-vllm-text-dark__vLLM / Wordmark"}><path id={instanceId + "-vllm-text-dark__vLLM / path 01"} fillRule="evenodd" clipRule="evenodd" d="M17.9967 4006.02H16.0436V4019.97H24.6932V4018.29H17.9967V4006.02ZM28.5995 4006.02H26.6463V4019.97H35.2959V4018.29H28.5995V4006.02ZM36.97 4019.97V4006.02H39.4812L43.248 4013.99L47.0147 4006.02H49.5259V4019.97H47.5728V4008.38L43.806 4016.04H42.6899L38.9232 4008.38V4019.97H36.97Z" fill="#ffffff" style={{
            fill: "#ffffff",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(VllmTextDark);
export default ForwardRef;
