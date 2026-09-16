'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const AppleColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -361)"><g id={instanceId + "-apple-color__Name=Apple, Type=Color, Variant=Default"}><g id={instanceId + "-apple-color__Apple / Icon"}><path id={instanceId + "-apple-color__Apple / path 01"} fillRule="evenodd" clipRule="evenodd" d="M316.864 374.816C318.764 374.816 322.318 372.234 326.054 372.616C327.618 372.68 332.006 373.248 334.83 377.376C334.604 377.514 329.586 380.432 329.644 386.506C329.712 393.74 335.976 396.162 336.086 396.206C336.028 396.378 335.074 399.652 332.77 403.038C330.766 405.964 328.692 408.876 325.42 408.938C322.208 408.998 321.17 407.028 317.5 407.028C313.83 407.028 312.682 408.874 309.638 408.996C306.476 409.116 304.078 405.836 302.058 402.922C297.928 396.962 294.778 386.078 299.004 378.748C301.106 375.1 304.864 372.788 308.942 372.73C312.04 372.666 314.964 374.816 316.862 374.816H316.864ZM326.104 361C326.41 363.814 325.282 366.634 323.602 368.666C321.928 370.692 319.174 372.274 316.492 372.066C316.122 369.31 317.482 366.438 319.032 364.642C320.766 362.61 323.69 361.1 326.104 361Z" fill="black" style={{
            fill: "black",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(AppleColor);
export default ForwardRef;
