import React from 'react';
import type { Device } from '../../data/schema';

interface DeviceSilhouetteProps {
  device: Device;
  colorHex?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBack?: boolean;
}

export const DeviceSilhouette: React.FC<DeviceSilhouetteProps> = ({
  device,
  colorHex,
  size = 'md',
  showBack = false,
}) => {
  const activeColor = colorHex || (device.colors[0] ? device.colors[0].hex : '#2b2c30');

  // Scale map
  const scaleClasses = {
    sm: 'w-24 h-36',
    md: 'w-44 h-64',
    lg: 'w-64 h-96',
    xl: 'w-80 h-[480px]',
  };

  // If user provided a real image in the future, render image tag
  if (device.imagePath) {
    return (
      <div className={`relative flex items-center justify-center ${scaleClasses[size]}`}>
        <img
          src={device.imagePath}
          alt={device.name}
          className="max-w-full max-h-full object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
          loading="lazy"
          onError={(e) => {
            // Fallback to silhouette if image fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>
    );
  }

  // 1. WEARABLES (Galaxy Watch)
  if (device.category === 'wearables') {
    const isUltra = device.id.includes('ultra');
    return (
      <div className={`relative flex items-center justify-center p-2 ${scaleClasses[size]}`}>
        <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]" aria-label={device.name}>
          <defs>
            <linearGradient id={`watchGrad-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
              <stop offset="50%" stopColor={activeColor} />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>
            <radialGradient id={`dialGrad-${device.id}`} cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#0c1017" />
              <stop offset="100%" stopColor="#040608" />
            </radialGradient>
          </defs>

          {/* Watch Straps */}
          <rect x="70" y="5" width="60" height="45" rx="6" fill={activeColor} opacity="0.85" />
          <rect x="70" y="190" width="60" height="45" rx="6" fill={activeColor} opacity="0.85" />

          {/* Ultra Cushion Case or Round Body */}
          {isUltra ? (
            <rect x="35" y="45" width="130" height="150" rx="36" fill={`url(#watchGrad-${device.id})`} stroke="#404552" strokeWidth="3" />
          ) : (
            <circle cx="100" cy="120" r="70" fill={`url(#watchGrad-${device.id})`} stroke="#333742" strokeWidth="2.5" />
          )}

          {/* Quick Button / Crown */}
          {isUltra && <rect x="163" y="105" width="8" height="30" rx="3" fill="#ff5a1f" />}
          <rect x="163" y="75" width="6" height="18" rx="2" fill="#555d6e" />
          <rect x="163" y="147" width="6" height="18" rx="2" fill="#555d6e" />

          {/* Inner Bezel Ring */}
          <circle cx="100" cy="120" r="54" fill={`url(#dialGrad-${device.id})`} stroke="#1e2430" strokeWidth="3" />

          {/* Ticks and Digital Watchface Elements */}
          <circle cx="100" cy="120" r="48" fill="none" stroke="rgba(0,229,255,0.2)" strokeDasharray="3 7" strokeWidth="1.5" />
          <text x="100" y="112" textAnchor="middle" fill="#00e5ff" fontSize="16" fontFamily="monospace" fontWeight="bold">
            10:08
          </text>
          <text x="100" y="128" textAnchor="middle" fill="#94a3b8" fontSize="8" letterSpacing="1">
            GALAXY
          </text>
          <circle cx="100" cy="140" r="4" fill="#10b981" />
        </svg>
      </div>
    );
  }

  // 2. AUDIO (Galaxy Buds)
  if (device.category === 'audio') {
    return (
      <div className={`relative flex items-center justify-center p-2 ${scaleClasses[size]}`}>
        <svg viewBox="0 0 200 240" className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]" aria-label={device.name}>
          <defs>
            <linearGradient id={`budsCase-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
              <stop offset="40%" stopColor={activeColor} />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>
            <linearGradient id={`bladeLight-${device.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00e5ff" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Charging Cradle Base */}
          <rect x="35" y="70" width="130" height="110" rx="35" fill={`url(#budsCase-${device.id})`} stroke="#333845" strokeWidth="2" />
          {/* Transparent Cover Outline */}
          <rect x="45" y="55" width="110" height="45" rx="20" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          {/* Left Earbud */}
          <g transform="translate(62, 85)">
            <circle cx="15" cy="15" r="14" fill="#1a1e28" stroke="#475569" strokeWidth="1.5" />
            <rect x="11" y="26" width="8" height="35" rx="3" fill="#2d3342" />
            <rect x="14" y="28" width="2" height="30" rx="1" fill={`url(#bladeLight-${device.id})`} />
          </g>

          {/* Right Earbud */}
          <g transform="translate(108, 85)">
            <circle cx="15" cy="15" r="14" fill="#1a1e28" stroke="#475569" strokeWidth="1.5" />
            <rect x="11" y="26" width="8" height="35" rx="3" fill="#2d3342" />
            <rect x="14" y="28" width="2" height="30" rx="1" fill={`url(#bladeLight-${device.id})`} />
          </g>

          {/* LED Indicator */}
          <circle cx="100" cy="155" r="2.5" fill="#10b981" />
        </svg>
      </div>
    );
  }

  // 3. TABLETS (Galaxy Tab S & A)
  if (device.category === 'tablets') {
    return (
      <div className={`relative flex items-center justify-center p-2 ${scaleClasses[size]}`}>
        <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]" aria-label={device.name}>
          <defs>
            <linearGradient id={`tabGrad-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.2" />
              <stop offset="50%" stopColor={activeColor} />
              <stop offset="100%" stopColor="#0a0c10" />
            </linearGradient>
            <linearGradient id={`tabScreen-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#080e1a" />
              <stop offset="50%" stopColor="#0d1b2a" />
              <stop offset="100%" stopColor="#050811" />
            </linearGradient>
          </defs>

          {/* Tablet Body Frame */}
          <rect x="10" y="10" width="220" height="160" rx="14" fill={`url(#tabGrad-${device.id})`} stroke="#3b4252" strokeWidth="2" />

          {/* Screen Display */}
          <rect x="18" y="18" width="204" height="144" rx="8" fill={`url(#tabScreen-${device.id})`} />

          {/* Subtle wallpaper wave */}
          <path d="M 20 120 Q 90 70 150 110 T 220 80 L 220 160 L 20 160 Z" fill="rgba(0, 229, 255, 0.08)" />

          {/* Front Camera notch or bezel dot */}
          <circle cx="120" cy="14" r="2" fill="#000000" stroke="#333" strokeWidth="0.5" />

          {/* S Pen magnetic strip indicator on back or side */}
          <rect x="226" y="55" width="2" height="70" rx="1" fill="#00e5ff" opacity="0.6" />
        </svg>
      </div>
    );
  }

  // 4. LAPTOPS (Galaxy Book)
  if (device.category === 'laptops') {
    return (
      <div className={`relative flex items-center justify-center p-2 ${scaleClasses[size]}`}>
        <svg viewBox="0 0 240 180" className="w-full h-full filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]" aria-label={device.name}>
          <defs>
            <linearGradient id={`bookLid-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e2430" />
              <stop offset="100%" stopColor={activeColor} />
            </linearGradient>
          </defs>

          {/* Laptop Open Screen */}
          <rect x="25" y="15" width="190" height="120" rx="8" fill="#0a0d14" stroke="#475569" strokeWidth="2" />
          <rect x="31" y="21" width="178" height="108" rx="4" fill="#04060a" />

          {/* Wallpaper Glow */}
          <circle cx="120" cy="75" r="45" fill="rgba(0, 229, 255, 0.15)" filter="blur(10px)" />
          <text x="120" y="80" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" letterSpacing="1">
            Galaxy Book
          </text>

          {/* Laptop Base / Keyboard Deck */}
          <polygon points="10,165 25,135 215,135 230,165" fill={`url(#bookLid-${device.id})`} stroke="#333845" strokeWidth="1.5" />
          {/* Trackpad */}
          <rect x="95" y="148" width="50" height="14" rx="2" fill="rgba(255,255,255,0.08)" />
          {/* Subtle hinge */}
          <rect x="85" y="133" width="70" height="4" rx="2" fill="#1e293b" />
        </svg>
      </div>
    );
  }

  // 5. PHONES (Default: Galaxy S, Z, A)
  const isFold = device.series === 'Galaxy Z' && device.id.includes('fold');
  const isFlip = device.series === 'Galaxy Z' && device.id.includes('flip');
  const isUltra = device.name.includes('Ultra');

  return (
    <div className={`relative flex items-center justify-center p-2 ${scaleClasses[size]}`}>
      <svg viewBox="0 0 160 280" className="w-full h-full filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.7)]" aria-label={device.name}>
        <defs>
          <linearGradient id={`phoneBody-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="35%" stopColor={activeColor} />
            <stop offset="100%" stopColor="#08080a" />
          </linearGradient>

          <linearGradient id={`screenGrad-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#09101c" />
            <stop offset="50%" stopColor="#0e1726" />
            <stop offset="100%" stopColor="#05070c" />
          </linearGradient>

          <linearGradient id={`lensGrad-${device.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="50%" stopColor="#0284c7" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {showBack ? (
          // BACK VIEW (Camera Island + Metallic Chassis)
          <g>
            {/* Phone Chassis */}
            <rect
              x="12"
              y="10"
              width={isFold ? "142" : "136"}
              height="260"
              rx={isUltra ? "14" : "28"}
              fill={`url(#phoneBody-${device.id})`}
              stroke="#404654"
              strokeWidth="2.5"
            />

            {/* Camera Floating Rings (Samsung Signature Design) */}
            <g transform="translate(26, 26)">
              {/* Lens 1 (Main Wide) */}
              <circle cx="16" cy="18" r="13" fill="#0f141f" stroke="#64748b" strokeWidth="2.5" />
              <circle cx="16" cy="18" r="7" fill={`url(#lensGrad-${device.id})`} />
              <circle cx="14" cy="16" r="2" fill="#ffffff" opacity="0.6" />

              {/* Lens 2 (Ultra Wide) */}
              <circle cx="16" cy="50" r="13" fill="#0f141f" stroke="#64748b" strokeWidth="2.5" />
              <circle cx="16" cy="50" r="7" fill={`url(#lensGrad-${device.id})`} />

              {/* Lens 3 (Telephoto) */}
              <circle cx="16" cy="82" r="13" fill="#0f141f" stroke="#64748b" strokeWidth="2.5" />
              <circle cx="16" cy="82" r="7" fill={`url(#lensGrad-${device.id})`} />

              {/* Ultra Sensors / Flash Column */}
              {isUltra && (
                <>
                  <circle cx="44" cy="24" r="5" fill="#facc15" stroke="#333" strokeWidth="1" /> {/* LED Flash */}
                  <circle cx="44" cy="50" r="8" fill="#0f141f" stroke="#64748b" strokeWidth="2" /> {/* Laser AF */}
                  <circle cx="44" cy="76" r="8" fill="#0f141f" stroke="#64748b" strokeWidth="2" /> {/* 2nd Tele */}
                </>
              )}
            </g>

            {/* Subtle Wordmark or model line */}
            <text x="80" y="240" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="9" letterSpacing="2" fontFamily="sans-serif">
              GALAXY
            </text>
          </g>
        ) : (
          // FRONT VIEW (Bezel + Screen Display)
          <g>
            {/* Outer Frame */}
            <rect
              x="12"
              y="10"
              width={isFold ? "142" : "136"}
              height="260"
              rx={isUltra ? "14" : "28"}
              fill={`url(#phoneBody-${device.id})`}
              stroke="#383e4c"
              strokeWidth="2.5"
            />

            {/* Inner Display Canvas */}
            <rect
              x="16"
              y="14"
              width={isFold ? "134" : "128"}
              height="252"
              rx={isUltra ? "10" : "24"}
              fill={`url(#screenGrad-${device.id})`}
            />

            {/* Dynamic Ambient Glow inside display */}
            <circle cx="80" cy="140" r="45" fill={activeColor} opacity="0.18" filter="blur(16px)" />

            {/* Center Punch Hole Selfie Camera */}
            <circle cx="80" cy="24" r="3.2" fill="#000000" stroke="#1f242e" strokeWidth="1" />
            <circle cx="79.5" cy="23.5" r="0.8" fill="#38bdf8" opacity="0.8" />

            {/* Status & Clock Minimal Preview */}
            <text x="80" y="75" textAnchor="middle" fill="#ffffff" fontSize="20" fontWeight="600" fontFamily="sans-serif">
              10:08
            </text>
            <text x="80" y="92" textAnchor="middle" fill="#94a3b8" fontSize="9" letterSpacing="0.5">
              Mon, Oct 19
            </text>

            {/* Subtle Fingerprint Sensor Glyph */}
            <circle cx="80" cy="210" r="10" fill="none" stroke="rgba(0, 229, 255, 0.3)" strokeDasharray="3 3" strokeWidth="1" />

            {/* Bottom Gesture Bar */}
            <rect x="62" y="258" width="36" height="2" rx="1" fill="#64748b" />

            {/* Flip fold crease line or S Pen indicator */}
            {isFlip && (
              <line x1="16" y1="140" x2="144" y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
            )}
          </g>
        )}
      </svg>
    </div>
  );
};
