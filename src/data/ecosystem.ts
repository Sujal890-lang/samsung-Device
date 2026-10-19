export interface EcosystemNode {
  id: string;
  name: string;
  category: 'phone' | 'watch' | 'buds' | 'tablet' | 'laptop';
  icon: string;
  x: number; // percentage in coordinate space 0 - 100
  y: number; // percentage in coordinate space 0 - 100
  description: string;
}

export interface EcosystemConnection {
  id: string;
  fromNodeId: string;
  toNodeId: string;
  featureName: string;
  summary: string;
  detailedExplanation: string;
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'phone',
    name: 'Galaxy Smartphone',
    category: 'phone',
    icon: 'Smartphone',
    x: 50,
    y: 50, // Central hub
    description: 'The core anchor of the Galaxy ecosystem managing calls, connectivity, and centralized AI processing.',
  },
  {
    id: 'tablet',
    name: 'Galaxy Tab',
    category: 'tablet',
    icon: 'Tablet',
    x: 20,
    y: 28,
    description: 'Expansive digital canvas and portable workspace with S Pen and desktop-class multitasking.',
  },
  {
    id: 'laptop',
    name: 'Galaxy Book',
    category: 'laptop',
    icon: 'Laptop',
    x: 80,
    y: 28,
    description: 'High-performance computing station uniting Windows power with native Galaxy device continuity.',
  },
  {
    id: 'watch',
    name: 'Galaxy Watch',
    category: 'watch',
    icon: 'Watch',
    x: 24,
    y: 75,
    description: 'Continuous biometric sensor, fitness companion, and quick wrist controller for your smartphone.',
  },
  {
    id: 'buds',
    name: 'Galaxy Buds',
    category: 'buds',
    icon: 'Headphones',
    x: 76,
    y: 75,
    description: 'Intelligent wireless audio with Auto Switch, noise cancellation, and hands-free voice translation.',
  },
];

export const ecosystemConnections: EcosystemConnection[] = [
  {
    id: 'quick-share',
    fromNodeId: 'phone',
    toNodeId: 'laptop',
    featureName: 'Quick Share',
    summary: 'Ultra-fast direct Wi-Fi and Bluetooth file transfers.',
    detailedExplanation: 'Quick Share enables instant, loss-free transfer of gigabyte-sized 4K videos, full RAW photo albums, and documents between your Galaxy Phone and Galaxy Book without cables or cloud upload delays.',
  },
  {
    id: 'second-screen',
    fromNodeId: 'laptop',
    toNodeId: 'tablet',
    featureName: 'Second Screen',
    summary: 'Turn your Galaxy Tab into a wireless secondary PC monitor.',
    detailedExplanation: 'With Second Screen, your Galaxy Tab becomes an extended high-resolution display for your Galaxy Book laptop with zero cable clutter. You can duplicate windows, spread work across two screens, or use the tablet with the S Pen.',
  },
  {
    id: 'multi-control',
    fromNodeId: 'laptop',
    toNodeId: 'phone',
    featureName: 'Multi Control',
    summary: 'Control your phone and tablet using your laptop keyboard and mouse.',
    detailedExplanation: 'Glide your laptop mouse pointer smoothly across the edge of your screen directly onto your Galaxy smartphone or tablet screen. Drag and drop photos, copy text on one device, and paste it directly on the other.',
  },
  {
    id: 'auto-switch',
    fromNodeId: 'phone',
    toNodeId: 'buds',
    featureName: 'Auto Switch',
    summary: 'Earbuds switch audio seamlessly when receiving a call.',
    detailedExplanation: 'While you are watching a movie or playing audio on your Galaxy Tab or Galaxy Book, your Galaxy Buds automatically shift the Bluetooth connection to your phone when an incoming call arrives, then return automatically when you hang up.',
  },
  {
    id: 'samsung-dex',
    fromNodeId: 'phone',
    toNodeId: 'tablet',
    featureName: 'Samsung DeX',
    summary: 'Desktop-style productivity interface anytime, anywhere.',
    detailedExplanation: 'Samsung DeX transforms your smartphone or tablet interface into a full windowed desktop environment with a taskbar, resizable windows, keyboard shortcuts, and mouse precision.',
  },
  {
    id: 'health-sync',
    fromNodeId: 'watch',
    toNodeId: 'phone',
    featureName: 'Samsung Health & Energy Score',
    summary: 'Real-time biometric data sync and AI health analysis.',
    detailedExplanation: 'Biometrics recorded on your Galaxy Watch (sleep stages, heart rate variability, daily physical exertion, ECG) sync encrypted to Samsung Health on your smartphone, generating an AI Energy Score and personalized daily coaching.',
  },
  {
    id: 'smartthings',
    fromNodeId: 'phone',
    toNodeId: 'watch',
    featureName: 'SmartThings & Camera Controller',
    summary: 'Wrist-mounted smart home automation and camera preview.',
    detailedExplanation: 'Use your Galaxy Watch to preview your phone camera framing remotely and trip the shutter, or control smart home appliances, thermostat routines, and Galaxy SmartTags from SmartThings.',
  },
];
