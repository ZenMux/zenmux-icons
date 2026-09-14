import { createRef } from 'react';
import { Gemini, Claude } from '../src/index.js';
const ref = createRef<SVGSVGElement>();
const fixtures = [
  <Gemini size={24} color="black" ref={ref} />,
  <Gemini size="2em" color="white" />,
  <Gemini.Color size={32} ref={ref} />,
  <Claude.Color size="1rem" aria-hidden={false} aria-label="Claude" />,
];
void fixtures;
