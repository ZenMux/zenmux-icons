'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const ReplitMono = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" color="currentColor" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-225 -2265)"><g id={instanceId + "-replit-mono__Name=Replit, Type=Dark, Variant=Default"}><g id={instanceId + "-replit-mono__Replit / Icon_2"}><path id={instanceId + "-replit-mono__Replit / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M248.756 2280.52H231.964C231.578 2280.53 231.195 2280.45 230.837 2280.31C230.479 2280.16 230.153 2279.95 229.878 2279.68C229.603 2279.41 229.384 2279.09 229.233 2278.73C229.082 2278.38 229.003 2277.99 229 2277.61V2267.91C229 2266.29 230.34 2265 231.964 2265H245.79C247.444 2265 248.756 2266.32 248.756 2267.91V2280.52ZM266.764 2297.43H248.774V2280.5H266.764C268.504 2280.5 269.94 2281.93 269.94 2283.67V2294.26C269.94 2296.03 268.506 2297.43 266.764 2297.43ZM245.79 2313H231.964C230.34 2313 229 2311.69 229 2310.09V2300.39C229 2298.79 230.34 2297.48 231.964 2297.48H248.756V2310.09C248.756 2311.69 247.416 2313 245.79 2313Z" fill="currentColor" style={{
            fill: "currentColor",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(ReplitMono);
export default ForwardRef;
