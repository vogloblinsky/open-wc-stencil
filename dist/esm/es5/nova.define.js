
// nova: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './nova.core.js';
import { COMPONENTS } from './nova.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
