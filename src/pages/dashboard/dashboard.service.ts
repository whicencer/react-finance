import { getAuth } from '@firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';
import { db } from '../../app/config/firebase';

export const getCardFromDB = async () => {
  const user = getAuth();
  const userFromDB = collection(db, `user_${user.currentUser?.uid}`);
  const cardSnapshot = await getDocs(userFromDB);
  const cardsList = cardSnapshot.docs.map(doc => doc.data());

  return cardsList.filter(el => el.id.split('_')[0] === 'card');
};

export const changeThemePopup = (
    cardId: string,
    setCardThemeActive: Dispatch<SetStateAction<boolean>>,
    setCurrentCardId: Dispatch<SetStateAction<string>>
  ) => {
  setCardThemeActive(true);
  setCurrentCardId(cardId);
};