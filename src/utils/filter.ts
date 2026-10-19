import type { Device, DeviceCategory, DeviceSeries } from '../data/schema';

export type SortOption =
  | 'featured'
  | 'year-desc'
  | 'year-asc'
  | 'screen-desc'
  | 'screen-asc'
  | 'battery-desc'
  | 'name-asc';

export interface FilterOptions {
  category?: DeviceCategory | 'all';
  series?: DeviceSeries | 'all';
  year?: number | 'all';
  searchQuery?: string;
  sortBy?: SortOption;
}

export function filterAndSortDevices(devices: Device[], options: FilterOptions): Device[] {
  const {
    category = 'all',
    series = 'all',
    year = 'all',
    searchQuery = '',
    sortBy = 'featured',
  } = options;

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filtered = devices.filter((device) => {
    // 1. Category check
    if (category !== 'all' && device.category !== category) {
      return false;
    }

    // 2. Series check
    if (series !== 'all' && device.series !== series) {
      return false;
    }

    // 3. Year check
    if (year !== 'all' && device.releaseYear !== year) {
      return false;
    }

    // 4. Search query
    if (normalizedQuery) {
      const matchName = device.name.toLowerCase().includes(normalizedQuery);
      const matchSeries = device.series.toLowerCase().includes(normalizedQuery);
      const matchDesc = device.shortDescription.toLowerCase().includes(normalizedQuery);
      const matchHighlights = device.keyHighlights.some((h) => h.toLowerCase().includes(normalizedQuery));
      const matchProcessor = device.processor?.primary?.toLowerCase().includes(normalizedQuery) || false;

      if (!matchName && !matchSeries && !matchDesc && !matchHighlights && !matchProcessor) {
        return false;
      }
    }

    return true;
  });

  // Sort logic
  const sorted = [...filtered].sort((a, b) => {
    switch (sortBy) {
      case 'year-desc':
        return b.releaseYear - a.releaseYear;
      case 'year-asc':
        return a.releaseYear - b.releaseYear;
      case 'screen-desc': {
        const screenA = a.display?.sizeInches ?? -1;
        const screenB = b.display?.sizeInches ?? -1;
        return screenB - screenA;
      }
      case 'screen-asc': {
        const screenA = a.display?.sizeInches ?? 999;
        const screenB = b.display?.sizeInches ?? 999;
        return screenA - screenB;
      }
      case 'battery-desc': {
        const battA = a.battery?.capacityMah ?? -1;
        const battB = b.battery?.capacityMah ?? -1;
        return battB - battA;
      }
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'featured':
      default:
        // Featured order: S26 Ultra first, then newest flagships
        return 0;
    }
  });

  return sorted;
}
