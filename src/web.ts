import { WebPlugin } from '@capacitor/core';

import type { CapacitorReferrerPlugin } from './definitions';

export class CapacitorReferrerWeb extends WebPlugin implements CapacitorReferrerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
