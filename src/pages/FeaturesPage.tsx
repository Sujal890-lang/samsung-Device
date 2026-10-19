import React, { useState } from 'react';
import { featuresList } from '../data/features';
import {
  Sparkles,
  Smartphone,
  Camera,
  Monitor,
  Shield,
  PenTool,
  CheckCircle2,
} from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const [selectedFeatureId, setSelectedFeatureId] = useState<string>(featuresList[0].id);

  const iconMap: { [key: string]: React.ElementType } = {
    'galaxy-ai': Sparkles,
    'one-ui': Smartphone,
    'camera-modes': Camera,
    'samsung-dex': Monitor,
    'knox-security': Shield,
    's-pen': PenTool,
  };

  const selectedFeature =
    featuresList.find((f) => f.id === selectedFeatureId) || featuresList[0];

  const FeatureIcon = iconMap[selectedFeature.id] || Sparkles;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Core Technologies
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
          Galaxy Feature Explorer
        </h1>
        <p className="text-sm text-slate-400 mt-1.5 max-w-2xl">
          Clear, plain-language explanations of Samsung's signature hardware and software pillars—from on-device AI and Knox silicon encryption to low-latency S Pen ink.
        </p>
      </div>

      {/* Feature Navigation Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {featuresList.map((feature) => {
          const Icon = iconMap[feature.id] || Sparkles;
          const isActive = feature.id === selectedFeatureId;

          return (
            <button
              key={feature.id}
              type="button"
              onClick={() => setSelectedFeatureId(feature.id)}
              className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-cyan-500/15 border-cyan-500/40 text-white shadow-lg shadow-cyan-500/10 -translate-y-1'
                  : 'bg-slate-900/40 border-white/[0.08] text-slate-400 hover:text-slate-200 hover:bg-slate-900/80 hover:border-white/[0.15]'
              }`}
              aria-pressed={isActive}
            >
              <div className="flex items-center justify-between mb-3">
                <Icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-white/[0.05] text-slate-500'
                }`}>
                  {feature.badge}
                </span>
              </div>
              <div className={`text-sm font-bold tracking-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {feature.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Feature Deep Dive Showcase */}
      <div className="rounded-3xl border border-white/[0.1] bg-gradient-to-b from-slate-900/80 via-slate-950 to-[#07090f] p-6 sm:p-10 backdrop-blur-xl space-y-8 shadow-2xl">
        {/* Title & Tagline Banner */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold">
            <FeatureIcon className="w-3.5 h-3.5" />
            <span>{selectedFeature.subtitle}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {selectedFeature.title}
          </h2>

          <p className="text-base text-cyan-200/90 font-medium leading-relaxed">
            {selectedFeature.tagline}
          </p>

          <p className="text-sm text-slate-300 leading-relaxed pt-1">
            {selectedFeature.description}
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="space-y-4 pt-4 border-t border-white/[0.08]">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            How It Works in Daily Life
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectedFeature.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-white/[0.06] bg-slate-900/40 hover:bg-slate-900/70 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{pillar.title}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-6">
                  {pillar.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Series Footer */}
        <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <span className="text-slate-400 font-medium">
            Supported Device Hardware Families:
          </span>
          <div className="flex flex-wrap gap-2">
            {selectedFeature.supportedSeries.map((series, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-white/[0.06] text-slate-300 border border-white/[0.06] font-medium"
              >
                {series}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
