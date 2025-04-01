import React from 'react';

const Logo = ({ size = '24px', className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="100" cy="100" r="90" fill="#007AFF" opacity="0.1"/>
      <circle cx="100" cy="100" r="80" stroke="#007AFF" strokeWidth="8" fill="none"/>
      <path d="M60 60 L60 140 L100 140" stroke="#007AFF" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="100" cy="100" r="12" fill="#007AFF"/>
      <line x1="120" y1="60" x2="140" y2="80" stroke="#007AFF" strokeWidth="4" strokeLinecap="round"/>
      <line x1="120" y1="140" x2="140" y2="120" stroke="#007AFF" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
};

export default Logo; 