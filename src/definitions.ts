export interface CapacitorReferrerPlugin {
  getReferrer(): Promise<{ value: any }>;
}
