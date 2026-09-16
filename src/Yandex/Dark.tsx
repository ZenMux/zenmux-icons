'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const YandexDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -2673)"><g id={instanceId + "-yandex-dark__Name=Yandex, Type=Dark, Variant=Default"}><g id={instanceId + "-yandex-dark__Yandex / Icon_2"}><path id={instanceId + "-yandex-dark__Yandex / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M121.752 2698.29L131 2677H123.316L114.068 2698.29H121.752ZM116.83 2721V2713.53C116.83 2707.89 116.126 2706.25 114.016 2701.56L102.866 2677H95L109.248 2708.42V2721H116.828H116.83Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(YandexDark);
export default ForwardRef;
