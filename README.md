# Galaxy Device Explorer

> **LEGAL NOTICE & DISCLAIMER**
> **Galaxy Device Explorer** is an unofficial fan and demo project created strictly for educational demonstration, interface engineering, and product exploration. It is **not** affiliated with, associated with, authorized by, sponsored by, or endorsed by **Samsung Electronics Co., Ltd.**
>
> All product names, logos, trademarks, and registered trademarks (including Samsung, Galaxy, One UI, Knox, Samsung DeX, Dynamic AMOLED, and S Pen) are property of their respective owners. Mention and demonstration of these terms are strictly for identification, research, and non-commercial educational review.

---

## 🌟 Overview & Purpose

Galaxy Device Explorer provides a cinematic, modern, high-performance web experience for exploring Samsung's mobile, tablet, wearable, audio, and computing lineup.

Key capabilities include:
- **Zero Hallucination Spec Accuracy**: Specifications are verified against official manufacturer documentation. Unknown or regional parameters are strictly stored as `null` and displayed as **"Not listed"** with neutral badges.
- **Parametric SVG & CSS Silhouette Engine**: Dynamic silhouettes adapt aspect ratios, camera cutouts, watch bezels, and colorways in real time with zero external image dependencies.
- **Side-by-Side Comparison Engine**: Compare up to 4 devices simultaneously with sticky headers and diff highlighting.
- **Interactive Ecosystem Diagram**: A node graph demonstrating cross-device continuity (Quick Share, Second Screen, Multi Control, Samsung DeX, Auto Switch, and SmartThings).
- **Core Technology Deep Dives**: Plain-language explanations of Galaxy AI, One UI, ProVisual Camera, Samsung DeX, Knox Security, and S Pen.
- **5-Step Device Finder Wizard**: Guided matching quiz that scores devices across budget, workflows, screen size, portability, and ecosystem needs.

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (Cinematic dark theme `#07090e`, Electric Cyan `#00E5FF`, glassmorphism blur)
- **Icons**: Lucide React
- **Testing & Quality Assurance**: Vitest & custom validation CLI
- **Accessibility**: Full WCAG AA contrast, keyboard accessibility (`focus-visible`), and `prefers-reduced-motion` compliance

---

## 📂 Project Folder Structure

```
galaxy-device-explorer/
├── public/
│   ├── favicon.svg               # SVG application icon
│   └── devices/                  # Structured image directory for future user photography
│       ├── phones/
│       ├── tablets/
│       ├── wearables/
│       ├── audio/
│       └── laptops/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── DisclaimerBanner.tsx   # Top legal announcement
│   │   │   ├── Header.tsx             # Wordmark, nav links & compare counter
│   │   │   └── Footer.tsx             # Disclaimer, links & verification dates
│   │   └── devices/
│   │       ├── DeviceCard.tsx         # Interactive card with silhouette & color picker
│   │       ├── DeviceSilhouette.tsx   # Parametric SVG/CSS device visualizer
│   │       ├── ColorPicker.tsx        # Accessible color swatch buttons
│   │       └── SpecTable.tsx          # Grouped specs with "Not listed" fallbacks
│   ├── data/
│   │   ├── schema.ts             # Strict TypeScript device contracts
│   │   ├── devices.ts            # Complete typed device dataset (20 verified devices)
│   │   ├── ecosystem.ts          # Cross-device node graph and continuity links
│   │   └── features.ts           # Galaxy AI, One UI, DeX, Knox, Camera, S Pen
│   ├── hooks/
│   │   └── useCompare.ts         # Persistent comparison store (localStorage)
│   ├── pages/
│   │   ├── HomePage.tsx          # Cinematic hero, interactive showcase, category jumps
│   │   ├── CatalogPage.tsx       # Live search, category/series/year filters, sorting
│   │   ├── DeviceDetailPage.tsx  # Dynamic color switcher, full specs, verification links
│   │   ├── ComparePage.tsx       # Side-by-side matrix (up to 4 devices) with diff toggle
│   │   ├── EcosystemPage.tsx     # Interactive SVG node graph with continuity features
│   │   ├── FeaturesPage.tsx      # Plain-language technology deep dives
│   │   ├── FinderPage.tsx        # 5-question recommendation wizard
│   │   └── AboutPage.tsx         # Unofficial notice, sources & contribution guide
│   ├── scripts/
│   │   └── validate-data.ts      # Standalone schema and integrity validator
│   ├── utils/
│   │   ├── compare.ts            # Comparison matrix builder & diff detection
│   │   ├── filter.ts             # Live search, category filtering & multi-field sorting
│   │   ├── finder.ts             # Weighted recommendation algorithm
│   │   └── formatters.ts         # Spec formatters with "Not listed" fallbacks
│   ├── App.tsx                   # Main router shell & accessible view router
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Base theme, glassmorphism & reduced motion styles
├── tests/
│   ├── data-validation.test.ts   # Schema integrity & duplicate ID unit tests
│   ├── filtering.test.ts         # Search, category filter & sort tests
│   └── comparison.test.ts        # Spec diff calculation unit tests
├── package.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── CHANGELOG.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone or navigate to the directory
cd C:\Users\91821\.gemini\antigravity-ide\scratch\galaxy-device-explorer

# Install dependencies
npm install
```

### Available Scripts
| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server at `http://localhost:5173/` |
| `npm run build` | Compiles TypeScript and builds production assets to `dist/` |
| `npm run test` | Executes unit tests via Vitest |
| `npm run validate:data` | Runs strict data validation against `src/data/devices.ts` |
| `npm run preview` | Serves the production build locally |

---

## 📝 How to Add or Update a Device

All device records are maintained in `src/data/devices.ts` and must strictly adhere to the `Device` interface defined in `src/data/schema.ts`.

### 1. Data Schema Fields
Each device object must supply:
- `id`: Unique kebab-case slug (e.g. `'galaxy-s26-ultra'`)
- `category`: `'phones' | 'tablets' | 'wearables' | 'audio' | 'laptops'`
- `series`: `'Galaxy S' | 'Galaxy Z' | 'Galaxy A' | 'Galaxy Tab S' | 'Galaxy Tab A' | 'Galaxy Watch' | 'Galaxy Buds' | 'Galaxy Book'`
- `name`: Full commercial name
- `releaseYear`: Release year as integer
- `display`: `{ sizeInches, type, refreshRateHz, resolution, peakBrightnessNits }` or `null` for audio
- `processor`: `{ primary, regionalVariants }` or `null`
- `ramOptionsGb`: Array of available RAM in GB (e.g. `[12, 16]`)
- `storageOptions`: Array of storage configurations (e.g. `['256GB', '512GB', '1TB']`)
- `cameras`: `{ rear: CameraUnit[], front: CameraUnit[] }` or `null`
- `battery`: `{ capacityMah, wiredChargingWatts, wirelessChargingWatts }` or `null`
- `durabilityRating`: String or `null`
- `softwareVersion`: String or `null`
- `colors`: Array of `{ name: string, hex: string }`
- `shortDescription`: Original descriptive text (no copied promotional marketing copy)
- `keyHighlights`: Array of 4 key bullet points
- `sourceUrl`: Authentic HTTP(S) link retrieved from official manufacturer or newsroom portals
- `lastVerified`: ISO date string (`YYYY-MM-DD`)
- `imagePath`: (Optional) Path to custom user image in `public/devices/...`

### 2. Verification Command
After adding or editing any device record, run:
```bash
npm run validate:data
```
The script will check for duplicate IDs, missing required fields, invalid hex codes, and bad URLs.

---

## 🔍 Data Sources & Verification

All device specifications have been compiled from authentic public press releases and official product spec sheets:
- **Samsung Newsroom Global**: [news.samsung.com/global](https://news.samsung.com/global)
- **Latest Dataset Verification**: `2026-09-15`

---

## 📌 Known Gaps & Future Considerations

1. **User Photography**: The project currently renders pure SVG/CSS parametric silhouettes. Users can drop official photography into `public/devices/` and set `imagePath` in `src/data/devices.ts` without altering component code.
2. **Televisions & Appliances**: Intentionally excluded in accordance with the project scope.
3. **Future Regional Variants**: Regional chipsets and carrier bands for future releases can be added to `processor.regionalVariants` without schema modifications.
