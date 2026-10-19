import React, { useState } from 'react';
import {
  ecosystemNodes,
  ecosystemConnections,
} from '../data/ecosystem';
import {
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Info,
  Sparkles,
  Share2,
} from 'lucide-react';

export const EcosystemPage: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('phone');
  const [activeConnectionId, setActiveConnectionId] = useState<string>('quick-share');

  const iconMap: { [key: string]: React.ElementType } = {
    Smartphone,
    Tablet,
    Laptop,
    Watch,
    Headphones,
  };

  const selectedConnection = ecosystemConnections.find(
    (c) => c.id === activeConnectionId
  ) || ecosystemConnections[0];

  const selectedNode = ecosystemNodes.find((n) => n.id === activeNodeId) || ecosystemNodes[0];

  // Connections involving the active node
  const relatedConnections = ecosystemConnections.filter(
    (c) => c.fromNodeId === activeNodeId || c.toNodeId === activeNodeId
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="border-b border-white/[0.08] pb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Connected Experiences
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
          Galaxy Interactive Ecosystem
        </h1>
        <p className="text-sm text-slate-400 mt-1.5 max-w-2xl">
          Interact with the nodes below to discover how phones, tablets, laptops, smartwatches, and earbuds communicate seamlessly using proprietary Samsung continuity technologies.
        </p>
      </div>

      {/* Main Interactive Workstation Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Diagram Canvas */}
        <div className="lg:col-span-7 rounded-3xl border border-white/[0.1] bg-gradient-to-b from-[#0c101c] via-[#080b14] to-[#04060a] p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-2xl min-h-[480px] flex flex-col justify-between">
          {/* Subtle Ambient Network Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />

          {/* SVG Connection Vectors */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="activeLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            {ecosystemConnections.map((conn) => {
              const from = ecosystemNodes.find((n) => n.id === conn.fromNodeId);
              const to = ecosystemNodes.find((n) => n.id === conn.toNodeId);
              if (!from || !to) return null;

              const isSelected = conn.id === activeConnectionId;
              const isNodeActive = from.id === activeNodeId || to.id === activeNodeId;

              return (
                <line
                  key={conn.id}
                  x1={`${from.x}%`}
                  y1={`${from.y}%`}
                  x2={`${to.x}%`}
                  y2={`${to.y}%`}
                  stroke={isSelected ? 'url(#activeLineGrad)' : isNodeActive ? 'rgba(0, 229, 255, 0.35)' : 'rgba(255, 255, 255, 0.08)'}
                  strokeWidth={isSelected ? '1.2' : isNodeActive ? '0.7' : '0.4'}
                  strokeDasharray={isSelected ? 'none' : '2 2'}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Device Nodes Positioned in Diagram Space */}
          <div className="relative z-10 w-full h-[360px] sm:h-[400px]">
            {ecosystemNodes.map((node) => {
              const Icon = iconMap[node.icon] || Smartphone;
              const isActive = node.id === activeNodeId;
              const isCentral = node.id === 'phone';

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => {
                    setActiveNodeId(node.id);
                    // auto pick first connection of this node
                    const firstConn = ecosystemConnections.find(
                      (c) => c.fromNodeId === node.id || c.toNodeId === node.id
                    );
                    if (firstConn) setActiveConnectionId(firstConn.id);
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-2xl flex flex-col items-center gap-1.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                    isActive
                      ? 'bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-bold scale-110 shadow-xl shadow-cyan-500/30'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-white/[0.1] hover:border-cyan-500/40 hover:scale-105'
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                  aria-pressed={isActive}
                  aria-label={`Select ${node.name}`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                  <span className="text-[10px] sm:text-xs font-semibold whitespace-nowrap">
                    {node.name}
                  </span>
                  {isCentral && (
                    <span className={`text-[8px] uppercase tracking-wider px-1.5 py-0.2 rounded ${
                      isActive ? 'bg-slate-950 text-cyan-300' : 'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      Hub
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Connection Chips along bottom */}
          <div className="relative z-10 pt-4 border-t border-white/[0.08]">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">
              Select Cross-Device Feature:
            </span>
            <div className="flex flex-wrap gap-2">
              {ecosystemConnections.map((conn) => {
                const isSelected = conn.id === activeConnectionId;
                return (
                  <button
                    key={conn.id}
                    type="button"
                    onClick={() => {
                      setActiveConnectionId(conn.id);
                      setActiveNodeId(conn.fromNodeId);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold'
                        : 'bg-white/[0.05] text-slate-300 hover:text-white hover:bg-white/[0.1] border border-white/[0.06]'
                    }`}
                  >
                    {conn.featureName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Active Feature Explanation Panel */}
        <div className="lg:col-span-5 space-y-6">
          {/* Active Connection Deep Dive Card */}
          <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-slate-900 via-slate-950 to-[#07090f] p-6 sm:p-8 backdrop-blur-xl space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                <Share2 className="w-3.5 h-3.5" />
                <span>Feature Spotlight</span>
              </span>

              <span className="text-xs text-slate-400 font-mono">
                {selectedConnection.fromNodeId.toUpperCase()} ↔ {selectedConnection.toNodeId.toUpperCase()}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-white tracking-tight">
              {selectedConnection.featureName}
            </h2>

            <p className="text-sm font-medium text-cyan-300 leading-snug">
              {selectedConnection.summary}
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed">
              {selectedConnection.detailedExplanation}
            </div>

            {/* Real World Benefit Example */}
            <div className="space-y-2 pt-2 border-t border-white/[0.06]">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Real-World Scenario</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Take a 200MP photo on your Galaxy phone and immediately drop it into Photoshop on your Galaxy Book with zero compression, while your Galaxy Buds automatically pause when someone rings your door on SmartThings.
              </p>
            </div>
          </div>

          {/* Active Node Summary Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/40 p-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{selectedNode.name} in the Ecosystem</h3>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Role & Continuity</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedNode.description}
            </p>

            <div className="pt-2 border-t border-white/[0.06]">
              <span className="text-[11px] font-semibold text-slate-400 block mb-1.5">
                Active Connections for this device:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {relatedConnections.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActiveConnectionId(c.id)}
                    className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-cyan-500/20 text-[11px] text-cyan-300 transition-colors"
                  >
                    {c.featureName}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
