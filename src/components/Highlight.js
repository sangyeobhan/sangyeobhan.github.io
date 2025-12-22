import React from 'react';

export default function Highlight({children, color = 'var(--ifm-color-primary)'}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '4px',
        color: '#fff',
        padding: '0.2rem 0.4rem',
        fontWeight: 'bold',
      }}>
      {children}
    </span>
  );
}
