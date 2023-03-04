/* eslint-disable no-unused-vars */
import { Dispatch } from "react";

export interface ContextMenuPropsType {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
  dropdownList: Array<{ text: string, onClick: (e?: any) => void }>;
  y: number;
  x: number;
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}