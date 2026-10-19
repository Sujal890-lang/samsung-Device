/**
 * Utility formatters ensuring no invented values and uniform "Not listed" fallbacks.
 */

export function formatValue(value: string | number | null | undefined, unit: string = ''): string {
  if (value === null || value === undefined || value === '') {
    return 'Not listed';
  }
  return unit ? `${value} ${unit}` : `${value}`;
}

export function formatRam(ramOptions: number[]): string {
  if (!ramOptions || ramOptions.length === 0) return 'Not listed';
  return ramOptions.map((r) => `${r} GB`).join(' / ');
}

export function formatStorage(storageOptions: (string | number)[]): string {
  if (!storageOptions || storageOptions.length === 0) return 'Not listed';
  return storageOptions.join(' / ');
}

export function formatBattery(battery: { capacityMah: number | null; wiredChargingWatts: number | null } | null): string {
  if (!battery) return 'Not listed';
  const parts: string[] = [];
  if (battery.capacityMah) parts.push(`${battery.capacityMah.toLocaleString()} mAh`);
  if (battery.wiredChargingWatts) parts.push(`${battery.wiredChargingWatts}W`);
  return parts.length > 0 ? parts.join(' • ') : 'Not listed';
}

export function formatDisplay(display: { sizeInches: number | null; type: string | null; refreshRateHz: number | null } | null): string {
  if (!display) return 'Not listed';
  const parts: string[] = [];
  if (display.sizeInches) parts.push(`${display.sizeInches}"`);
  if (display.type) parts.push(display.type);
  if (display.refreshRateHz) parts.push(`${display.refreshRateHz}Hz`);
  return parts.length > 0 ? parts.join(' • ') : 'Not listed';
}
