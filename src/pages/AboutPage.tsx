import {
  ShieldAlert,
  Database,
  Calendar,
  ExternalLink,
  Code,
  CheckCircle2,
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Title */}
      <div className="border-b border-white/[0.08] pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Project Background & Integrity
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Galaxy Device Explorer
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
          An unofficial open-source fan and demo project engineering a modern, cinematic, and data-accurate guide to Samsung's mobile, tablet, wearable, audio, and computing hardware.
        </p>
      </div>

      {/* Prominent Legal & Disclaimer Section */}
      <section className="rounded-3xl border border-amber-500/30 bg-amber-950/20 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-3 text-amber-300 font-bold text-base">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <span>Independent & Unofficial Project Notice</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
          <strong>Galaxy Device Explorer</strong> is an independent educational, design, and developer portfolio project. It is <strong>NOT</strong> affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with <strong>Samsung Electronics Co., Ltd.</strong>, or any of its subsidiaries or affiliates.
        </p>
        <p className="text-xs text-amber-200/70 leading-relaxed">
          The names Samsung, Galaxy, One UI, Knox, DeX, Dynamic AMOLED, and related brand names, marks, emblems, and images are registered trademarks of their respective owners. Mention and demonstration of these terms are strictly for identification, research, and non-commercial educational review.
        </p>
      </section>

      {/* Strict Data Philosophy */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Database className="w-5 h-5 text-cyan-400" />
          <span>Specification Architecture & Integrity Rules</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="p-4 rounded-2xl border border-white/[0.06] bg-slate-900/40 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Zero Hallucination / No Invented Specs</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              If an official specification is unverified, variant-dependent, or undisclosed by the manufacturer, it is strictly stored as <code className="text-cyan-300 bg-white/[0.05] px-1 py-0.5 rounded">null</code> in data records and rendered explicitly as <strong>"Not listed"</strong> with a neutral badge in the user interface.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-white/[0.06] bg-slate-900/40 space-y-2">
            <div className="font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Automated Schema Verification</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Every device entry is validated by an automated CLI test script (<code className="text-cyan-300 bg-white/[0.05] px-1 py-0.5 rounded">npm run validate:data</code>) guaranteeing unique slugs, non-empty color palettes, valid hex values, valid dates, and verified HTTP(S) source URLs.
            </p>
          </div>
        </div>
      </section>

      {/* Verified Official Sources */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-cyan-400" />
          <span>Verified Sources & Verification Timestamps</span>
        </h2>
        <div className="rounded-2xl border border-white/[0.08] bg-slate-900/30 divide-y divide-white/[0.06] text-xs">
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-bold text-white">Samsung Global Newsroom (Official Press Releases)</div>
              <div className="text-slate-400">Primary source for Galaxy S, Z, Tab, Watch, Buds, and Book announcements.</div>
            </div>
            <a
              href="https://news.samsung.com/global"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              <span>news.samsung.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="font-bold text-white">Latest Dataset Verification Date</div>
              <div className="text-slate-400">All 20 device records re-checked for accuracy against manufacturer specs.</div>
            </div>
            <span className="font-mono text-cyan-300 font-bold">2026-09-15</span>
          </div>
        </div>
      </section>

      {/* Developer Guide: Adding or Updating Devices */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Code className="w-5 h-5 text-cyan-400" />
          <span>How to Add or Update Devices</span>
        </h2>
        <div className="p-5 rounded-2xl border border-white/[0.08] bg-slate-900/40 text-xs text-slate-300 space-y-3 leading-relaxed">
          <p>
            Hardware data lives in a decoupled TypeScript data file at <code className="text-cyan-300 bg-white/[0.05] px-1.5 py-0.5 rounded">src/data/devices.ts</code>. To contribute a new device:
          </p>
          <ol className="list-decimal pl-5 space-y-2 text-slate-400">
            <li>
              Open <code className="text-slate-200">src/data/devices.ts</code> and append a new record conforming strictly to the <code className="text-slate-200">Device</code> interface defined in <code className="text-slate-200">src/data/schema.ts</code>.
            </li>
            <li>
              Provide authentic source URLs and the current date in <code className="text-slate-200">lastVerified</code>.
            </li>
            <li>
              Run <code className="text-cyan-300 bg-white/[0.05] px-1 py-0.5 rounded">npm run validate:data</code> in the terminal. The test will immediately fail if IDs are duplicated or required fields are omitted.
            </li>
            <li>
              Optional: Place any custom photography into <code className="text-slate-200">public/devices/[category]/[id].webp</code> and link via <code className="text-slate-200">imagePath</code>.
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};
