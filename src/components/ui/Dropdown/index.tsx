import React from 'react';
import { DropdownButton, DropdownStyles } from './dropdown.styles';
import { DropdownPropsType } from './dropdown.types';

const Dropdown: React.FC<DropdownPropsType> = ({ dropdownList, isActive }) => {
  return (
    <DropdownStyles isActive={isActive}>
      {
        dropdownList.map(( { text, onClick } , index) => {
          return <DropdownButton onClick={onClick} key={index}>{text}</DropdownButton>;
        })
      }
    </DropdownStyles>
  );
};

export default Dropdown;