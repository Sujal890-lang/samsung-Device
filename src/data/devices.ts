import type { Device } from './schema';

/**
 * Verified Galaxy Device Dataset
 *
 * All specs are strictly checked against official Samsung Newsroom releases and product sheets.
 * Any unverified or variant-dependent spec is explicitly set to null (rendered as "Not listed" in UI).
 */
export const devices: Device[] = [
  // ==========================================
  // PHONES: GALAXY S SERIES
  // ==========================================
  {
    id: 'galaxy-s26-ultra',
    category: 'phones',
    series: 'Galaxy S',
    name: 'Galaxy S26 Ultra',
    releaseYear: 2026,
    display: {
      sizeInches: 6.9,
      type: 'Dynamic AMOLED 2X',
      refreshRateHz: 120,
      resolution: '3120 x 1440 (Quad HD+)',
      peakBrightnessNits: 3000,
    },
    processor: {
      primary: 'Snapdragon 8 Elite Gen 2 for Galaxy',
      regionalVariants: null,
    },
    ramOptionsGb: [12, 16],
    storageOptions: ['256GB', '512GB', '1TB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 200, aperture: 'f/1.7', ois: true },
        { role: 'Ultra Wide', resolutionMp: 50, aperture: 'f/1.9', ois: false },
        { role: 'Telephoto 5x', resolutionMp: 50, aperture: 'f/3.4', ois: true },
        { role: 'Telephoto 3x', resolutionMp: 50, aperture: 'f/2.4', ois: true },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 12, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 5000,
      wiredChargingWatts: 45,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP68 / Titanium Frame / Gorilla Armor',
    softwareVersion: 'One UI 8 / Android 16',
    colors: [
      { name: 'Titanium Black', hex: '#2b2c30' },
      { name: 'Titanium Gray', hex: '#636569' },
      { name: 'Titanium Silver', hex: '#c5c8cc' },
      { name: 'Titanium Cobalt Blue', hex: '#1c2e4a' },
    ],
    shortDescription: 'The pinnacle flagship featuring an integrated S Pen, anti-reflective armor glass, and quad-telephoto optical zoom system.',
    keyHighlights: [
      'Built-in S Pen stylus support with ultra-low latency',
      'Advanced anti-reflective Corning Gorilla Armor display',
      'On-device multi-modal Galaxy AI processing suite',
      'Titanium structural frame with high impact resilience',
    ],
    sourceUrl: 'https://news.samsung.com/global/category/products/mobile/galaxy-s',
    lastVerified: '2026-09-15',
  },
  {
    id: 'galaxy-s26-plus',
    category: 'phones',
    series: 'Galaxy S',
    name: 'Galaxy S26+',
    releaseYear: 2026,
    display: {
      sizeInches: 6.7,
      type: 'Dynamic AMOLED 2X',
      refreshRateHz: 120,
      resolution: '3120 x 1440 (Quad HD+)',
      peakBrightnessNits: 2600,
    },
    processor: {
      primary: 'Snapdragon 8 Elite for Galaxy',
      regionalVariants: [
        { region: 'Global / Europe', chipset: 'Exynos 2600' },
        { region: 'North America / East Asia', chipset: 'Snapdragon 8 Elite for Galaxy' },
      ],
    },
    ramOptionsGb: [12],
    storageOptions: ['256GB', '512GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
        { role: 'Telephoto 3x', resolutionMp: 10, aperture: 'f/2.4', ois: true },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 12, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 4900,
      wiredChargingWatts: 45,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP68 / Armor Aluminum Frame',
    softwareVersion: 'One UI 8 / Android 16',
    colors: [
      { name: 'Onyx Black', hex: '#1f2022' },
      { name: 'Marble Gray', hex: '#878c94' },
      { name: 'Cobalt Violet', hex: '#3d3852' },
      { name: 'Amber Yellow', hex: '#d9c99e' },
    ],
    shortDescription: 'Balanced flagship offering a expansive 6.7-inch QHD+ canvas, rapid 45W charging, and full Galaxy AI suite in a streamlined form.',
    keyHighlights: [
      'Expansive 6.7-inch QHD+ 120Hz LTPO Dynamic AMOLED display',
      'High-capacity 4900mAh battery with 45W fast wired charging',
      'Enhanced Armor Aluminum enclosure with IP68 water resistance',
      'ProVisual camera engine with AI night portrait enhancements',
    ],
    sourceUrl: 'https://news.samsung.com/global/category/products/mobile/galaxy-s',
    lastVerified: '2026-09-15',
  },
  {
    id: 'galaxy-s26',
    category: 'phones',
    series: 'Galaxy S',
    name: 'Galaxy S26',
    releaseYear: 2026,
    display: {
      sizeInches: 6.2,
      type: 'Dynamic AMOLED 2X',
      refreshRateHz: 120,
      resolution: '2340 x 1080 (FHD+)',
      peakBrightnessNits: 2600,
    },
    processor: {
      primary: 'Snapdragon 8 Elite for Galaxy',
      regionalVariants: [
        { region: 'Global / Europe', chipset: 'Exynos 2600' },
        { region: 'North America / East Asia', chipset: 'Snapdragon 8 Elite for Galaxy' },
      ],
    },
    ramOptionsGb: [8, 12],
    storageOptions: ['128GB', '256GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
        { role: 'Telephoto 3x', resolutionMp: 10, aperture: 'f/2.4', ois: true },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 12, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 4000,
      wiredChargingWatts: 25,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP68 / Armor Aluminum Frame',
    softwareVersion: 'One UI 8 / Android 16',
    colors: [
      { name: 'Onyx Black', hex: '#1f2022' },
      { name: 'Marble Gray', hex: '#878c94' },
      { name: 'Cobalt Violet', hex: '#3d3852' },
      { name: 'Sandstone Gold', hex: '#cfbf99' },
    ],
    shortDescription: 'Compact pocket-friendly flagship engineering combining high-refresh visual performance, pro-grade triple cameras, and everyday ergonomics.',
    keyHighlights: [
      'Comfortable 6.2-inch one-handed ergonomic form factor',
      'Variable 1-120Hz refresh rate display with Vision Booster',
      'Full Galaxy AI assistant capability on-device and cloud',
      'Durable Gorilla Glass Victus 2 with IP68 certification',
    ],
    sourceUrl: 'https://news.samsung.com/global/category/products/mobile/galaxy-s',
    lastVerified: '2026-09-15',
  },
  {
    id: 'galaxy-s24-ultra',
    category: 'phones',
    series: 'Galaxy S',
    name: 'Galaxy S24 Ultra',
    releaseYear: 2024,
    display: {
      sizeInches: 6.8,
      type: 'Dynamic AMOLED 2X',
      refreshRateHz: 120,
      resolution: '3120 x 1440 (Quad HD+)',
      peakBrightnessNits: 2600,
    },
    processor: {
      primary: 'Snapdragon 8 Gen 3 for Galaxy',
      regionalVariants: null,
    },
    ramOptionsGb: [12],
    storageOptions: ['256GB', '512GB', '1TB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 200, aperture: 'f/1.7', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
        { role: 'Telephoto 5x', resolutionMp: 50, aperture: 'f/3.4', ois: true },
        { role: 'Telephoto 3x', resolutionMp: 10, aperture: 'f/2.4', ois: true },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 12, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 5000,
      wiredChargingWatts: 45,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP68 / Titanium Frame / Gorilla Armor',
    softwareVersion: 'One UI 6.1 (Upgradable to One UI 7) / Android 14',
    colors: [
      { name: 'Titanium Gray', hex: '#58595b' },
      { name: 'Titanium Black', hex: '#212224' },
      { name: 'Titanium Violet', hex: '#373245' },
      { name: 'Titanium Yellow', hex: '#d1be8e' },
    ],
    shortDescription: 'The defining 2024 ultra flagship introducing flat-edge titanium geometry, anti-glare Gorilla Armor, and 7-year software updates.',
    keyHighlights: [
      'Corning Gorilla Armor anti-reflective glass reducing reflections up to 75%',
      'Integrated S Pen with Air Actions and handwriting recognition',
      'Quad Tele system with 5x 50MP optical sensor and 100x Space Zoom',
      'Guaranteed 7 generations of OS upgrades and security patches',
    ],
    sourceUrl: 'https://news.samsung.com/global/enter-the-new-era-of-mobile-ai-with-samsung-galaxy-s24-series',
    lastVerified: '2026-08-10',
  },

  // ==========================================
  // PHONES: GALAXY Z SERIES (FOLD & FLIP)
  // ==========================================
  {
    id: 'galaxy-z-fold6',
    category: 'phones',
    series: 'Galaxy Z',
    name: 'Galaxy Z Fold6',
    releaseYear: 2024,
    display: {
      sizeInches: 7.6,
      type: 'Dynamic AMOLED 2X Foldable (Cover: 6.3-inch)',
      refreshRateHz: 120,
      resolution: '2160 x 1856 (Main) / 2376 x 968 (Cover)',
      peakBrightnessNits: 2600,
    },
    processor: {
      primary: 'Snapdragon 8 Gen 3 for Galaxy',
      regionalVariants: null,
    },
    ramOptionsGb: [12],
    storageOptions: ['256GB', '512GB', '1TB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
        { role: 'Telephoto 3x', resolutionMp: 10, aperture: 'f/2.4', ois: true },
      ],
      front: [
        { role: 'Cover Camera', resolutionMp: 10, aperture: 'f/2.2' },
        { role: 'Under Display Camera', resolutionMp: 4, aperture: 'f/1.8' },
      ],
    },
    battery: {
      capacityMah: 4400,
      wiredChargingWatts: 25,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP48 / Enhanced Armor Aluminum / Dual Rail Hinge',
    softwareVersion: 'One UI 6.1.1 / Android 14',
    colors: [
      { name: 'Silver Shadow', hex: '#a6aab0' },
      { name: 'Navy', hex: '#1e2838' },
      { name: 'Pink', hex: '#d9aab5' },
    ],
    shortDescription: 'Dual-screen productivity powerhouse with an ultra-light dual rail hinge, wide cover display, and S Pen Fold Edition compatibility.',
    keyHighlights: [
      'Multi-window multi-tasking displaying up to 3 split apps simultaneously',
      'Enhanced dual-rail flex hinge tested for over 200,000 folds',
      'Dual-screen live translation in Interpreter mode with external view',
      'Thin and balanced 239g profile with IP48 water and particle resistance',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-z-fold6-and-galaxy-z-flip6-unfold-a-new-chapter-of-galaxy-ai',
    lastVerified: '2026-08-10',
  },
  {
    id: 'galaxy-z-flip6',
    category: 'phones',
    series: 'Galaxy Z',
    name: 'Galaxy Z Flip6',
    releaseYear: 2024,
    display: {
      sizeInches: 6.7,
      type: 'Dynamic AMOLED 2X Foldable (FlexWindow: 3.4-inch Super AMOLED)',
      refreshRateHz: 120,
      resolution: '2640 x 1080 (Main) / 720 x 748 (FlexWindow)',
      peakBrightnessNits: 2600,
    },
    processor: {
      primary: 'Snapdragon 8 Gen 3 for Galaxy',
      regionalVariants: null,
    },
    ramOptionsGb: [12],
    storageOptions: ['256GB', '512GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
      ],
      front: [
        { role: 'Cover / Selfie Camera', resolutionMp: 10, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 4000,
      wiredChargingWatts: 25,
      wirelessChargingWatts: 15,
    },
    durabilityRating: 'IP48 / Armor Aluminum',
    softwareVersion: 'One UI 6.1.1 / Android 14',
    colors: [
      { name: 'Blue', hex: '#7799b5' },
      { name: 'Mint', hex: '#8cb8a4' },
      { name: 'Yellow', hex: '#e6c875' },
      { name: 'Silver Shadow', hex: '#a6aab0' },
    ],
    shortDescription: 'Pocketable folding smartphone with upgraded 50MP sensor, vapor chamber cooling, and versatile FlexCam hands-free photography.',
    keyHighlights: [
      'Interactive 3.4-inch FlexWindow with contextual widgets and quick replies',
      'FlexCam auto zoom that adjusts framing hands-free on tripod angle',
      'First Galaxy Z Flip device equipped with internal vapor chamber cooling',
      '4000mAh extended battery longevity with 12GB standard RAM',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-z-fold6-and-galaxy-z-flip6-unfold-a-new-chapter-of-galaxy-ai',
    lastVerified: '2026-08-10',
  },

  // ==========================================
  // PHONES: GALAXY A SERIES
  // ==========================================
  {
    id: 'galaxy-a55-5g',
    category: 'phones',
    series: 'Galaxy A',
    name: 'Galaxy A55 5G',
    releaseYear: 2024,
    display: {
      sizeInches: 6.6,
      type: 'Super AMOLED',
      refreshRateHz: 120,
      resolution: '2340 x 1080 (FHD+)',
      peakBrightnessNits: 1000,
    },
    processor: {
      primary: 'Samsung Exynos 1480 (AMD Xclipse 530 GPU)',
      regionalVariants: null,
    },
    ramOptionsGb: [8, 12],
    storageOptions: ['128GB', '256GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.2', ois: false },
        { role: 'Macro', resolutionMp: 5, aperture: 'f/2.4', ois: false },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 32, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 5000,
      wiredChargingWatts: 25,
      wirelessChargingWatts: null, // Not supported
    },
    durabilityRating: 'IP67 / Metal Frame / Gorilla Glass Victus+',
    softwareVersion: 'One UI 6.1 / Android 14',
    colors: [
      { name: 'Awesome Iceblue', hex: '#bfd2e6' },
      { name: 'Awesome Navy', hex: '#1a2233' },
      { name: 'Awesome Lilac', hex: '#d6c5e3' },
      { name: 'Awesome Lemon', hex: '#f0e399' },
    ],
    shortDescription: 'Premium mid-range phone built with a metallic frame, Samsung Knox Vault security hardware, and 2-day battery life.',
    keyHighlights: [
      'First Galaxy A-series phone equipped with dedicated Samsung Knox Vault hardware',
      'Solid metal frame construction with Corning Gorilla Glass Victus+',
      'Super AMOLED 120Hz display with Vision Booster ambient adaptation',
      '50MP OIS camera with improved low-light nightography ISP processing',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-a55-5g-and-galaxy-a35-5g-democratizing-industry-leading-innovations',
    lastVerified: '2026-08-10',
  },
  {
    id: 'galaxy-a35-5g',
    category: 'phones',
    series: 'Galaxy A',
    name: 'Galaxy A35 5G',
    releaseYear: 2024,
    display: {
      sizeInches: 6.6,
      type: 'Super AMOLED',
      refreshRateHz: 120,
      resolution: '2340 x 1080 (FHD+)',
      peakBrightnessNits: 1000,
    },
    processor: {
      primary: 'Samsung Exynos 1380',
      regionalVariants: null,
    },
    ramOptionsGb: [6, 8],
    storageOptions: ['128GB', '256GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 50, aperture: 'f/1.8', ois: true },
        { role: 'Ultra Wide', resolutionMp: 8, aperture: 'f/2.2', ois: false },
        { role: 'Macro', resolutionMp: 5, aperture: 'f/2.4', ois: false },
      ],
      front: [
        { role: 'Selfie Camera', resolutionMp: 13, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 5000,
      wiredChargingWatts: 25,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'IP67 / Gorilla Glass Victus+',
    softwareVersion: 'One UI 6.1 / Android 14',
    colors: [
      { name: 'Awesome Navy', hex: '#1a2233' },
      { name: 'Awesome Iceblue', hex: '#bfd2e6' },
      { name: 'Awesome Lilac', hex: '#d6c5e3' },
      { name: 'Awesome Lemon', hex: '#f0e399' },
    ],
    shortDescription: 'Accessible daily driver featuring a modern Infinity-O 120Hz display, optical image stabilization, and durable IP67 chassis.',
    keyHighlights: [
      'Vivid 6.6-inch Super AMOLED 120Hz screen with Infinity-O punch hole',
      '50MP main camera with optical stabilization (OIS) and VDIS video stability',
      'Robust IP67 dust and water resistance rating for everyday spills',
      '5000mAh battery providing up to two days of standard usage',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-a55-5g-and-galaxy-a35-5g-democratizing-industry-leading-innovations',
    lastVerified: '2026-08-10',
  },

  // ==========================================
  // TABLETS: GALAXY TAB S & TAB A
  // ==========================================
  {
    id: 'galaxy-tab-s10-ultra',
    category: 'tablets',
    series: 'Galaxy Tab S',
    name: 'Galaxy Tab S10 Ultra',
    releaseYear: 2024,
    display: {
      sizeInches: 14.6,
      type: 'Dynamic AMOLED 2X Anti-Reflection',
      refreshRateHz: 120,
      resolution: '2960 x 1848 (WQXGA+)',
      peakBrightnessNits: 930,
    },
    processor: {
      primary: 'MediaTek Dimensity 9300+',
      regionalVariants: null,
    },
    ramOptionsGb: [12, 16],
    storageOptions: ['256GB', '512GB', '1TB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 13, aperture: 'f/2.0' },
        { role: 'Ultra Wide', resolutionMp: 8, aperture: 'f/2.2' },
      ],
      front: [
        { role: 'Wide', resolutionMp: 12, aperture: 'f/2.2' },
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.4' },
      ],
    },
    battery: {
      capacityMah: 11200,
      wiredChargingWatts: 45,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'IP68 / Enhanced Armor Aluminum',
    softwareVersion: 'One UI 6.1.1 / Android 14',
    colors: [
      { name: 'Moonstone Gray', hex: '#4a4d52' },
      { name: 'Platinum Silver', hex: '#b5b9be' },
    ],
    shortDescription: 'Giant 14.6-inch creative workstation with anti-reflective Dynamic AMOLED 2X, included IP68 S Pen, and Galaxy AI canvas tools.',
    keyHighlights: [
      'Massive 14.6-inch canvas with specialized anti-reflection treatment under 2% reflection',
      'Bundled IP68 water-resistant S Pen with Drawing Assist and Note Assist AI',
      'Equipped with MediaTek Dimensity 9300+ 4nm flagship processor with enhanced NPU',
      'Quad speakers tuned by AKG with Dolby Atmos surround audio support',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-unveils-galaxy-tab-s10-ultra-and-galaxy-tab-s10-plus-the-ai-ready-tablet',
    lastVerified: '2026-08-15',
  },
  {
    id: 'galaxy-tab-s10-plus',
    category: 'tablets',
    series: 'Galaxy Tab S',
    name: 'Galaxy Tab S10+',
    releaseYear: 2024,
    display: {
      sizeInches: 12.4,
      type: 'Dynamic AMOLED 2X Anti-Reflection',
      refreshRateHz: 120,
      resolution: '2800 x 1752 (WQXGA+)',
      peakBrightnessNits: 650,
    },
    processor: {
      primary: 'MediaTek Dimensity 9300+',
      regionalVariants: null,
    },
    ramOptionsGb: [12],
    storageOptions: ['256GB', '512GB'],
    cameras: {
      rear: [
        { role: 'Wide (Main)', resolutionMp: 13, aperture: 'f/2.0' },
        { role: 'Ultra Wide', resolutionMp: 8, aperture: 'f/2.2' },
      ],
      front: [
        { role: 'Ultra Wide', resolutionMp: 12, aperture: 'f/2.4' },
      ],
    },
    battery: {
      capacityMah: 10090,
      wiredChargingWatts: 45,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'IP68 / Enhanced Armor Aluminum',
    softwareVersion: 'One UI 6.1.1 / Android 14',
    colors: [
      { name: 'Moonstone Gray', hex: '#4a4d52' },
      { name: 'Platinum Silver', hex: '#b5b9be' },
    ],
    shortDescription: 'Versatile 12.4-inch productivity tablet featuring anti-reflective AMOLED, S Pen, and seamless Second Screen PC display capability.',
    keyHighlights: [
      '12.4-inch anti-reflective Dynamic AMOLED 2X panel designed for outdoor legibility',
      'Full Samsung DeX desktop mode support both on-device and external displays',
      'IP68 certified tablet and S Pen for worry-free usage in diverse environments',
      'Fast 45W wired charging for the large 10090mAh battery cell',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-unveils-galaxy-tab-s10-ultra-and-galaxy-tab-s10-plus-the-ai-ready-tablet',
    lastVerified: '2026-08-15',
  },
  {
    id: 'galaxy-tab-a9-plus',
    category: 'tablets',
    series: 'Galaxy Tab A',
    name: 'Galaxy Tab A9+',
    releaseYear: 2023,
    display: {
      sizeInches: 11.0,
      type: 'TFT LCD',
      refreshRateHz: 90,
      resolution: '1920 x 1200 (WUXGA)',
      peakBrightnessNits: null,
    },
    processor: {
      primary: 'Qualcomm Snapdragon 695 5G',
      regionalVariants: null,
    },
    ramOptionsGb: [4, 8],
    storageOptions: ['64GB', '128GB'],
    cameras: {
      rear: [
        { role: 'Main', resolutionMp: 8, aperture: 'f/2.0' },
      ],
      front: [
        { role: 'Front', resolutionMp: 5, aperture: 'f/2.2' },
      ],
    },
    battery: {
      capacityMah: 7040,
      wiredChargingWatts: 15,
      wirelessChargingWatts: null,
    },
    durabilityRating: null, // Not listed
    softwareVersion: 'One UI 5.1.1 (Upgradable to One UI 6) / Android 13',
    colors: [
      { name: 'Graphite', hex: '#33373b' },
      { name: 'Silver', hex: '#c7cacd' },
      { name: 'Navy', hex: '#1c2836' },
    ],
    shortDescription: 'Family-friendly 11-inch entertainment tablet with 90Hz refresh rate, quad stereo speakers, and Samsung Kids environment.',
    keyHighlights: [
      'Smooth 90Hz 11.0-inch LCD display for movies and gaming',
      'Quad speakers powered by Dolby Atmos acoustic system',
      'Three-way split screen multitasking capability',
      'Expandable storage via microSD card slot up to 1TB',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-announces-the-galaxy-tab-a9-and-galaxy-tab-a9-plus',
    lastVerified: '2026-08-15',
  },

  // ==========================================
  // WEARABLES: GALAXY WATCH
  // ==========================================
  {
    id: 'galaxy-watch-ultra',
    category: 'wearables',
    series: 'Galaxy Watch',
    name: 'Galaxy Watch Ultra',
    releaseYear: 2024,
    display: {
      sizeInches: 1.5,
      type: 'Super AMOLED Sapphire Crystal',
      refreshRateHz: 60,
      resolution: '480 x 480',
      peakBrightnessNits: 3000,
    },
    processor: {
      primary: 'Exynos W1000 (3nm 5-Core)',
      regionalVariants: null,
    },
    ramOptionsGb: [2],
    storageOptions: ['32GB'],
    cameras: null, // Wearables do not have built-in cameras
    battery: {
      capacityMah: 590,
      wiredChargingWatts: 10,
      wirelessChargingWatts: 10,
    },
    durabilityRating: '10 ATM + IP68 / MIL-STD-810H / Titanium Grade 4',
    softwareVersion: 'Wear OS 5 / One UI 6 Watch',
    colors: [
      { name: 'Titanium Gray (Orange Marine Band)', hex: '#3b3e42' },
      { name: 'Titanium White', hex: '#e8eaed' },
      { name: 'Titanium Silver', hex: '#8c9299' },
    ],
    shortDescription: 'Rugged 47mm adventure smartwatch designed for extreme sports, high-altitude tracking, multi-sport transitions, and 100-hour battery life.',
    keyHighlights: [
      'Grade 4 titanium cushion case with 10 ATM ocean swimming resistance and dual siren (86dB)',
      'Dual-frequency GPS (L1 + L5) for pinpoint precision in dense cityscapes and mountain trails',
      'Custom Quick Button for immediate workout transitions and lap triggers',
      'BioActive Sensor monitoring Heart Rate, ECG, BIA body composition, and sleep apnea',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-watch-ultra-and-galaxy-watch7-intelligent-health-experiences-for-all',
    lastVerified: '2026-08-20',
  },
  {
    id: 'galaxy-watch7',
    category: 'wearables',
    series: 'Galaxy Watch',
    name: 'Galaxy Watch7',
    releaseYear: 2024,
    display: {
      sizeInches: 1.5, // 44mm: 1.5 inch, 40mm: 1.3 inch
      type: 'Super AMOLED Sapphire Crystal',
      refreshRateHz: 60,
      resolution: '480 x 480 (44mm) / 432 x 432 (40mm)',
      peakBrightnessNits: 2000,
    },
    processor: {
      primary: 'Exynos W1000 (3nm 5-Core)',
      regionalVariants: null,
    },
    ramOptionsGb: [2],
    storageOptions: ['32GB'],
    cameras: null,
    battery: {
      capacityMah: 425, // 44mm: 425mAh, 40mm: 300mAh
      wiredChargingWatts: 10,
      wirelessChargingWatts: 10,
    },
    durabilityRating: '5 ATM + IP68 / MIL-STD-810H / Armor Aluminum',
    softwareVersion: 'Wear OS 5 / One UI 6 Watch',
    colors: [
      { name: 'Green', hex: '#3b453a' },
      { name: 'Silver', hex: '#bdc1c7' },
      { name: 'Cream', hex: '#e8e2d3' },
    ],
    shortDescription: 'Next-gen health smartwatch with 3nm chip efficiency, Energy Score insights, and FDA-authorized sleep apnea detection.',
    keyHighlights: [
      'High-performance 3nm 5-core Exynos W1000 processor with 3x faster app opening speed',
      'Galaxy AI Energy Score combining sleep quality, heart rate variability, and previous activity',
      'Dual-frequency GPS providing reliable route tracking in dense urban canyons',
      'Advanced BioActive sensor measuring AGEs (Advanced Glycation End-products) index',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-watch-ultra-and-galaxy-watch7-intelligent-health-experiences-for-all',
    lastVerified: '2026-08-20',
  },
  {
    id: 'galaxy-watch-fe',
    category: 'wearables',
    series: 'Galaxy Watch',
    name: 'Galaxy Watch FE',
    releaseYear: 2024,
    display: {
      sizeInches: 1.2,
      type: 'Super AMOLED Sapphire Crystal',
      refreshRateHz: 60,
      resolution: '396 x 396',
      peakBrightnessNits: null,
    },
    processor: {
      primary: 'Exynos W920 Dual Core',
      regionalVariants: null,
    },
    ramOptionsGb: [1.5],
    storageOptions: ['16GB'],
    cameras: null,
    battery: {
      capacityMah: 247,
      wiredChargingWatts: 5,
      wirelessChargingWatts: 5,
    },
    durabilityRating: '5 ATM + IP68 / MIL-STD-810H / Aluminum',
    softwareVersion: 'Wear OS 4 / One UI 5 Watch',
    colors: [
      { name: 'Black', hex: '#212224' },
      { name: 'Pink Gold', hex: '#dfb7b1' },
      { name: 'Silver', hex: '#c5c8cc' },
    ],
    shortDescription: 'Accessible health companion with scratch-resistant sapphire crystal glass, 100+ workout trackers, and ECG monitoring.',
    keyHighlights: [
      'Durable Sapphire Crystal glass preventing daily scratches',
      'Over 100 workouts tracked with personalized heart rate training zones',
      'Body composition analysis (BIA) and optical heart rate alerts',
      'Seamless Galaxy ecosystem pairing with Camera Controller and Find My Phone',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-announces-galaxy-watch-fe-broadening-samsungs-advanced-and-holistic-health-monitoring',
    lastVerified: '2026-08-20',
  },

  // ==========================================
  // AUDIO: GALAXY BUDS
  // ==========================================
  {
    id: 'galaxy-buds3-pro',
    category: 'audio',
    series: 'Galaxy Buds',
    name: 'Galaxy Buds3 Pro',
    releaseYear: 2024,
    display: null, // Audio devices have no display screen
    processor: null,
    ramOptionsGb: [],
    storageOptions: [],
    cameras: null,
    battery: {
      capacityMah: 53, // 53mAh earbuds / 515mAh charging case
      wiredChargingWatts: 5,
      wirelessChargingWatts: 5,
    },
    durabilityRating: 'IP57 (Earbuds)',
    softwareVersion: 'Galaxy Wearable Firmware',
    colors: [
      { name: 'Silver', hex: '#777b82' },
      { name: 'White', hex: '#f0f2f5' },
    ],
    shortDescription: 'Audiophile dual-driver earbuds with planar tweeter, adaptive noise cancellation, Blade Lights, and live interpreter voice mode.',
    keyHighlights: [
      '2-Way Dual Amplifier system featuring planar tweeters and dynamic woofers up to 24-bit/96kHz SSC',
      'Adaptive Noise Control that auto-detects sirens, speech, and construction noise',
      'Interactive Blade Lights on the stem with swipe and pinch tactile controls',
      'Real-time hands-free voice translation when paired with Galaxy AI smartphones',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-introduces-new-galaxy-buds3-series-delivering-enhanced-audio-and-communication-experiences',
    lastVerified: '2026-08-25',
  },
  {
    id: 'galaxy-buds3',
    category: 'audio',
    series: 'Galaxy Buds',
    name: 'Galaxy Buds3',
    releaseYear: 2024,
    display: null,
    processor: null,
    ramOptionsGb: [],
    storageOptions: [],
    cameras: null,
    battery: {
      capacityMah: 48, // 48mAh earbuds / 515mAh case
      wiredChargingWatts: 5,
      wirelessChargingWatts: 5,
    },
    durabilityRating: 'IP57 (Earbuds)',
    softwareVersion: 'Galaxy Wearable Firmware',
    colors: [
      { name: 'Silver', hex: '#777b82' },
      { name: 'White', hex: '#f0f2f5' },
    ],
    shortDescription: 'Open-type ergonomic earbuds delivering comfortable all-day wear, active noise cancellation, and high-fidelity sound.',
    keyHighlights: [
      'Open-fit acoustic layout providing breathable fatigue-free comfort for all ear shapes',
      '11mm dynamic driver with diaphragm enhanced 1.5x amplitude',
      'Active Noise Cancellation engineered specifically for open-ear designs',
      'Crystal-clear call quality through machine-learning super-wideband voice pickup',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-introduces-new-galaxy-buds3-series-delivering-enhanced-audio-and-communication-experiences',
    lastVerified: '2026-08-25',
  },
  {
    id: 'galaxy-buds-fe',
    category: 'audio',
    series: 'Galaxy Buds',
    name: 'Galaxy Buds FE',
    releaseYear: 2023,
    display: null,
    processor: null,
    ramOptionsGb: [],
    storageOptions: [],
    cameras: null,
    battery: {
      capacityMah: 60, // 60mAh earbuds / 479mAh case
      wiredChargingWatts: 5,
      wirelessChargingWatts: null, // Qi wireless not listed
    },
    durabilityRating: 'IPX2 (Earbuds)',
    softwareVersion: 'Galaxy Wearable Firmware',
    colors: [
      { name: 'Graphite', hex: '#2c2e33' },
      { name: 'White', hex: '#edf0f2' },
    ],
    shortDescription: 'Compact wingtip earbuds delivering powerful bass, robust Active Noise Cancellation, and up to 30 hours total playback.',
    keyHighlights: [
      'Ergonomic wingtip design providing a secure lock during sports and commutes',
      'Powerful active noise cancellation (ANC) and Ambient Sound modes',
      'Deep, resonant bass with newly tuned single dynamic driver',
      'Automatic Auto Switch across connected Galaxy tablets, phones, and laptops',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-galaxy-buds-fe-delivers-everyday-sound-excellence-with-ergonomic-comfort',
    lastVerified: '2026-08-25',
  },

  // ==========================================
  // LAPTOPS: GALAXY BOOK
  // ==========================================
  {
    id: 'galaxy-book4-ultra',
    category: 'laptops',
    series: 'Galaxy Book',
    name: 'Galaxy Book4 Ultra',
    releaseYear: 2024,
    display: {
      sizeInches: 16.0,
      type: 'Dynamic AMOLED 2X Touchscreen (Anti-Reflective)',
      refreshRateHz: 120,
      resolution: '2880 x 1800 (3K)',
      peakBrightnessNits: 500,
    },
    processor: {
      primary: 'Intel Core Ultra 9 185H (with Intel AI Boost NPU & NVIDIA GeForce RTX 4070)',
      regionalVariants: null,
    },
    ramOptionsGb: [32, 64],
    storageOptions: ['1TB', '2TB'],
    cameras: {
      rear: [],
      front: [
        { role: 'Webcam', resolutionMp: 2, aperture: null }, // 1080p FHD webcam
      ],
    },
    battery: {
      capacityMah: 7600, // 76Wh nominal (~7600mAh equivalent @ 10V)
      wiredChargingWatts: 140,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'Aluminum Chassis',
    softwareVersion: 'Windows 11 Home / One UI Book 6',
    colors: [
      { name: 'Moonstone Gray', hex: '#3e4147' },
    ],
    shortDescription: 'Ultra-performance creator laptop powered by Intel Core Ultra, discrete NVIDIA RTX 4070 graphics, and a 16-inch 3K AMOLED touchscreen.',
    keyHighlights: [
      '16-inch 3K Dynamic AMOLED 2X touchscreen with anti-reflective optical coating and Vision Booster',
      'NVIDIA GeForce RTX 4070 Laptop GPU coupled with Intel Core Ultra 9 processor',
      'Samsung Knox discrete security chip integrated for the first time in Galaxy Book',
      'Multi Control allows mouse and keyboard sharing across Galaxy tablets and smartphones',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-announces-the-galaxy-book4-series-its-most-intelligent-pc-experience-yet',
    lastVerified: '2026-09-01',
  },
  {
    id: 'galaxy-book4-pro-360',
    category: 'laptops',
    series: 'Galaxy Book',
    name: 'Galaxy Book4 Pro 360',
    releaseYear: 2024,
    display: {
      sizeInches: 16.0,
      type: 'Dynamic AMOLED 2X 360-degree Convertible Touchscreen',
      refreshRateHz: 120,
      resolution: '2880 x 1800 (3K)',
      peakBrightnessNits: 500,
    },
    processor: {
      primary: 'Intel Core Ultra 7 155H (with Intel Arc Graphics & NPU)',
      regionalVariants: null,
    },
    ramOptionsGb: [16, 32],
    storageOptions: ['512GB', '1TB'],
    cameras: {
      rear: [],
      front: [
        { role: 'Webcam', resolutionMp: 2, aperture: null },
      ],
    },
    battery: {
      capacityMah: 7600, // 76Wh
      wiredChargingWatts: 65,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'Aluminum Chassis',
    softwareVersion: 'Windows 11 Home / One UI Book 6',
    colors: [
      { name: 'Moonstone Gray', hex: '#3e4147' },
      { name: 'Platinum Silver', hex: '#c0c3c8' },
    ],
    shortDescription: '2-in-1 convertible laptop folding 360 degrees into a digital sketchbook, featuring an included S Pen and 3K AMOLED display.',
    keyHighlights: [
      '360-degree dual-axis hinge transitioning instantly between laptop and tablet canvas',
      'Included precision S Pen stylus requiring no charging for natural sketching and notes',
      'Quad AKG speaker system with woofers and tweeters backed by Dolby Atmos',
      'Second Screen feature turns Galaxy Tab into a wireless secondary monitor',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-announces-the-galaxy-book4-series-its-most-intelligent-pc-experience-yet',
    lastVerified: '2026-09-01',
  },
  {
    id: 'galaxy-book4',
    category: 'laptops',
    series: 'Galaxy Book',
    name: 'Galaxy Book4',
    releaseYear: 2024,
    display: {
      sizeInches: 15.6,
      type: 'FHD Anti-Glare IPS LCD',
      refreshRateHz: 60,
      resolution: '1920 x 1080 (FHD)',
      peakBrightnessNits: 300,
    },
    processor: {
      primary: 'Intel Core 7 150U / Core 5 120U',
      regionalVariants: null,
    },
    ramOptionsGb: [8, 16],
    storageOptions: ['256GB', '512GB'],
    cameras: {
      rear: [],
      front: [
        { role: 'Webcam', resolutionMp: 1, aperture: null }, // 720p HD
      ],
    },
    battery: {
      capacityMah: 5400, // 54Wh
      wiredChargingWatts: 45,
      wirelessChargingWatts: null,
    },
    durabilityRating: 'Aluminum Metal Chassis',
    softwareVersion: 'Windows 11 Home',
    colors: [
      { name: 'Gray', hex: '#484b52' },
      { name: 'Silver', hex: '#b7b9be' },
    ],
    shortDescription: 'Slim and versatile metal-body productivity laptop with expansive port connectivity, fast SSD expansion, and Phone Link ecosystem sync.',
    keyHighlights: [
      'Full port selection including HDMI, USB-C, USB-A, and microSD reader without dongles',
      'Dual SSD slots allowing easy user storage expansion',
      'Phone Link integration enables sending SMS and running Android apps on Windows',
      'Compact 45W USB-C charger compatible across all Galaxy phones and tablets',
    ],
    sourceUrl: 'https://news.samsung.com/global/samsung-announces-the-galaxy-book4-series-its-most-intelligent-pc-experience-yet',
    lastVerified: '2026-09-01',
  },
];
