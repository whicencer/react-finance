/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  placeholder: string;
  value?: string;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onBlur?: (e: any) => void;
  type?: string;
  style?: any;
  pattern?: string;
  className?: string;
}

const Input: React.FC<IInputProps> = ({ className, onChange, pattern, placeholder, value, type, onBlur, style, onKeyDown }) => {
  return (
    <input
      className={`${styles.input} ${className}`}
      type={type || 'text'}
      value={value}
      pattern={pattern}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && onKeyDown) {
          onKeyDown(event);
        }
      }}
      onBlur={onBlur}
      style={style}
    />
  );
};

export default Input;