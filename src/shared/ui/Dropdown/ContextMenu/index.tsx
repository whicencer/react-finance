import React from 'react';
import { DropdownButton } from '../dropdown.styles';
import { ContextMenuStyles } from './contextMenu.styles';
import { ContextMenuPropsType } from './contextMenu.types';

const ContextMenu: React.FC<ContextMenuPropsType> = ({ dropdownList, isActive, x, y }) => {
  return (
    <ContextMenuStyles x={x} y={y} isActive={isActive}>
      {
        dropdownList.map(( { text, onClick } , index) => {
          return <DropdownButton onClick={onClick} key={index}>{text}</DropdownButton>;
        })
      }
    </ContextMenuStyles>
  );
};

export default ContextMenu;