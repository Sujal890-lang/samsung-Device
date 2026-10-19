# Changelog

All notable changes and phased milestones for **Galaxy Device Explorer** are documented in this file.

---

## [Phase 1: Phones & Data Architecture] - 2026-10-19

### Added
- **Core Setup**: Scaffolding with Vite, React 19, TypeScript, and Tailwind CSS v4.
- **Data Architecture (`src/data/schema.ts`)**:
  - Strict TypeScript interfaces for `Device`, `DisplaySpec`, `ProcessorSpec`, `CamerasSpec`, and `BatterySpec`.
  - Zero-hallucination data policy: unknown or variant-dependent specifications set to `null` and displayed as "Not listed".
- **Dataset (`src/data/devices.ts`)**:
  - Added current flagship examples: Galaxy S26, Galaxy S26+, and Galaxy S26 Ultra.
  - Added Galaxy S24 Ultra, Galaxy Z Fold6, Galaxy Z Flip6, Galaxy A55 5G, and Galaxy A35 5G.
  - Authentic manufacturer source URLs and verification dates.
- **Data Validation Script (`src/scripts/validate-data.ts`)**:
  - Automated CLI script checking ID uniqueness, kebab-case formatting, valid color hexes, and source URLs.
  - Integrated via `npm run validate:data`.
- **Unit Testing Suite (`tests/`)**:
  - `tests/data-validation.test.ts`: Automated schema and duplicate ID verification.
  - `tests/filtering.test.ts`: Search, category filtering, and sorting unit tests.
- **Design System & Visuals**:
  - Cinematic dark palette (`#07090e`, Electric Cyan `#00e5ff`, glassmorphism backdrop blur).
  - Parametric SVG/CSS device silhouette generator (`DeviceSilhouette.tsx`) with front and back orientation toggle.
  - Color swatch picker (`ColorPicker.tsx`) with instant visual updates.
- **Core Pages**:
  - `DisclaimerBanner.tsx`: Prominent unofficial fan and demo legal announcement.
  - `Header.tsx`: Plain text wordmark ("Galaxy Device Explorer") and comparison counter badge.
  - `HomePage.tsx`: Cinematic hero showcase featuring Galaxy S26 Ultra with interactive flip and color switching.
  - `CatalogPage.tsx`: Live search, category chips, series dropdown, year selector, and multi-option sorting.
  - `DeviceDetailPage.tsx`: Deep-dive spec sheet with grouped sections (Display, Performance, Cameras, Battery, Durability, Software) and official documentation links.

---

## [Phase 2: Tablets, Wearables & Audio] - 2026-10-19

### Added
- **Tablets Architecture**:
  - Added Galaxy Tab S10 Ultra, Galaxy Tab S10+, and Galaxy Tab A9+.
  - Dedicated tablet SVG silhouette rendering with dual camera modules and S Pen magnetic dock.
- **Wearables Architecture**:
  - Added Galaxy Watch Ultra, Galaxy Watch7, and Galaxy Watch FE.
  - Specialized circular cushion case (Ultra) and sapphire dial silhouettes with customizable watch bands.
- **Audio Architecture**:
  - Added Galaxy Buds3 Pro, Galaxy Buds3, and Galaxy Buds FE.
  - Sculpted earbuds silhouette with Blade Lights and charging cradle.
  - Handled absence of screen/camera specs via null attributes safely rendered as "Not listed".

---

## [Phase 3: Laptops & Ecosystem Page] - 2026-10-19

### Added
- **Laptops Architecture**:
  - Added Galaxy Book4 Ultra, Galaxy Book4 Pro 360, and Galaxy Book4.
  - Clamshell laptop silhouette with open 16-inch 3K AMOLED deck and illuminated trackpad.
- **Interactive Ecosystem Diagram (`src/pages/EcosystemPage.tsx`)**:
  - Dynamic visual network connecting Smartphone, Tablet, Laptop, Watch, and Buds.
  - Interactive continuity connections: Quick Share, Second Screen, Multi Control, Samsung DeX, Auto Switch, and SmartThings.
  - Clickable nodes and feature chips detailing practical real-world benefits and hardware roles.
- **Feature Explorer (`src/pages/FeaturesPage.tsx`)**:
  - Plain-language deep dives into Galaxy AI, One UI, ProVisual Camera & Nightography, Samsung DeX, Knox Security & Vault, and S Pen.
  - Visual pillar cards highlighting real-life usage scenarios and supported hardware lines.

---

## [Phase 4: Comparison Tool, Finder Quiz & Polish] - 2026-10-19

### Added
- **Comparison Engine (`src/pages/ComparePage.tsx`, `src/utils/compare.ts`)**:
  - Side-by-side comparison matrix for up to 4 devices across any category.
  - Sticky table header with device thumbnails and individual remove buttons.
  - "Highlight Differences" toggle button badging divergent parameters.
  - Quick device search modal for adding more devices directly into the comparison grid.
  - `tests/comparison.test.ts` unit test suite verifying diff identification.
- **Device Finder Quiz (`src/pages/FinderPage.tsx`, `src/utils/finder.ts`)**:
  - 5-step guided wizard (Budget, Primary Workflow, Screen Size, Portability, Ecosystem Focus).
  - Weighted algorithm generating top 3 personalized device recommendations with compatibility scores and plain-language reasoning.
- **About & Transparency Page (`src/pages/AboutPage.tsx`)**:
  - Comprehensive explanation of unofficial fan project status.
  - Full archive of official data sources, verification methodology, and developer contribution guide.
- **Responsive & Accessibility Polish**:
  - Tested and verified across 375px (mobile), 768px (tablet), 1280px (laptop), and 1920px (ultrawide).
  - WCAG AA high-contrast compliance and keyboard accessibility (`focus-visible`).
  - Strict `prefers-reduced-motion` CSS overrides.
  - Automated production build verification (0 errors, 0 warnings).
