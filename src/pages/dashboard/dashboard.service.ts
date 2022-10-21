import { Dispatch, SetStateAction } from 'react';

export const changeThemePopup = (
    cardId: string,
    setCardThemeActive: Dispatch<SetStateAction<boolean>>,
    setCurrentCardId: Dispatch<SetStateAction<string>>
  ) => {
  setCardThemeActive(true);
  setCurrentCardId(cardId);
};