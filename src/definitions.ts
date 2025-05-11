export interface CapacitorReferrerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
