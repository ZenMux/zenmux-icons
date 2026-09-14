// Generated literal dynamic imports enable per-icon, per-variant bundler chunks.
import type { IconName } from './catalog.js';
export type IconVariant = 'mono' | 'color';
export const iconLoaders = {
  "cherry-studio": { mono: () => import('./CherryStudio/Mono.js'), color: () => import('./CherryStudio/Color.js') },
  "claude": { mono: () => import('./Claude/Mono.js'), color: () => import('./Claude/Color.js') },
  "cline": { mono: () => import('./Cline/Mono.js'), color: () => import('./Cline/Color.js') },
  "codex": { mono: () => import('./Codex/Mono.js'), color: () => import('./Codex/Color.js') },
  "cursor": { mono: () => import('./Cursor/Mono.js'), color: () => import('./Cursor/Color.js') },
  "gemini": { mono: () => import('./Gemini/Mono.js'), color: () => import('./Gemini/Color.js') },
  "obsidian": { mono: () => import('./Obsidian/Mono.js'), color: () => import('./Obsidian/Color.js') },
  "sider": { mono: () => import('./Sider/Mono.js'), color: () => import('./Sider/Color.js') },
  "zai": { mono: () => import('./Zai/Mono.js'), color: () => import('./Zai/Color.js') }
} as const;
export function loadIcon(name: IconName, variant: IconVariant = 'color') {
  if (!Object.prototype.hasOwnProperty.call(iconLoaders, name) || !['mono', 'color'].includes(variant)) {
    return Promise.reject(new Error('Unknown icon or variant'));
  }
  return iconLoaders[name][variant]();
}
