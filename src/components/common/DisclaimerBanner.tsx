import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const DisclaimerBanner: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Legal Disclaimer"
      className="bg-amber-950/40 border-b border-amber-500/30 text-amber-200 px-4 py-2.5 text-xs sm:text-sm font-medium transition-all"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
          <span>
            <strong className="text-amber-100 font-semibold">Unofficial Fan & Demo Project:</strong> This site is for educational demonstration and product exploration. It is not affiliated with, sponsored by, or endorsed by Samsung Electronics Co., Ltd.
          </span>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="text-amber-400/80 hover:text-amber-200 p-1 rounded transition-colors focus:ring-1 focus:ring-amber-400"
          aria-label="Dismiss disclaimer announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </aside>
  );
};
