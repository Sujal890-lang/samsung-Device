/**
 * Strict Schema for Galaxy Device Explorer
 *
 * DATA RULES:
 * 1. Never invent specifications. If a value is unverified or unavailable, set to null.
 * 2. Unverified fields render as "Not listed" in the UI.
 * 3. Only authentic source URLs retrieved from official manufacturer/newsroom archives.
 */

export type DeviceCategory = 'phones' | 'tablets' | 'wearables' | 'audio' | 'laptops';

export type DeviceSeries =
  | 'Galaxy S'
  | 'Galaxy Z'
  | 'Galaxy A'
  | 'Galaxy Tab S'
  | 'Galaxy Tab A'
  | 'Galaxy Watch'
  | 'Galaxy Buds'
  | 'Galaxy Book';

export interface RegionalChipset {
  region: string;
  chipset: string;
}

export interface DisplaySpec {
  sizeInches: number | null;
  type: string | null;
  refreshRateHz: number | null;
  resolution: string | null;
  peakBrightnessNits: number | null;
}

export interface ProcessorSpec {
  primary: string | null;
  regionalVariants: RegionalChipset[] | null;
}

export interface CameraUnit {
  role: string;
  resolutionMp: number | null;
  aperture: string | null;
  ois?: boolean;
}

export interface CamerasSpec {
  rear: CameraUnit[];
  front: CameraUnit[];
}

export interface BatterySpec {
  capacityMah: number | null;
  wiredChargingWatts: number | null;
  wirelessChargingWatts: number | null;
}

export interface DeviceColor {
  name: string;
  hex: string;
}

export interface Device {
  id: string; // Unique URL-friendly slug
  category: DeviceCategory;
  series: DeviceSeries;
  name: string;
  releaseYear: number;
  display: DisplaySpec | null;
  processor: ProcessorSpec | null;
  ramOptionsGb: number[];
  storageOptions: string[];
  cameras: CamerasSpec | null;
  battery: BatterySpec | null;
  durabilityRating: string | null;
  softwareVersion: string | null;
  colors: DeviceColor[];
  shortDescription: string; // Original phrasing, no promotional scrape
  keyHighlights: string[];
  sourceUrl: string; // Authentic retrieved URL
  lastVerified: string; // YYYY-MM-DD
  imagePath?: string; // Optional local path if custom user image supplied
}
