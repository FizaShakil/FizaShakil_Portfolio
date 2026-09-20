import React from 'react';

export const ArrowRight = ({ className = 'w-4 h-4' }) => (
  <svg
    className={`${className} arrow-icon`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M4 12h16" />
    <path d="M14 6l6 6-6 6" />
  </svg>
);

export const ArrowLeft = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M20 12H4" />
    <path d="M10 6l-6 6 6 6" />
  </svg>
);

export const ArrowDown = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M12 4v16" />
    <path d="M6 14l6 6 6-6" />
  </svg>
);