import React, { useState } from 'react';
import type { Device } from '../../data/schema';
import { DeviceSilhouette } from './DeviceSilhouette';
import { ColorPicker } from './ColorPicker';
import { Plus, Check, ArrowRight } from 'lucide-react';

interface DeviceCardProps {
  device: Device;
  onSelect: (device: Device) => void;
  onToggleCompare: (id: string) => void;
  isComparing: boolean;
}

export const DeviceCard: React.FC<DeviceCardProps> = ({
  device,
  onSelect,
  onToggleCompare,
  isComparing,
}) => {
  const [selectedColorHex, setSelectedColorHex] = useState(
    device.colors[0]?.hex || '#2b2c30'
  );

  return (
    <div
      onClick={() => onSelect(device)}
      className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-slate-900/60 to-slate-950/80 p-5 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col justify-between"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(device);
        }
      }}
      aria-label={`View details for ${device.name}`}
    >
      {/* Top Header: Series & Compare Button */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/[0.06] text-slate-300 border border-white/[0.06]">
          {device.series} • {device.releaseYear}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(device.id);
          }}
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
            isComparing
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.1] border border-white/[0.08]'
          }`}
          aria-label={isComparing ? `Remove ${device.name} from comparison` : `Add ${device.name} to comparison`}
        >
          {isComparing ? (
            <>
              <Check className="w-3.5 h-3.5 text-cyan-400" />
              <span>Comparing</span>
            </>
          ) : (
            <>
              <Plus className="w-3.5 h-3.5" />
              <span>Compare</span>
            </>
          )}
        </button>
      </div>

      {/* Visual Silhouette Showcase */}
      <div className="my-2 flex justify-center items-center py-2 relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-cyan-500/5 rounded-full filter blur-2xl group-hover:bg-cyan-500/10 transition-colors" />
        <DeviceSilhouette device={device} colorHex={selectedColorHex} size="md" />
      </div>

      {/* Device Info & Specs */}
      <div className="mt-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
            {device.name}
          </h3>
          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            {device.shortDescription}
          </p>
        </div>

        {/* Spec Pill Highlights */}
        <div className="pt-2 border-t border-white/[0.06] grid grid-cols-2 gap-2 text-xs">
          <div className="text-slate-400">
            <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-medium">Display</span>
            <span className="text-slate-200 font-medium truncate block">
              {device.display?.sizeInches ? `${device.display.sizeInches}" 120Hz` : 'Audio/Wearable'}
            </span>
          </div>
          <div className="text-slate-400">
            <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-medium">Battery</span>
            <span className="text-slate-200 font-medium truncate block">
              {device.battery?.capacityMah ? `${device.battery.capacityMah} mAh` : 'Not listed'}
            </span>
          </div>
        </div>

        {/* Color Palette & Explore CTA */}
        <div className="pt-2 flex items-center justify-between">
          <ColorPicker
            colors={device.colors}
            selectedColorHex={selectedColorHex}
            onSelectColor={setSelectedColorHex}
            size="sm"
          />

          <span className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
            <span>Explore</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </div>
  );
};
