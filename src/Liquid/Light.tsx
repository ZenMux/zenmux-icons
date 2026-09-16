'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LiquidLight = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="#ffffff" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-361 -905)"><g id={instanceId + "-liquid-light__Name=Liquid, Type=Dark, Variant=Default"}><g id={instanceId + "-liquid-light__Liquid / Icon_2"}><path id={instanceId + "-liquid-light__Liquid / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M385.056 922.092L385.04 922.102L391.1 932.602C391.941 933.887 392.388 935.39 392.386 936.926C392.386 938.434 391.962 939.846 391.226 941.05L403.572 937.068L384.26 905L379.608 912.744L385.056 922.092ZM374.674 953L384.374 944.894H384.348C379.91 944.894 376.314 941.326 376.314 936.926C376.314 935.338 376.784 933.858 377.594 932.614L383.324 922.662L378.562 914.488L365 937.068L374.66 953H374.674ZM388.474 943.764H388.472L377.444 953H393.808L402.104 939.462L388.474 943.764Z" fill="#000000" style={{
            fill: "#000000",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LiquidLight);
export default ForwardRef;
