import type { Device } from '../data/schema';
import { formatBattery, formatDisplay, formatRam, formatStorage, formatValue } from './formatters';

export interface ComparisonRow {
  key: string;
  label: string;
  values: { [deviceId: string]: string };
  isDifferent: boolean;
}

export interface ComparisonCategoryGroup {
  categoryTitle: string;
  rows: ComparisonRow[];
}

export function buildComparisonMatrix(selectedDevices: Device[]): ComparisonCategoryGroup[] {
  if (selectedDevices.length === 0) return [];

  const checkDifferent = (valuesMap: { [deviceId: string]: string }): boolean => {
    const list = Object.values(valuesMap);
    if (list.length <= 1) return false;
    return list.some((v) => v !== list[0]);
  };

  const createRow = (
    key: string,
    label: string,
    extractor: (d: Device) => string
  ): ComparisonRow => {
    const values: { [deviceId: string]: string } = {};
    selectedDevices.forEach((d) => {
      values[d.id] = extractor(d);
    });
    return {
      key,
      label,
      values,
      isDifferent: checkDifferent(values),
    };
  };

  return [
    {
      categoryTitle: 'General & Design',
      rows: [
        createRow('category', 'Category', (d) => d.category.toUpperCase()),
        createRow('series', 'Series', (d) => d.series),
        createRow('releaseYear', 'Release Year', (d) => d.releaseYear.toString()),
        createRow('durabilityRating', 'Durability & Materials', (d) => formatValue(d.durabilityRating)),
        createRow('softwareVersion', 'Software Version', (d) => formatValue(d.softwareVersion)),
      ],
    },
    {
      categoryTitle: 'Display & Screen',
      rows: [
        createRow('displaySummary', 'Display Overview', (d) => formatDisplay(d.display)),
        createRow('displaySize', 'Screen Size', (d) => (d.display?.sizeInches ? `${d.display.sizeInches}"` : 'Not listed')),
        createRow('displayType', 'Panel Technology', (d) => formatValue(d.display?.type)),
        createRow('displayRefresh', 'Refresh Rate', (d) => (d.display?.refreshRateHz ? `${d.display.refreshRateHz} Hz` : 'Not listed')),
        createRow('displayResolution', 'Resolution', (d) => formatValue(d.display?.resolution)),
      ],
    },
    {
      categoryTitle: 'Performance & Storage',
      rows: [
        createRow('processor', 'Processor (SoC)', (d) => formatValue(d.processor?.primary)),
        createRow('ram', 'Memory (RAM)', (d) => formatRam(d.ramOptionsGb)),
        createRow('storage', 'Internal Storage', (d) => formatStorage(d.storageOptions)),
      ],
    },
    {
      categoryTitle: 'Camera System',
      rows: [
        createRow('rearCameras', 'Rear Camera Setup', (d) => {
          if (!d.cameras || d.cameras.rear.length === 0) return 'Not listed';
          return d.cameras.rear.map((c) => `${c.role}: ${c.resolutionMp ? c.resolutionMp + 'MP' : 'N/A'}`).join(', ');
        }),
        createRow('frontCamera', 'Front Camera', (d) => {
          if (!d.cameras || d.cameras.front.length === 0) return 'Not listed';
          return d.cameras.front.map((c) => `${c.role}: ${c.resolutionMp ? c.resolutionMp + 'MP' : 'N/A'}`).join(', ');
        }),
      ],
    },
    {
      categoryTitle: 'Battery & Charging',
      rows: [
        createRow('batteryOverview', 'Battery & Charging', (d) => formatBattery(d.battery)),
        createRow('batteryCapacity', 'Capacity', (d) => (d.battery?.capacityMah ? `${d.battery.capacityMah.toLocaleString()} mAh` : 'Not listed')),
        createRow('wiredCharging', 'Wired Charging Speed', (d) => (d.battery?.wiredChargingWatts ? `${d.battery.wiredChargingWatts}W` : 'Not listed')),
        createRow('wirelessCharging', 'Wireless Charging', (d) => (d.battery?.wirelessChargingWatts ? `${d.battery.wirelessChargingWatts}W` : 'Not listed')),
      ],
    },
  ];
}
