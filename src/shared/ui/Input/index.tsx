/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholder: string;
  value?: string;
  onChange: (e: any) => void;
  onBlur?: (e: any) => void;
  type?: string;
  style?: any;
  pattern?: string;
  theme?: 'dark' | 'light';
}

const Input: React.FC<IInputProps> = ({ onChange, pattern, placeholder, value, type, onBlur, style, theme = 'dark' }) => {
  return (
    <input
      className={theme === 'dark' ? styles.input+' '+styles.dark : styles.input}
      type={type || 'text'}
      value={value}
      pattern={pattern}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      style={style}
    />
  );
};

export default Input;