import { useState, useEffect } from 'react';
import { devices } from './data/devices';
import type { DeviceCategory } from './data/schema';
import { useCompare } from './hooks/useCompare';
import { DisclaimerBanner } from './components/common/DisclaimerBanner';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { DeviceDetailPage } from './pages/DeviceDetailPage';
import { ComparePage } from './pages/ComparePage';
import { EcosystemPage } from './pages/EcosystemPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { FinderPage } from './pages/FinderPage';
import { AboutPage } from './pages/AboutPage';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('galaxy-s26-ultra');
  const [catalogInitialCategory, setCatalogInitialCategory] = useState<DeviceCategory | 'all'>('all');

  const {
    selectedDevices,
    addDevice,
    removeDevice,
    toggleDevice,
    clearAll,
    isSelected,
    notification,
    maxLimit,
  } = useCompare();

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab: string, deviceIdOrCategory?: string) => {
    if (tab === 'detail' && deviceIdOrCategory) {
      setSelectedDeviceId(deviceIdOrCategory);
      setCurrentTab('detail');
    } else if (tab === 'catalog' && deviceIdOrCategory) {
      setCatalogInitialCategory(deviceIdOrCategory as DeviceCategory);
      setCurrentTab('catalog');
    } else {
      if (tab === 'catalog' && !deviceIdOrCategory) {
        setCatalogInitialCategory('all');
      }
      setCurrentTab(tab);
    }
  };

  const selectedDevice =
    devices.find((d) => d.id === selectedDeviceId) || devices[0];
  const flagshipDevice =
    devices.find((d) => d.id === 'galaxy-s26-ultra') || devices[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Legal & Unofficial Disclaimer Announcement Bar */}
      <DisclaimerBanner />

      {/* Primary Accessible Navigation Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        compareCount={selectedDevices.length}
      />

      {/* Toast Notification Banner */}
      {notification && (
        <aside
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-2xl bg-cyan-950/90 border border-cyan-500/50 text-cyan-200 text-xs font-semibold backdrop-blur-md shadow-2xl shadow-cyan-500/20 flex items-center gap-2.5 animate-bounce"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>{notification}</span>
        </aside>
      )}

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            flagshipDevice={flagshipDevice}
            onNavigate={handleNavigate}
            onToggleCompare={toggleDevice}
            isComparing={isSelected(flagshipDevice.id)}
          />
        )}

        {currentTab === 'catalog' && (
          <CatalogPage
            devices={devices}
            initialCategory={catalogInitialCategory}
            onSelectDevice={(device) => {
              setSelectedDeviceId(device.id);
              setCurrentTab('detail');
            }}
            onToggleCompare={toggleDevice}
            isComparing={isSelected}
          />
        )}

        {currentTab === 'detail' && (
          <DeviceDetailPage
            device={selectedDevice}
            onBack={() => setCurrentTab('catalog')}
            onToggleCompare={toggleDevice}
            isComparing={isSelected(selectedDevice.id)}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'compare' && (
          <ComparePage
            selectedDevices={selectedDevices}
            allDevices={devices}
            onRemoveDevice={removeDevice}
            onAddDevice={addDevice}
            onClearAll={clearAll}
            onNavigate={handleNavigate}
            maxLimit={maxLimit}
          />
        )}

        {currentTab === 'ecosystem' && <EcosystemPage />}

        {currentTab === 'features' && <FeaturesPage />}

        {currentTab === 'finder' && (
          <FinderPage
            allDevices={devices}
            onSelectDevice={(device) => {
              setSelectedDeviceId(device.id);
              setCurrentTab('detail');
            }}
            onToggleCompare={toggleDevice}
            isComparing={isSelected}
            onNavigate={handleNavigate}
          />
        )}

        {currentTab === 'about' && <AboutPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
