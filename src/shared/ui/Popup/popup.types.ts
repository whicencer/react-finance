import { Dispatch, ReactElement, SetStateAction } from 'react';

export interface IPopupProps {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactElement
}