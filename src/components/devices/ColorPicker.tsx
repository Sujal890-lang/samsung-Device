import React from 'react';
import type { DeviceColor } from '../../data/schema';

interface ColorPickerProps {
  colors: DeviceColor[];
  selectedColorHex: string;
  onSelectColor: (hex: string) => void;
  size?: 'sm' | 'md';
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  colors,
  selectedColorHex,
  onSelectColor,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'w-4 h-4' : 'w-6 h-6';

  return (
    <div className="flex items-center gap-2" role="radiogroup" aria-label="Device colors">
      {colors.map((color) => {
        const isSelected = selectedColorHex.toLowerCase() === color.hex.toLowerCase();
        return (
          <button
            key={color.name}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={color.name}
            title={color.name}
            onClick={(e) => {
              e.stopPropagation();
              onSelectColor(color.hex);
            }}
            className={`rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-cyan-400 ${sizeClasses} ${
              isSelected ? 'scale-125 ring-2 ring-white shadow-lg' : 'hover:scale-110 opacity-80 hover:opacity-100'
            }`}
            style={{ backgroundColor: color.hex, border: '1px solid rgba(255,255,255,0.2)' }}
          />
        );
      })}
    </div>
  );
};
