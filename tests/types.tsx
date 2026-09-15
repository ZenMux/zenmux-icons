import { createRef, createElement } from 'react';
import catalog from '../src/catalog.js';
import { LazyIcon } from '../src/lazy.js';
import { loadIcon } from '../src/loaders.js';
const name = catalog[0].id;
const ref = createRef<SVGSVGElement>();
const fixtures = [<LazyIcon name={name} variant="dark" size={24}/>,<LazyIcon name={name} variant="light" size="2em"/>];
async function typeCheck(){const {default:Icon}=await loadIcon(name,'color');return createElement(Icon,{size:32,ref});}
void fixtures;void typeCheck;
