import React from 'react';
import { DropdownButton, DropdownStyles } from './dropdown.styles';
import { DropdownPropsType } from './dropdown.types';

const Dropdown: React.FC<DropdownPropsType> = ({ dropdownList, popupActive }) => {
  return (
    <DropdownStyles popupActive={popupActive}>
      {
        dropdownList.map(( { text, onClick } , index) => {
          return <DropdownButton onClick={onClick} key={index}>{text}</DropdownButton>;
        })
      }
    </DropdownStyles>
  );
};

export default Dropdown;