'use client';
// Generated from real source assets. Do not edit manually.
import { forwardRef, useId } from 'react';
import type { Ref } from 'react';
import type { IconProps } from '../types.js';
const FloraDark = ({
  size = '1em',
  ...props
}: IconProps, ref: Ref<SVGSVGElement>) => {
  const instanceId = useId();
  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width={size} height={size} aria-hidden="true" focusable="false" ref={ref} {...props}><g transform="translate(-89 -837)"><g id={instanceId + "-flora-dark__Name=Flora, Type=Dark, Variant=Default"}><g id={instanceId + "-flora-dark__Flora / Icon_2"}><path id={instanceId + "-flora-dark__Flora / path 01_2"} fillRule="evenodd" clipRule="evenodd" d="M93 871.304C93 865.91 97.404 861.538 102.778 861.538C108.098 861.538 112.458 865.868 112.458 871.208C112.458 876.548 108.146 880.878 102.826 880.878H93V871.304ZM133 881H123.174C117.854 881 113.54 876.67 113.54 871.33C113.54 865.99 117.9 861.66 123.22 861.66C128.596 861.66 133 866.032 133 871.426V881ZM133 850.696C133 856.09 128.596 860.462 123.222 860.462C117.902 860.462 113.542 856.132 113.542 850.792C113.542 845.452 117.854 841.122 123.174 841.122H133V850.696ZM93 841H102.826C108.146 841 112.46 845.33 112.46 850.67C112.46 856.01 108.1 860.34 102.778 860.34C97.404 860.34 93 855.968 93 850.574V841Z" fill="white" style={{
            fill: "white",
            fillOpacity: 1
          }} /></g></g></g></svg>;
};
const ForwardRef = forwardRef(FloraDark);
export default ForwardRef;
