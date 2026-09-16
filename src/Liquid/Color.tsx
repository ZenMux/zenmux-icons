'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const LiquidColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -905)"><g id={instanceId + "-liquid-color__Name=Liquid, Type=Color, Variant=Default"}><g id={instanceId + "-liquid-color__Liquid / Icon"}><path id={instanceId + "-liquid-color__Liquid / path 01"} fillRule="evenodd" clipRule="evenodd" d="M317.056 922.092L317.04 922.102L323.1 932.602C323.941 933.887 324.388 935.39 324.386 936.926C324.386 938.434 323.962 939.846 323.226 941.05L335.572 937.068L316.26 905L311.608 912.744L317.056 922.092ZM306.674 953L316.374 944.894H316.348C311.91 944.894 308.314 941.326 308.314 936.926C308.314 935.338 308.784 933.858 309.594 932.614L315.324 922.662L310.562 914.488L297 937.068L306.66 953H306.674ZM320.474 943.764H320.472L309.444 953H325.808L334.104 939.462L320.474 943.764Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(LiquidColor);
export default ForwardRef;
