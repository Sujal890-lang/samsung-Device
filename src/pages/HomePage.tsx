import React, { useState } from 'react';
import type { Device } from '../data/schema';
import { DeviceSilhouette } from '../components/devices/DeviceSilhouette';
import { ColorPicker } from '../components/devices/ColorPicker';
import {
  Sparkles,
  ArrowRight,
  RotateCw,
  Scale,
  Compass,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface HomePageProps {
  flagshipDevice: Device;
  onNavigate: (tab: string, deviceId?: string) => void;
  onToggleCompare: (id: string) => void;
  isComparing: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({
  flagshipDevice,
  onNavigate,
  onToggleCompare,
  isComparing,
}) => {
  const [selectedColorHex, setSelectedColorHex] = useState(
    flagshipDevice.colors[0]?.hex || '#2b2c30'
  );
  const [showBack, setShowBack] = useState(false);

  const categories = [
    { id: 'phones', name: 'Smartphones', count: 'Galaxy S, Z & A', icon: '📱' },
    { id: 'tablets', name: 'Tablets', count: 'Galaxy Tab S & A', icon: '📋' },
    { id: 'wearables', name: 'Wearables', count: 'Galaxy Watch Ultra & 7', icon: '⌚' },
    { id: 'audio', name: 'Audio', count: 'Galaxy Buds3 Pro', icon: '🎧' },
    { id: 'laptops', name: 'Laptops', count: 'Galaxy Book4 Ultra', icon: '💻' },
  ];

  return (
    <div className="space-y-24">
      {/* Cinematic Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b border-white/[0.06]">
        {/* Ambient atmospheric gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-transparent rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Next-Generation Galaxy Hardware Architecture</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
                Explore the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Galaxy</span> Ecosystem.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Discover verified specifications, compare mobile flagships, and experience how Samsung phones, watches, buds, tablets, and laptops connect seamlessly through intelligent continuity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => onNavigate('catalog')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore All Devices</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('finder')}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm transition-all border border-white/[0.1] hover:border-cyan-500/40 flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Device Finder Quiz</span>
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('compare')}
                  className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/[0.05] text-slate-300 hover:text-white font-semibold text-sm transition-all flex items-center gap-2"
                >
                  <Scale className="w-4 h-4 text-slate-400" />
                  <span>Compare Matrix</span>
                </button>
              </div>

              {/* Trust & Verification Badges */}
              <div className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>100% Verified Specs (No Invented Data)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Official Samsung Newsroom Sourced</span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Showcase Showcase Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-3xl border border-white/[0.1] bg-gradient-to-b from-slate-900/80 via-slate-950 to-[#070a12] p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/10">
                {/* Showcase Top bar */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                      Current Flagship
                    </span>
                    <h2 className="text-xl font-bold text-white tracking-tight">
                      {flagshipDevice.name}
                    </h2>
                  </div>

                  {/* Flip Front/Back Toggle */}
                  <button
                    type="button"
                    onClick={() => setShowBack(!showBack)}
                    className="p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/[0.08] transition-all flex items-center gap-1.5 text-xs font-medium"
                    title="Flip between front screen and rear camera chassis"
                    aria-label="Flip device view"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{showBack ? 'Front' : 'Back'}</span>
                  </button>
                </div>

                {/* 3D-Style Device Silhouette */}
                <div className="py-4 flex justify-center items-center relative min-h-[300px]">
                  <DeviceSilhouette
                    device={flagshipDevice}
                    colorHex={selectedColorHex}
                    size="lg"
                    showBack={showBack}
                  />
                </div>

                {/* Color Selector & Quick Specs */}
                <div className="pt-4 border-t border-white/[0.08] space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Finish:</span>
                    <ColorPicker
                      colors={flagshipDevice.colors}
                      selectedColorHex={selectedColorHex}
                      onSelectColor={setSelectedColorHex}
                      size="md"
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-xl bg-white/[0.03] text-center text-xs">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Screen</span>
                      <span className="font-bold text-slate-200">6.9" 120Hz</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Camera</span>
                      <span className="font-bold text-slate-200">200 MP</span>
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Battery</span>
                      <span className="font-bold text-slate-200">5000 mAh</span>
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => onNavigate('detail', flagshipDevice.id)}
                      className="flex-1 py-2.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-semibold text-xs border border-cyan-500/30 transition-all text-center"
                    >
                      View Full Specifications
                    </button>
                    <button
                      type="button"
                      onClick={() => onToggleCompare(flagshipDevice.id)}
                      className={`px-3 py-2.5 rounded-lg border text-xs font-semibold transition-all ${
                        isComparing
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 font-bold'
                          : 'bg-white/[0.05] text-slate-300 hover:text-white border-white/[0.1]'
                      }`}
                      aria-label="Toggle comparison"
                    >
                      {isComparing ? 'Comparing' : 'Compare'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Fast Explorer Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Explore by Product Category
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Filter through phones, creative tablets, high-end smartwatches, audiophile earbuds, and Galaxy Book laptops.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => onNavigate('catalog', cat.id)}
              className="p-5 rounded-2xl border border-white/[0.08] bg-slate-900/40 hover:bg-slate-900/80 hover:border-cyan-500/40 text-left transition-all duration-200 hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <div className="text-white font-bold text-base group-hover:text-cyan-300 transition-colors">
                {cat.name}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {cat.count}
              </div>
              <div className="mt-3 flex items-center text-xs font-medium text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>View models</span>
                <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Interactive Ecosystem Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-cyan-500/25 bg-gradient-to-r from-slate-900 via-[#0a1120] to-slate-900 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-cyan-500/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Cross-Device Continuity
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Better Together: The Galaxy Connected Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore how Quick Share, Samsung DeX, Second Screen, and Multi Control unite phones, laptops, tablets, and smartwatches into a cohesive workspace.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('ecosystem')}
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Launch Interactive Ecosystem Map</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
