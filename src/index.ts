import { registerPlugin } from '@capacitor/core';

import type { CapacitorReferrerPlugin } from './definitions';

const CapacitorReferrer = registerPlugin<CapacitorReferrerPlugin>('CapacitorReferrer', {
  web: () => import('./web').then((m) => new m.CapacitorReferrerWeb()),
});

export * from './definitions';
export { CapacitorReferrer };
