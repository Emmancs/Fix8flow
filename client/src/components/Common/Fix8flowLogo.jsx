import React from 'react';

import logoUrl from '../../assets/fix8flow-logo.svg';

export const Fix8flowLogo = ({ className = '', textClassName = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`} aria-label="Fix8flow">
      <img src={logoUrl} alt="Fix8flow" className={textClassName} />
    </div>
  );
};
