'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ExaColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -905)"><g id={instanceId + "-exa-color__Name=Exa, Type=Color, Variant=Default"}><g id={instanceId + "-exa-color__Exa / Icon"}><path id={instanceId + "-exa-color__Exa / path 01"} fillRule="evenodd" clipRule="evenodd" d="M299 905H337V908.582L320.784 929L337 949.418V953H299V905ZM318.24 925.696L331.418 908.582H305.06L318.24 925.696ZM303.276 912.87V927.21H314.316L303.276 912.87ZM314.316 930.79H303.276V945.13L314.316 930.79ZM305.06 949.42L318.24 932.306L331.418 949.42H305.06Z" fill="#1F40ED" style={{
            fill: "color(display-p3 0.1216 0.2510 0.9294)",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ExaColor);
export default ForwardRef;
