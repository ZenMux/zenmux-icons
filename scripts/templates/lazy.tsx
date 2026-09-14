'use client';
// Generated from scripts/templates/lazy.tsx. Do not edit src/lazy.tsx directly.
import { useEffect, useRef, useState } from 'react';
import type { ComponentType, ReactNode } from 'react';
import type { IconName } from './catalog.js';
import type { IconProps } from './types.js';
import { loadIcon } from './loaders.js';
import type { IconVariant } from './loaders.js';

export type LazyIconProps = IconProps & {
  name: IconName;
  variant?: IconVariant;
  /** Bypass viewport observation, e.g. for an already visible modal. */
  eager?: boolean;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
};

let observer: IntersectionObserver | undefined;
const callbacks = new Map<Element, () => void>();
function observe(node: Element, ready: () => void) {
  if (typeof IntersectionObserver === 'undefined') { ready(); return () => {}; }
  observer ??= new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      const callback = callbacks.get(entry.target);
      callbacks.delete(entry.target);
      observer?.unobserve(entry.target);
      callback?.();
    }
  }, { rootMargin: '160px' });
  callbacks.set(node, ready);
  observer.observe(node);
  return () => { callbacks.delete(node); observer?.unobserve(node); };
}

export function LazyIcon({ name, variant = 'color', size = '1em', eager = false,
  fallback = null, errorFallback = fallback, ...props }: LazyIconProps) {
  const host = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  const key = `${name}/${variant}`;
  const [loaded, setLoaded] = useState<{ key: string; Icon?: ComponentType<IconProps>; failed?: boolean }>();
  useEffect(() => {
    if (eager || !host.current) return;
    return observe(host.current, () => setVisible(true));
  }, [eager]);
  useEffect(() => {
    if (!eager && !visible) return;
    let active = true;
    loadIcon(name, variant).then(
      module => { if (active) setLoaded({ key, Icon: module.default }); },
      () => { if (active) setLoaded({ key, failed: true }); },
    );
    return () => { active = false; };
  }, [name, variant, key, eager, visible]);
  const current = loaded?.key === key ? loaded : undefined;
  const Icon = current?.Icon;
  return <span ref={host} data-icon={name} data-state={Icon ? 'loaded' : current?.failed ? 'error' : 'pending'}
    style={{ display: 'inline-flex', width: props.width ?? size, height: props.height ?? size, flex: 'none' }}>
    {Icon ? <Icon size={size} {...props} /> : current?.failed ? errorFallback : fallback}
  </span>;
}
export default LazyIcon;
