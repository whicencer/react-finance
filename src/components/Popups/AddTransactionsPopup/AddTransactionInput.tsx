import React from 'react';

interface IProps {
  label: string;
  children: React.ReactElement;
}

export const AddTransactionInput: React.FC<IProps> = ({ label, children }) => {
  return (
    <>
      <label>{ label }</label>
      { children }
      <br />
    </>
  );
};