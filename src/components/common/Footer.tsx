import React from 'react';
import { ShieldAlert, ExternalLink, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="mt-24 border-t border-white/[0.08] bg-[#05070a] text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand & Mission */}
        <div className="md:col-span-2 space-y-3">
          <div className="text-white font-bold text-lg tracking-tight">Galaxy Device Explorer</div>
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">
            An independent, open creative showcase built to explore Samsung mobile, tablet, wearable, audio, and laptop hardware architecture. Built with clean engineering, accessible markup, and verified data.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
            <span>as an unofficial fan & demo project</span>
          </div>
        </div>

        {/* Navigation Quick Links */}
        <div>
          <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Navigation</div>
          <ul className="space-y-2 text-sm">
            <li>
              <button type="button" onClick={() => onNavigate('catalog')} className="hover:text-cyan-400 transition-colors">
                Device Catalog
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('compare')} className="hover:text-cyan-400 transition-colors">
                Side-by-Side Comparison
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('ecosystem')} className="hover:text-cyan-400 transition-colors">
                Interactive Ecosystem
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('features')} className="hover:text-cyan-400 transition-colors">
                Feature Deep Dives
              </button>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('finder')} className="hover:text-cyan-400 transition-colors">
                5-Step Device Finder
              </button>
            </li>
          </ul>
        </div>

        {/* Data & Sources */}
        <div>
          <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Verification</div>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-1.5">
              <span>Latest Verification:</span>
              <span className="text-cyan-300 font-mono text-xs">2026-09-15</span>
            </li>
            <li>
              <a
                href="https://news.samsung.com/global"
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
              >
                <span>Samsung Newsroom Global</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </li>
            <li>
              <button type="button" onClick={() => onNavigate('about')} className="hover:text-cyan-400 transition-colors">
                About & Data Architecture
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mandatory Unofficial Disclaimer Box */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/[0.06] text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-2 max-w-3xl">
          <ShieldAlert className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
          <p>
            <strong>Legal Notice:</strong> This website is an unofficial educational and enthusiast demonstration project. All product names, logos, trademarks, and registered trademarks (including Galaxy, Samsung, One UI, Knox, and DeX) are property of their respective owners, including Samsung Electronics Co., Ltd. Mention of them is purely for product identification and editorial commentary.
          </p>
        </div>
        <div className="shrink-0 text-slate-500">
          © {new Date().getFullYear()} Galaxy Device Explorer
        </div>
      </div>
    </footer>
  );
};
