import React from 'react';
import type { Device } from '../../data/schema';
import { formatDisplay, formatRam, formatStorage, formatValue } from '../../utils/formatters';
import { Smartphone, Cpu, Camera, Battery, Shield, Info } from 'lucide-react';

interface SpecTableProps {
  device: Device;
}

export const SpecTable: React.FC<SpecTableProps> = ({ device }) => {
  const renderValueBadge = (val: string) => {
    if (val === 'Not listed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-medium bg-slate-800/80 text-slate-400 border border-slate-700/50">
          <Info className="w-3 h-3" />
          Not listed
        </span>
      );
    }
    return <span className="text-slate-200 font-medium">{val}</span>;
  };

  const sections = [
    {
      title: 'Display & Visuals',
      icon: Smartphone,
      rows: [
        { label: 'Screen Overview', value: formatDisplay(device.display) },
        { label: 'Display Size', value: device.display?.sizeInches ? `${device.display.sizeInches} inches` : 'Not listed' },
        { label: 'Panel Type', value: formatValue(device.display?.type) },
        { label: 'Refresh Rate', value: device.display?.refreshRateHz ? `${device.display.refreshRateHz} Hz` : 'Not listed' },
        { label: 'Resolution', value: formatValue(device.display?.resolution) },
        { label: 'Peak Brightness', value: device.display?.peakBrightnessNits ? `${device.display.peakBrightnessNits} nits` : 'Not listed' },
      ],
    },
    {
      title: 'Performance & Memory',
      icon: Cpu,
      rows: [
        { label: 'Processor (SoC)', value: formatValue(device.processor?.primary) },
        {
          label: 'Regional Chipsets',
          value: device.processor?.regionalVariants
            ? device.processor.regionalVariants.map((v) => `${v.region}: ${v.chipset}`).join(' | ')
            : 'Not listed',
        },
        { label: 'RAM Configurations', value: formatRam(device.ramOptionsGb) },
        { label: 'Storage Capacities', value: formatStorage(device.storageOptions) },
      ],
    },
    {
      title: 'Camera Optics',
      icon: Camera,
      rows: [
        {
          label: 'Rear Cameras',
          value: device.cameras?.rear && device.cameras.rear.length > 0
            ? device.cameras.rear.map((c) => `${c.role}: ${c.resolutionMp ? c.resolutionMp + 'MP' : 'N/A'}${c.aperture ? ' (' + c.aperture + ')' : ''}${c.ois ? ' OIS' : ''}`).join('\n')
            : 'Not listed',
        },
        {
          label: 'Front Selfie Camera',
          value: device.cameras?.front && device.cameras.front.length > 0
            ? device.cameras.front.map((c) => `${c.role}: ${c.resolutionMp ? c.resolutionMp + 'MP' : 'N/A'}${c.aperture ? ' (' + c.aperture + ')' : ''}`).join(', ')
            : 'Not listed',
        },
      ],
    },
    {
      title: 'Power & Endurance',
      icon: Battery,
      rows: [
        { label: 'Battery Capacity', value: device.battery?.capacityMah ? `${device.battery.capacityMah.toLocaleString()} mAh` : 'Not listed' },
        { label: 'Wired Fast Charging', value: device.battery?.wiredChargingWatts ? `${device.battery.wiredChargingWatts}W` : 'Not listed' },
        { label: 'Wireless Charging', value: device.battery?.wirelessChargingWatts ? `${device.battery.wirelessChargingWatts}W` : 'Not listed' },
      ],
    },
    {
      title: 'Durability & Software',
      icon: Shield,
      rows: [
        { label: 'Durability & Ingress', value: formatValue(device.durabilityRating) },
        { label: 'Software / OS', value: formatValue(device.softwareVersion) },
        { label: 'Release Year', value: device.releaseYear.toString() },
        { label: 'Last Specification Verification', value: device.lastVerified },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => {
        const Icon = section.icon;
        return (
          <div
            key={section.title}
            className="rounded-xl border border-white/[0.08] bg-slate-900/40 p-5 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2.5 mb-4 text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              <Icon className="w-4 h-4" />
              <span>{section.title}</span>
            </div>

            <dl className="divide-y divide-white/[0.05]">
              {section.rows.map((row) => (
                <div key={row.label} className="py-2.5 sm:grid sm:grid-cols-3 sm:gap-4 items-start">
                  <dt className="text-xs sm:text-sm font-medium text-slate-400 mb-1 sm:mb-0">
                    {row.label}
                  </dt>
                  <dd className="sm:col-span-2 text-xs sm:text-sm whitespace-pre-line">
                    {renderValueBadge(row.value)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        );
      })}
    </div>
  );
};
