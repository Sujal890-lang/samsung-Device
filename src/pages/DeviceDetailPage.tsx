import React, { useState } from 'react';
import type { Device } from '../data/schema';
import { DeviceSilhouette } from '../components/devices/DeviceSilhouette';
import { ColorPicker } from '../components/devices/ColorPicker';
import { SpecTable } from '../components/devices/SpecTable';
import {
  ArrowLeft,
  Scale,
  Check,
  RotateCw,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

interface DeviceDetailPageProps {
  device: Device;
  onBack: () => void;
  onToggleCompare: (id: string) => void;
  isComparing: boolean;
  onNavigate: (tab: string, deviceId?: string) => void;
}

export const DeviceDetailPage: React.FC<DeviceDetailPageProps> = ({
  device,
  onBack,
  onToggleCompare,
  isComparing,
  onNavigate,
}) => {
  const [selectedColorHex, setSelectedColorHex] = useState(
    device.colors[0]?.hex || '#2b2c30'
  );
  const [showBack, setShowBack] = useState(false);

  const selectedColorName =
    device.colors.find((c) => c.hex.toLowerCase() === selectedColorHex.toLowerCase())?.name ||
    device.colors[0]?.name;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onToggleCompare(device.id)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
              isComparing
                ? 'bg-cyan-500 text-slate-950 shadow-cyan-500/20'
                : 'bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/[0.1]'
            }`}
          >
            {isComparing ? (
              <>
                <Check className="w-4 h-4" />
                <span>In Comparison Matrix</span>
              </>
            ) : (
              <>
                <Scale className="w-4 h-4 text-cyan-400" />
                <span>Add to Compare</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Hero Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Visual Showcase Gallery */}
        <div className="lg:col-span-5 sticky top-24 space-y-6">
          <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-slate-900/80 via-slate-950 to-[#070a12] p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl">
            {/* Ambient Backlight */}
            <div
              className="absolute inset-0 opacity-25 filter blur-3xl pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: selectedColorHex }}
            />

            {/* Flip View Action */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/[0.08] text-slate-300">
                {selectedColorName}
              </span>

              <button
                type="button"
                onClick={() => setShowBack(!showBack)}
                className="p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/[0.08] transition-all flex items-center gap-1.5 text-xs font-semibold"
                title="Flip device orientation"
                aria-label="Flip device between screen and back chassis"
              >
                <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                <span>{showBack ? 'View Screen' : 'View Back'}</span>
              </button>
            </div>

            {/* Silhouette Display */}
            <div className="relative z-10 py-6 flex justify-center items-center min-h-[360px]">
              <DeviceSilhouette
                device={device}
                colorHex={selectedColorHex}
                size="xl"
                showBack={showBack}
              />
            </div>

            {/* Color Swatches */}
            <div className="relative z-10 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div className="text-xs text-slate-400 font-medium">Available Finishes:</div>
              <ColorPicker
                colors={device.colors}
                selectedColorHex={selectedColorHex}
                onSelectColor={setSelectedColorHex}
                size="md"
              />
            </div>
          </div>

          {/* Source Verification Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/30 p-5 space-y-3">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Specification Integrity</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every detail is verified against official manufacturer documentation. Unknown or regional parameters are strictly designated as "Not listed".
            </p>
            <div className="flex items-center justify-between text-xs pt-1 border-t border-white/[0.06]">
              <span className="text-slate-500">Verified: {device.lastVerified}</span>
              <a
                href={device.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
              >
                <span>Official Documentation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Highlights & Full Specs */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                {device.series}
              </span>
              <span className="text-xs text-slate-400">
                Released {device.releaseYear}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {device.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed font-normal">
              {device.shortDescription}
            </p>
          </div>

          {/* Key Highlights Bullet Cards */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Key Architectural Highlights</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {device.keyHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-3.5 rounded-xl border border-white/[0.06] bg-slate-900/40 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grouped Specification Table */}
          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <h2 className="text-lg font-bold text-white tracking-tight">
              Detailed Technical Specifications
            </h2>
            <SpecTable device={device} />
          </div>

          {/* Compare Prompt CTA */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-r from-slate-900 via-cyan-950/20 to-slate-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-base">Want to see how it stacks up?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Compare side-by-side with up to 3 other Galaxy devices in the Compare Matrix.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onToggleCompare(device.id);
                onNavigate('compare');
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 transition-colors flex items-center gap-2"
            >
              <Scale className="w-4 h-4" />
              <span>Open in Comparison Matrix</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
