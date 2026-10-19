import React, { useState, useMemo } from 'react';
import type { Device, DeviceCategory, DeviceSeries } from '../data/schema';
import { filterAndSortDevices, type SortOption } from '../utils/filter';
import { DeviceCard } from '../components/devices/DeviceCard';
import { Search, X, RotateCcw } from 'lucide-react';

interface CatalogPageProps {
  devices: Device[];
  initialCategory?: DeviceCategory | 'all';
  onSelectDevice: (device: Device) => void;
  onToggleCompare: (id: string) => void;
  isComparing: (id: string) => boolean;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  devices,
  initialCategory = 'all',
  onSelectDevice,
  onToggleCompare,
  isComparing,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DeviceCategory | 'all'>(initialCategory);
  const [selectedSeries, setSelectedSeries] = useState<DeviceSeries | 'all'>('all');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const categories: { id: DeviceCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Devices' },
    { id: 'phones', label: 'Phones' },
    { id: 'tablets', label: 'Tablets' },
    { id: 'wearables', label: 'Wearables' },
    { id: 'audio', label: 'Audio' },
    { id: 'laptops', label: 'Laptops' },
  ];

  const seriesOptions: { id: DeviceSeries | 'all'; label: string }[] = [
    { id: 'all', label: 'All Series' },
    { id: 'Galaxy S', label: 'Galaxy S' },
    { id: 'Galaxy Z', label: 'Galaxy Z (Fold / Flip)' },
    { id: 'Galaxy A', label: 'Galaxy A' },
    { id: 'Galaxy Tab S', label: 'Galaxy Tab S' },
    { id: 'Galaxy Tab A', label: 'Galaxy Tab A' },
    { id: 'Galaxy Watch', label: 'Galaxy Watch' },
    { id: 'Galaxy Buds', label: 'Galaxy Buds' },
    { id: 'Galaxy Book', label: 'Galaxy Book' },
  ];

  const years: (number | 'all')[] = ['all', 2026, 2024, 2023];

  const filteredDevices = useMemo(() => {
    return filterAndSortDevices(devices, {
      category: selectedCategory,
      series: selectedSeries,
      year: selectedYear,
      searchQuery,
      sortBy,
    });
  }, [devices, selectedCategory, selectedSeries, selectedYear, searchQuery, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSeries('all');
    setSelectedYear('all');
    setSearchQuery('');
    setSortBy('featured');
  };

  const isFiltered =
    selectedCategory !== 'all' ||
    selectedSeries !== 'all' ||
    selectedYear !== 'all' ||
    searchQuery.trim().length > 0 ||
    sortBy !== 'featured';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Title & Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Hardware Archive
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Device Catalog
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Filter and explore Samsung mobile, tablet, wearable, audio, and computing hardware with verified specifications.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="text-xs text-slate-400 font-mono">
          Showing <span className="text-cyan-400 font-bold">{filteredDevices.length}</span> of {devices.length} verified devices
        </div>
      </div>

      {/* Control Bar: Search & Category Chips */}
      <div className="space-y-4">
        {/* Search & Sort Controls */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          {/* Live Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, chipset, S Pen, 200MP..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-900/60 border border-white/[0.1] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-0.5 rounded"
                aria-label="Clear search input"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort Dropdown & Reset */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <label htmlFor="sort-select" className="text-xs text-slate-400 shrink-0">
              Sort by:
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-3 py-2 rounded-xl bg-slate-900/80 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="featured">Featured (Top Flagships)</option>
              <option value="year-desc">Release Year (Newest)</option>
              <option value="year-asc">Release Year (Oldest)</option>
              <option value="screen-desc">Display Size (Largest)</option>
              <option value="screen-asc">Display Size (Smallest)</option>
              <option value="battery-desc">Battery Capacity (Highest)</option>
              <option value="name-asc">Alphabetical (A - Z)</option>
            </select>

            {isFiltered && (
              <button
                type="button"
                onClick={resetFilters}
                className="p-2 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/[0.08] transition-colors flex items-center gap-1 text-xs"
                title="Reset all filters"
                aria-label="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Device Categories">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter Row: Series and Year */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Series:</span>
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value as DeviceSeries | 'all')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-white/[0.08] text-xs text-slate-300 focus:outline-none focus:border-cyan-400"
            >
              {seriesOptions.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">Year:</span>
            <div className="flex items-center gap-1">
              {years.map((y) => (
                <button
                  key={y.toString()}
                  type="button"
                  onClick={() => setSelectedYear(y)}
                  className={`px-2.5 py-1 rounded text-xs transition-colors ${
                    selectedYear === y
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {y === 'all' ? 'All' : y}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Device Grid */}
      {filteredDevices.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevices.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
              onSelect={onSelectDevice}
              onToggleCompare={onToggleCompare}
              isComparing={isComparing(device.id)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/30 p-12 text-center max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-white">No devices match your criteria</h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            Try adjusting your search query, selecting "All Devices", or clearing active filters.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 font-semibold text-xs border border-cyan-500/30 transition-all inline-flex items-center gap-1.5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
};
