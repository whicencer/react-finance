import { getAuth } from '@firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../app/config/firebase';

export const getCardsFromDB = async () => {
  const user = getAuth();
  const userFromDB = collection(db, `user_${user.currentUser?.uid}`);
  const cardSnapshot = await getDocs(userFromDB);
  const cardsList = cardSnapshot.docs.map(doc => doc.data());

  return cardsList.filter(el => el.id.split('_')[0] === 'card');
};