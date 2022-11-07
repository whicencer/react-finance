import React, { Dispatch } from "react";

export interface ICardContextMenuProps {
  id: string;
  x: number;
  y: number;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}