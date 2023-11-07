import React from 'react';
import { DropdownButton, DropdownStyles } from '../dropdown.styles';
import { DropListPropsType } from './droplist.types';

const DropList: React.FC<DropListPropsType> = ({ dropdownList, isActive }) => {
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

export default DropList;