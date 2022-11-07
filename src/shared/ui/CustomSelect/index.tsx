import React from 'react';
import { ICustomSelectProps } from './customSelect.types';
import cssStyles from './CustomSelect.module.scss';

export const CustomSelect: React.FC<ICustomSelectProps> = ({ options, value, styles, setAction}) => {
  return (
    <div style={styles} className={cssStyles.customSelect}>
      <select value={value} onChange={(e) => setAction(e.target.value)}>
        {
          options.map((option, key) => {
            return <option key={key} value={option.value}>{option.label}</option>;
          })
        }
      </select>
    </div>
  );
};
