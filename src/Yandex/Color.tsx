'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const YandexColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-21 -2673)"><g id={instanceId + "-yandex-color__Name=Yandex, Type=Color, Variant=Default"}><g id={instanceId + "-yandex-color__Yandex / Icon"}><path id={instanceId + "-yandex-color__Yandex / path 01"} fillRule="evenodd" clipRule="evenodd" d="M53.752 2698.29L63 2677H55.316L46.068 2698.29H53.752ZM48.83 2721V2713.53C48.83 2707.89 48.126 2706.25 46.016 2701.56L34.866 2677H27L41.248 2708.42V2721H48.828H48.83Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(YandexColor);
export default ForwardRef;
