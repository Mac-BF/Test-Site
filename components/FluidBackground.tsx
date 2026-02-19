
import React from 'react';

interface FluidBackgroundProps {
  isNightMode?: boolean;
}

const FluidBackground: React.FC<FluidBackgroundProps> = ({ isNightMode }) => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none transition-colors duration-700">
      {/* Decorative Blobs */}
      <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] organic-blob transition-colors duration-1000 animate-drift rounded-[40%_60%_70%_30%/40%_50%_60%_50%] ${isNightMode ? 'bg-indigo-900/40' : 'bg-rose-200'}`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] organic-blob transition-colors duration-1000 animate-drift-slow rounded-[60%_40%_30%_70%/50%_60%_40%_50%] ${isNightMode ? 'bg-emerald-900/30' : 'bg-emerald-100'}`} />
      <div className={`absolute top-[20%] right-[10%] w-[30%] h-[30%] organic-blob transition-colors duration-1000 animate-drift rounded-[70%_30%_40%_60%/60%_40%_50%_40%] ${isNightMode ? 'bg-purple-900/20' : 'bg-amber-50'}`} />
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.01] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/handmade-paper.png")' }} />
      
      {/* Noise layer */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
      </svg>
    </div>
  );
};

export default FluidBackground;
