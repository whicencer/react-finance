import React from 'react';
import { useAwayClick } from '../../../../app/hooks/useAwayClick';
import { DropdownButton } from '../dropdown.styles';
import { ContextMenuStyles } from './contextMenu.styles';
import { ContextMenuPropsType } from './contextMenu.types';

const ContextMenu: React.FC<ContextMenuPropsType> = ({ dropdownList, x, y, isOpen, setIsOpen }) => {
  useAwayClick(() => setIsOpen(false));

  if (!isOpen) {
    return null;
  }
  
  return (
    <ContextMenuStyles isActive={true} x={x} y={y}>
      {
        dropdownList.map(( { text, onClick } , index) => {
          return (
            <DropdownButton
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                onClick();
              }}
              key={index}
            >{text}</DropdownButton>
          );
        })
      }
    </ContextMenuStyles>
  );
};

export default ContextMenu;