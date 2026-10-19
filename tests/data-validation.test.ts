import { describe, it, expect } from 'vitest';
import { devices } from '../src/data/devices';
import { validateDevices } from '../src/scripts/validate-data';

describe('Galaxy Device Data Schema & Integrity', () => {
  it('validates the real devices dataset without errors', () => {
    const result = validateDevices(devices);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('detects duplicate IDs', () => {
    const cloned = [
      ...devices,
      { ...devices[0], name: 'Duplicate Device' },
    ];
    const result = validateDevices(cloned);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.message.includes('Duplicate device ID'))).toBe(true);
  });

  it('rejects invalid color hex codes', () => {
    const invalidColorDataset = [
      {
        ...devices[0],
        id: 'test-invalid-color',
        colors: [{ name: 'Bad Hex', hex: 'not-a-hex' }],
      },
    ];
    const result = validateDevices(invalidColorDataset);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.field.includes('colors'))).toBe(true);
  });

  it('rejects missing source URLs or non-HTTP links', () => {
    const invalidUrlDataset = [
      {
        ...devices[0],
        id: 'test-invalid-url',
        sourceUrl: 'ftp://invalidsource.com',
      },
    ];
    const result = validateDevices(invalidUrlDataset);
    expect(result.isValid).toBe(false);
    expect(result.errors.some((e) => e.field === 'sourceUrl')).toBe(true);
  });
});
