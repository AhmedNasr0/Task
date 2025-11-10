import React from 'react';
import { Check } from 'lucide-react';

const Checkbox = () => {


  const checkboxStyle = {
    width: '18px',
    height: '18px',
    borderRadius: '3px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid',
    borderColor: '#1F2128',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 0ms',
    flexShrink: 0
  };

  return (
    <div
      style={checkboxStyle}
    >
      <Check size={12} color="#1F2128" />
    </div>
  );
};

export default Checkbox;