import React from 'react';
import Select from 'react-select';
import { ICustomSelectProps } from './customSelect.types';

export const CustomSelect: React.FC<ICustomSelectProps> = ({ options, styles, setAction}) => {
  return (
    <div style={{...styles, color: '#000'}}>
      <Select onChange={(e) => setAction(e?.value)} options={options} />
    </div>
  );
};
