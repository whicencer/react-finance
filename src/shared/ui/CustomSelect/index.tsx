import React from 'react';
import Select from 'react-select';
import { ICustomSelectProps } from './customSelect.types';

export const CustomSelect: React.FC<ICustomSelectProps> = ({ options, styles, setAction, disabled}) => {
  return (
    <div style={{...styles, color: '#000'}}>
      <Select isDisabled={disabled} onChange={(e) => setAction(e?.value)} options={options} />
    </div>
  );
};
