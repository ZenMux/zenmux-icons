import { createRef, createElement } from 'react';
import catalog from '../src/catalog.js';
import { LazyIcon } from '../src/lazy.js';
import { loadIcon } from '../src/loaders.js';
import Zenmux from '../src/Zenmux/index.js';
const name = catalog[0].id;
const ref = createRef<SVGSVGElement>();
const fixtures = [<LazyIcon name={name} variant="dark" size={24}/>,<LazyIcon name={name} variant="light" size="2em"/>,<LazyIcon name={name} variant="text-light" size={24}/>,<LazyIcon name={name} variant="text-dark" size={24}/>];
async function typeCheck(){const {default:Icon}=await loadIcon(name,'color');return createElement(Icon,{size:32,ref});}
void fixtures;void typeCheck;
const compound = [
  <Zenmux size={56} />, <Zenmux.Color size={56} />, <Zenmux.Text size={56} />,
  <Zenmux.Combine size={56} type="color" inverse showLogo={false} textMultiple={0.8}
    spaceMultiple={0.25} iconProps={{ opacity: 0.5 }} ref={createRef<HTMLDivElement>()} />,
  <Zenmux.Avatar size={56} shape="square" background="#000" color="#fff"
    iconMultiple={0.75} ref={createRef<HTMLDivElement>()} />,
];
void compound;
