import React, { useState } from 'react';
import { Layers, Menu, X, Compass, Cpu, Info, Sparkles, Scale } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, deviceId?: string) => void;
  compareCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  compareCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'catalog', label: 'Catalog', icon: Layers },
    { id: 'compare', label: 'Compare', icon: Scale, badge: compareCount > 0 ? compareCount : null },
    { id: 'ecosystem', label: 'Ecosystem', icon: Compass },
    { id: 'features', label: 'Features', icon: Cpu },
    { id: 'finder', label: 'Device Finder', icon: Sparkles },
    { id: 'about', label: 'About', icon: Info },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07090e]/85 backdrop-blur-md border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Plain Text Wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <span className="text-white font-bold text-sm tracking-wider">G</span>
          </div>
          <div>
            <div className="text-white font-semibold text-base tracking-tight group-hover:text-cyan-400 transition-colors">
              Galaxy Device Explorer
            </div>
            <div className="text-[10px] text-slate-400 tracking-wider uppercase font-medium">
              Unofficial Fan Project
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge !== null && (
                  <span className="ml-1 bg-cyan-400 text-slate-950 text-xs font-bold px-1.5 py-0.2 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {compareCount > 0 && (
            <button
              type="button"
              onClick={() => handleNavClick('compare')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-cyan-500/15 text-cyan-300 text-xs font-semibold rounded-md border border-cyan-500/30"
              aria-label={`View comparison matrix with ${compareCount} devices`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{compareCount}</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] focus:ring-2 focus:ring-cyan-400"
            aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[#0a0d15] border-b border-white/[0.08] px-4 pt-2 pb-4 space-y-1"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((item) => {
            const Icon = item.icon;
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge !== null && (
                  <span className="bg-cyan-400 text-slate-950 text-xs font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
};
