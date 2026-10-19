export interface FeatureItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  tagline: string;
  description: string;
  corePillars: { title: string; explanation: string }[];
  supportedSeries: string[];
}

export const featuresList: FeatureItem[] = [
  {
    id: 'galaxy-ai',
    title: 'Galaxy AI',
    subtitle: 'Everyday Intelligence Built In',
    badge: 'Intelligence',
    tagline: 'Practical on-device and cloud assistance that breaks down communication and creativity barriers.',
    description: 'Galaxy AI is a cohesive suite of generative and computational machine learning capabilities integrated directly into system apps. It translates voice calls in real time, formats unstructured notes, generates contextual message replies, and edits photos with generative fills.',
    corePillars: [
      {
        title: 'Circle to Search with Google',
        explanation: 'Long-press the home bar and circle, highlight, or tap any image, video, or text on your screen to trigger instant Google search results without app switching.',
      },
      {
        title: 'Live Translate & Interpreter',
        explanation: 'Two-way voice and text translations for phone calls in real time directly on your device, keeping conversations private without third-party translation servers.',
      },
      {
        title: 'Generative Photo Edit',
        explanation: 'Straighten crooked horizons while AI fills in the missing background edges, or move, resize, and remove unwanted people and objects with realistic inpainting.',
      },
      {
        title: 'Note & Transcript Assist',
        explanation: 'Auto-summarize long meeting recordings with speaker attribution, auto-format raw handwriting into organized bullet points, and check spelling.',
      },
    ],
    supportedSeries: ['Galaxy S26 / S25 / S24', 'Galaxy Z Fold6 / Z Flip6', 'Galaxy Tab S10 Series', 'Galaxy Book4 Series'],
  },
  {
    id: 'one-ui',
    title: 'One UI',
    subtitle: 'Comfortable, Human-Centered Software',
    badge: 'User Interface',
    tagline: 'Designed from the ground up for one-handed reachability, visual calm, and smooth fluid motion.',
    description: 'One UI organizes Android around natural hand posture. Viewing areas are positioned near the top of the screen while interactive buttons and controls rest within thumb reach near the bottom. Clean typography, customizable lock screens, and smooth adaptive animations make daily navigation intuitive.',
    corePillars: [
      {
        title: 'Thumb-Friendly Reachability',
        explanation: 'Key interaction controls are placed in the lower half of the screen so you can comfortably navigate large 6.9-inch screens with one hand.',
      },
      {
        title: 'Modes & Routines',
        explanation: 'Automate device behavior based on location, time, or activity—switch to Do Not Disturb at work, launch Spotify in the car, or dim blue light before sleep.',
      },
      {
        title: 'Fluid Animations & Widgets',
        explanation: 'Predictive back gestures, physics-based app launches, and stacked interactive widgets keep the interface feeling responsive and alive.',
      },
    ],
    supportedSeries: ['Galaxy S Series', 'Galaxy Z Series', 'Galaxy A Series', 'Galaxy Tab Series'],
  },
  {
    id: 'camera-modes',
    title: 'ProVisual Camera & Nightography',
    subtitle: 'From Optical Precision to Low-Light Magic',
    badge: 'Optics & ISP',
    tagline: 'Hardware multi-sensor systems boosted by multi-frame computational RAW processing.',
    description: 'Samsung camera systems combine ultra-high-resolution sensors (up to 200MP) with AI-enhanced Image Signal Processors (ISP). Nightography analyzes multiple exposures simultaneously to eliminate grain in low-light environments, while Quad Telephoto delivers lossless optical clarity across zoom levels.',
    corePillars: [
      {
        title: 'Nightography Video & Photo',
        explanation: 'Multi-frame processing merges 16 pixels into one large ultra-light receptor, capturing crisp, noise-free details in dark concerts or moonlit streets.',
      },
      {
        title: 'Expert RAW & Astrophotography',
        explanation: 'Capture uncompressed 16-bit DNG files with full manual shutter speed, ISO, and white balance control, plus Sky Guide star tracking for celestial timelapses.',
      },
      {
        title: 'ProVisual AI Engine',
        explanation: 'Recognizes subjects, facial features, skin tones, and texture boundaries to fine-tune sharpness and color balance naturally without synthetic over-sharpening.',
      },
    ],
    supportedSeries: ['Galaxy S26 Ultra', 'Galaxy S25 / S24 Series', 'Galaxy Z Fold6'],
  },
  {
    id: 'samsung-dex',
    title: 'Samsung DeX',
    subtitle: 'Turn Your Phone into a Desktop Computer',
    badge: 'Productivity',
    tagline: 'Connect a monitor, mouse, and keyboard to work in a full multi-window desktop interface.',
    description: 'Samsung DeX bridges mobile and workstation computing. When connected to an external display, television, or PC via HDMI or wireless Miracast, your Galaxy device powers a complete desktop interface with resizable windows, system tray, right-click context menus, and keyboard shortcuts.',
    corePillars: [
      {
        title: 'True Windowed Multitasking',
        explanation: 'Open multiple documents, browser tabs, and communication apps simultaneously in resizable floating windows just like a Windows or Mac PC.',
      },
      {
        title: 'Standalone Tablet DeX',
        explanation: 'On Galaxy Tab S devices, DeX can be toggled directly on the tablet screen without an external monitor, turning the tablet into an ultra-portable laptop.',
      },
      {
        title: 'Phone as Trackpad',
        explanation: 'If you do not have a physical mouse connected, your smartphone screen transforms into a multitouch gesture trackpad with virtual keyboard support.',
      },
    ],
    supportedSeries: ['Galaxy S Series (S26, S24)', 'Galaxy Z Fold Series', 'Galaxy Tab S Series'],
  },
  {
    id: 'knox-security',
    title: 'Samsung Knox Security & Knox Vault',
    subtitle: 'Defense-Grade Hardware and Software Protection',
    badge: 'Security',
    tagline: 'Multi-layered security rooted directly into hardware silicon to protect private keys and biometrics.',
    description: 'Samsung Knox protects Galaxy devices from the moment they power on. Knox Vault isolates your most sensitive credentials—PINs, passwords, cryptographic keys, and biometrics—in a tamper-resistant processor and secure memory physically separated from the main Android OS.',
    corePillars: [
      {
        title: 'Hardware-Isolated Knox Vault',
        explanation: 'Physical shielding against voltage glitching, temperature attacks, laser inspection, and side-channel sniffing by keeping keys in dedicated silicon.',
      },
      {
        title: 'Real-Time Kernel Protection',
        explanation: 'Detects unauthorized modifications to the OS kernel and locks out compromised processes before malicious apps can access system data.',
      },
      {
        title: 'Secure Folder',
        explanation: 'An encrypted private partition within your device to store sensitive banking apps, private photos, and personal documents behind biometric authentication.',
      },
    ],
    supportedSeries: ['Galaxy S Series', 'Galaxy Z Series', 'Galaxy A55 / A35', 'Galaxy Tab S Series', 'Galaxy Book Series'],
  },
  {
    id: 's-pen',
    title: 'S Pen Precision',
    subtitle: 'Natural Ink with Electromagnetic Resonance',
    badge: 'Creativity',
    tagline: '4,096 levels of pressure sensitivity with zero battery charging required for writing.',
    description: 'The S Pen uses Wacom Electromagnetic Resonance (EMR) technology, meaning it never needs charging for writing, sketching, or hovering. With ultra-low latency, writing on the display mimics the tactile resistance and sound of physical pen on paper.',
    corePillars: [
      {
        title: 'Ultra-Low Latency Response',
        explanation: 'Near-instantaneous ink rendering follows the stylus tip naturally with virtually zero perceptible lag.',
      },
      {
        title: 'Screen-Off Memo',
        explanation: 'Jot down sudden thoughts or phone numbers immediately by popping out the S Pen and writing directly on the dark screen without unlocking your phone.',
      },
      {
        title: 'Air Actions & Remote Shutter',
        explanation: 'Bluetooth LE models let you click the S Pen button to snap group photos from afar or flick gestures in the air to switch slides and adjust volume.',
      },
    ],
    supportedSeries: ['Galaxy S26 Ultra', 'Galaxy S24 Ultra', 'Galaxy Z Fold6 (Fold Edition)', 'Galaxy Tab S10 Series', 'Galaxy Book4 Pro 360'],
  },
];
