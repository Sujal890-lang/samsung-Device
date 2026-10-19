import { describe, it, expect } from 'vitest';
import { devices } from '../src/data/devices';
import { filterAndSortDevices } from '../src/utils/filter';

describe('Catalog Filtering & Sorting', () => {
  it('returns all devices by default', () => {
    const result = filterAndSortDevices(devices, {});
    expect(result).toHaveLength(devices.length);
  });

  it('filters strictly by category', () => {
    const phones = filterAndSortDevices(devices, { category: 'phones' });
    expect(phones.length).toBeGreaterThan(0);
    expect(phones.every((p) => p.category === 'phones')).toBe(true);

    const tablets = filterAndSortDevices(devices, { category: 'tablets' });
    expect(tablets.length).toBeGreaterThan(0);
    expect(tablets.every((t) => t.category === 'tablets')).toBe(true);
  });

  it('filters by series correctly', () => {
    const sSeries = filterAndSortDevices(devices, { series: 'Galaxy S' });
    expect(sSeries.length).toBeGreaterThan(0);
    expect(sSeries.every((d) => d.series === 'Galaxy S')).toBe(true);
  });

  it('searches by keyword in name, description, or highlights', () => {
    const penDevices = filterAndSortDevices(devices, { searchQuery: 'S Pen' });
    expect(penDevices.length).toBeGreaterThan(0);
    expect(penDevices.some((d) => d.id === 'galaxy-s26-ultra')).toBe(true);
  });

  it('sorts by screen size descending', () => {
    const sorted = filterAndSortDevices(devices, { category: 'tablets', sortBy: 'screen-desc' });
    expect(sorted[0].display?.sizeInches).toBeGreaterThanOrEqual(sorted[sorted.length - 1].display?.sizeInches || 0);
  });

  it('sorts by battery capacity descending', () => {
    const sorted = filterAndSortDevices(devices, { category: 'phones', sortBy: 'battery-desc' });
    const firstMah = sorted[0].battery?.capacityMah ?? 0;
    const lastMah = sorted[sorted.length - 1].battery?.capacityMah ?? 0;
    expect(firstMah).toBeGreaterThanOrEqual(lastMah);
  });
});
