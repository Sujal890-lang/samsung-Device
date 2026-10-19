import { describe, it, expect } from 'vitest';
import { devices } from '../src/data/devices';
import { buildComparisonMatrix } from '../src/utils/compare';

describe('Device Comparison Matrix & Diff Detection', () => {
  it('returns empty matrix when no devices selected', () => {
    const groups = buildComparisonMatrix([]);
    expect(groups).toHaveLength(0);
  });

  it('correctly flags differences between Galaxy S26 Ultra and Galaxy S26', () => {
    const s26Ultra = devices.find((d) => d.id === 'galaxy-s26-ultra')!;
    const s26 = devices.find((d) => d.id === 'galaxy-s26')!;

    const groups = buildComparisonMatrix([s26Ultra, s26]);
    const displayGroup = groups.find((g) => g.categoryTitle === 'Display & Screen')!;
    const sizeRow = displayGroup.rows.find((r) => r.key === 'displaySize')!;

    expect(sizeRow.isDifferent).toBe(true);
    expect(sizeRow.values['galaxy-s26-ultra']).toBe('6.9"');
    expect(sizeRow.values['galaxy-s26']).toBe('6.2"');
  });

  it('marks identical values as not different', () => {
    const s26Ultra = devices.find((d) => d.id === 'galaxy-s26-ultra')!;
    const groups = buildComparisonMatrix([s26Ultra, s26Ultra]);

    const batteryGroup = groups.find((g) => g.categoryTitle === 'Battery & Charging')!;
    const capacityRow = batteryGroup.rows.find((r) => r.key === 'batteryCapacity')!;

    expect(capacityRow.isDifferent).toBe(false);
  });
});
