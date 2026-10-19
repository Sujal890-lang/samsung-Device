import { useState, useEffect } from 'react';
import type { Device } from '../data/schema';
import { devices } from '../data/devices';

const STORAGE_KEY = 'galaxy_compare_device_ids';
const MAX_COMPARE = 4;

export function useCompare() {
  const [compareIds, setCompareIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed.slice(0, MAX_COMPARE);
      }
    } catch {
      // ignore
    }
    // Default starter comparison: S26 Ultra vs S26+
    return ['galaxy-s26-ultra', 'galaxy-s26-plus'];
  });

  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compareIds));
    } catch {
      // ignore
    }
  }, [compareIds]);

  const addDevice = (id: string): boolean => {
    if (compareIds.includes(id)) {
      return true;
    }
    if (compareIds.length >= MAX_COMPARE) {
      setNotification(`Maximum of ${MAX_COMPARE} devices can be compared at once. Remove one to add this.`);
      setTimeout(() => setNotification(null), 3500);
      return false;
    }
    setCompareIds((prev) => [...prev, id]);
    setNotification('Device added to comparison matrix!');
    setTimeout(() => setNotification(null), 2500);
    return true;
  };

  const removeDevice = (id: string) => {
    setCompareIds((prev) => prev.filter((d) => d !== id));
  };

  const toggleDevice = (id: string) => {
    if (compareIds.includes(id)) {
      removeDevice(id);
    } else {
      addDevice(id);
    }
  };

  const clearAll = () => {
    setCompareIds([]);
  };

  const isSelected = (id: string) => compareIds.includes(id);

  const selectedDevices: Device[] = compareIds
    .map((id) => devices.find((d) => d.id === id))
    .filter((d): d is Device => d !== undefined);

  return {
    compareIds,
    selectedDevices,
    addDevice,
    removeDevice,
    toggleDevice,
    clearAll,
    isSelected,
    notification,
    maxLimit: MAX_COMPARE,
  };
}
