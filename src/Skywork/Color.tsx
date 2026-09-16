'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const SkyworkColor = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-293 -1313)"><g id={instanceId + "-skywork-color__Name=Skywork, Type=Color, Variant=Default"}><g id={instanceId + "-skywork-color__Skywork / Icon"} clipPath={'url(#' + instanceId + "-skywork-color__clip54_1_3407)"}><path id={instanceId + "-skywork-color__Skywork / path 01"} d="M319.866 1316.51C316.779 1314.11 312.944 1312.87 309.033 1313.01C305.123 1313.15 301.388 1314.67 298.486 1317.3C295.21 1320.26 293.243 1324.4 293.019 1328.81C292.795 1333.23 294.331 1337.55 297.29 1340.83C299.911 1343.73 303.472 1345.62 307.348 1346.16C311.224 1346.7 315.167 1345.86 318.482 1343.78L305.556 1329.45L319.866 1316.51Z" fill="#4D5EFF" style={{
            fill: "color(display-p3 0.3020 0.3686 1.0000)",
            fillOpacity: 1
          }} /><path id={instanceId + "-skywork-color__Skywork / path 02"} d="M314.136 1356.48C317.222 1358.89 321.057 1360.13 324.967 1359.98C328.876 1359.84 332.61 1358.32 335.512 1355.7C338.788 1352.74 340.754 1348.59 340.978 1344.18C341.202 1339.77 339.667 1335.45 336.708 1332.17C334.087 1329.26 330.526 1327.37 326.65 1326.83C322.774 1326.29 318.831 1327.14 315.516 1329.22L328.442 1343.54L314.132 1356.48H314.136Z" fill="#00FFCE" style={{
            fill: "color(display-p3 0.0000 1.0000 0.8078)",
            fillOpacity: 1
          }} /></g></g></g><defs><clipPath id={instanceId + "-skywork-color__clip54_1_3407"}><rect width={48} height={48} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} transform="translate(293 1313)" /></clipPath></defs></svg>;
};
const ForwardRef = forwardRef(SkyworkColor);
export default ForwardRef;
