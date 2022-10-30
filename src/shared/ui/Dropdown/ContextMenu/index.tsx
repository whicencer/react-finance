import React from 'react';
import { DropdownButton } from '../dropdown.styles';
import { ContextMenuStyles } from './contextMenu.styles';
import { ContextMenuPropsType } from './contextMenu.types';

const ContextMenu: React.FC<ContextMenuPropsType> = ({ dropdownList, x, y }) => {
  return (
    <ContextMenuStyles isActive={true} x={x} y={y}>
      {
        dropdownList.map(( { text, onClick } , index) => {
          return <DropdownButton onClick={onClick} key={index}>{text}</DropdownButton>;
        })
      }
    </ContextMenuStyles>
  );
};

export default ContextMenu;