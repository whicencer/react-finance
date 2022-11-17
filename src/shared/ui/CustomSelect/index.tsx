import React from 'react';
import { ICustomSelectProps } from './customSelect.types';
import cssStyles from './CustomSelect.module.scss';

export const CustomSelect: React.FC<ICustomSelectProps> = ({ options, value, styles, setAction, theme = 'dark'}) => {
  const selectTheme = theme === 'dark' ? cssStyles.customSelect+" "+cssStyles.dark : cssStyles.customSelect;

  return (
    <div style={styles} className={selectTheme}>
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
