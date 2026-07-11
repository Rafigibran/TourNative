import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-400/10 ${className}`}>
      {/* Yellow background */}
      <div className="absolute inset-0 bg-[#FFD200]" />
      
      {/* SVG content to ensure crisp rendering of text on the yellow background */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 select-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="53%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="'Inter', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontWeight="900"
          fontSize="15px"
          letterSpacing="-0.3px"
        >
          <tspan fill="#0B2265">Tour</tspan>
          <tspan fill="#1E60FF" fontWeight="800">Native</tspan>
        </text>
      </svg>
    </div>
  );
}
