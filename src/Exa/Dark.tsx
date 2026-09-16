'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ExaDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -905)"><g id={instanceId + "-exa-dark__Name=Exa, Type=Dark, Variant=Default"}><g id={instanceId + "-exa-dark__Exa / Icon_2"}><path id={instanceId + "-exa-dark__Exa / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M367 905H405V908.582L388.784 929L405 949.418V953H367V905ZM386.24 925.696L399.418 908.582H373.06L386.24 925.696ZM371.276 912.87V927.21H382.316L371.276 912.87ZM382.316 930.79H371.276V945.13L382.316 930.79ZM373.06 949.42L386.24 932.306L399.418 949.42H373.06Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ExaDark);
export default ForwardRef;
