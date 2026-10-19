import React, { useState } from 'react';
import type { Device } from '../data/schema';
import { buildComparisonMatrix } from '../utils/compare';
import { DeviceSilhouette } from '../components/devices/DeviceSilhouette';
import {
  X,
  Plus,
  Scale,
  ArrowRight,
  Eye,
  EyeOff,
} from 'lucide-react';

interface ComparePageProps {
  selectedDevices: Device[];
  allDevices: Device[];
  onRemoveDevice: (id: string) => void;
  onAddDevice: (id: string) => void;
  onClearAll: () => void;
  onNavigate: (tab: string, deviceId?: string) => void;
  maxLimit: number;
}

export const ComparePage: React.FC<ComparePageProps> = ({
  selectedDevices,
  allDevices,
  onRemoveDevice,
  onAddDevice,
  onClearAll,
  onNavigate,
  maxLimit,
}) => {
  const [highlightDiffsOnly, setHighlightDiffsOnly] = useState(true);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [modalSearch, setModalSearch] = useState('');

  const matrix = buildComparisonMatrix(selectedDevices);

  // Available devices not currently in compare
  const availableToAdd = allDevices.filter(
    (d) => !selectedDevices.some((sd) => sd.id === d.id)
  );

  const filteredModalDevices = availableToAdd.filter(
    (d) =>
      d.name.toLowerCase().includes(modalSearch.toLowerCase()) ||
      d.series.toLowerCase().includes(modalSearch.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Hardware Evaluation Matrix
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
            Compare Devices
          </h1>
          <p className="text-sm text-slate-400 mt-1.5">
            Evaluate specifications side-by-side for up to {maxLimit} devices. Differences are automatically highlighted.
          </p>
        </div>

        {/* Controls: Highlight Diff toggle & Add Button */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setHighlightDiffsOnly(!highlightDiffsOnly)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-2 ${
              highlightDiffsOnly
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-white/[0.05] text-slate-400 border-white/[0.08] hover:text-white'
            }`}
            aria-pressed={highlightDiffsOnly}
          >
            {highlightDiffsOnly ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span>Highlight Differences</span>
          </button>

          {selectedDevices.length < maxLimit && (
            <button
              type="button"
              onClick={() => setAddModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Add Device ({selectedDevices.length}/{maxLimit})</span>
            </button>
          )}

          {selectedDevices.length > 0 && (
            <button
              type="button"
              onClick={onClearAll}
              className="px-3 py-2 rounded-xl text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/30 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>
      </div>

      {selectedDevices.length === 0 ? (
        /* Empty State */
        <div className="rounded-3xl border border-white/[0.08] bg-slate-900/30 p-16 text-center max-w-xl mx-auto space-y-5">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto text-cyan-400">
            <Scale className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white">No devices in comparison matrix</h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Select devices from the catalog or add your first device now to start comparing displays, chipsets, camera sensors, and battery longevity.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setAddModalOpen(true)}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Select Devices</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('catalog')}
              className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
            >
              Browse Catalog
            </button>
          </div>
        </div>
      ) : (
        /* Side-by-Side Comparison Matrix */
        <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-slate-950/80 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left border-collapse min-w-[720px]">
            {/* Sticky Table Header */}
            <thead className="sticky top-16 z-30 bg-[#0c101a] border-b border-white/[0.1] shadow-md">
              <tr>
                <th className="p-4 w-56 text-xs font-bold uppercase tracking-wider text-slate-400 bg-[#0c101a]">
                  Specification
                </th>
                {selectedDevices.map((device) => (
                  <th key={device.id} className="p-4 min-w-[200px] text-center bg-[#0c101a] border-l border-white/[0.06]">
                    <div className="flex flex-col items-center relative group">
                      {/* Remove Button */}
                      <button
                        type="button"
                        onClick={() => onRemoveDevice(device.id)}
                        className="absolute -top-1 -right-1 p-1 rounded-full bg-slate-800 hover:bg-rose-500 text-slate-400 hover:text-white transition-colors"
                        title={`Remove ${device.name}`}
                        aria-label={`Remove ${device.name} from comparison`}
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      {/* Small Silhouette thumbnail */}
                      <div className="h-24 flex items-center justify-center my-1">
                        <DeviceSilhouette device={device} size="sm" />
                      </div>

                      <div className="text-sm font-bold text-white tracking-tight mt-1 line-clamp-1">
                        {device.name}
                      </div>
                      <div className="text-[11px] text-cyan-400 font-medium">
                        {device.series} • {device.releaseYear}
                      </div>

                      <button
                        type="button"
                        onClick={() => onNavigate('detail', device.id)}
                        className="mt-2 text-[11px] font-semibold text-slate-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </th>
                ))}
                {/* Empty slot placeholder if less than maxLimit */}
                {selectedDevices.length < maxLimit && (
                  <th className="p-4 min-w-[180px] text-center bg-[#0c101a]/50 border-l border-white/[0.06]">
                    <button
                      type="button"
                      onClick={() => setAddModalOpen(true)}
                      className="w-full h-36 rounded-xl border border-dashed border-white/[0.15] hover:border-cyan-500/50 hover:bg-cyan-500/5 text-slate-400 hover:text-cyan-300 flex flex-col items-center justify-center gap-2 transition-all p-4"
                    >
                      <Plus className="w-5 h-5 text-cyan-400" />
                      <span className="text-xs font-semibold">Add device to compare</span>
                    </button>
                  </th>
                )}
              </tr>
            </thead>

            {/* Spec Groups */}
            <tbody className="divide-y divide-white/[0.05] text-xs">
              {matrix.map((group) => (
                <React.Fragment key={group.categoryTitle}>
                  {/* Category Header Row */}
                  <tr className="bg-slate-900/60 font-bold text-cyan-400 tracking-wider uppercase text-[11px]">
                    <td colSpan={selectedDevices.length + (selectedDevices.length < maxLimit ? 2 : 1)} className="py-2.5 px-4">
                      {group.categoryTitle}
                    </td>
                  </tr>

                  {/* Spec Rows */}
                  {group.rows.map((row) => {
                    const isDiff = row.isDifferent && highlightDiffsOnly;
                    return (
                      <tr
                        key={row.key}
                        className={`transition-colors hover:bg-white/[0.02] ${
                          isDiff ? 'bg-cyan-500/[0.04]' : ''
                        }`}
                      >
                        <td className="p-3.5 font-medium text-slate-400 flex items-center gap-1.5">
                          <span>{row.label}</span>
                          {isDiff && (
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" title="Different values" />
                          )}
                        </td>

                        {selectedDevices.map((device) => {
                          const val = row.values[device.id];
                          const isNotListed = val === 'Not listed';
                          return (
                            <td
                              key={device.id}
                              className={`p-3.5 text-center border-l border-white/[0.05] ${
                                isDiff ? 'font-semibold text-cyan-200' : 'text-slate-200'
                              }`}
                            >
                              {isNotListed ? (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 text-slate-400">
                                  Not listed
                                </span>
                              ) : (
                                <span>{val}</span>
                              )}
                            </td>
                          );
                        })}

                        {selectedDevices.length < maxLimit && (
                          <td className="p-3.5 border-l border-white/[0.05] bg-transparent" />
                        )}
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Device Modal Dialog */}
      {addModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/[0.1] bg-[#0c101a] p-6 shadow-2xl space-y-4 max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
              <h2 id="modal-title" className="text-lg font-bold text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400" />
                <span>Select a Device to Add</span>
              </h2>
              <button
                type="button"
                onClick={() => setAddModalOpen(false)}
                className="p-1 rounded text-slate-400 hover:text-white"
                aria-label="Close device selection dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick search inside modal */}
            <input
              type="text"
              value={modalSearch}
              onChange={(e) => setModalSearch(e.target.value)}
              placeholder="Search by name or series..."
              className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-white/[0.1] text-xs text-white focus:outline-none focus:border-cyan-400"
            />

            {/* Device list */}
            <div className="overflow-y-auto space-y-2 flex-1 pr-1">
              {filteredModalDevices.length > 0 ? (
                filteredModalDevices.map((dev) => (
                  <div
                    key={dev.id}
                    className="p-3 rounded-xl border border-white/[0.06] bg-slate-900/40 hover:bg-slate-900 flex items-center justify-between gap-3 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center">
                        <DeviceSilhouette device={dev} size="sm" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">{dev.name}</div>
                        <div className="text-[10px] text-slate-400">
                          {dev.series} • {dev.releaseYear} • {dev.category}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        onAddDevice(dev.id);
                        setAddModalOpen(false);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 font-semibold text-xs border border-cyan-500/30 transition-all"
                    >
                      Add to Matrix
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-slate-400">
                  No additional devices found matching "{modalSearch}".
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
