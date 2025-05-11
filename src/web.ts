import { WebPlugin } from '@capacitor/core';

import type { CapacitorReferrerPlugin } from './definitions';

export class CapacitorReferrerWeb extends WebPlugin implements CapacitorReferrerPlugin {
  async getReferrer(): Promise<{ value: any }> {
    return Promise.resolve({value: null});
  }
}
