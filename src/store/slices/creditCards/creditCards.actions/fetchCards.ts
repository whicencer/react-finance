import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../../app/config/firebase';
import { ICardData } from '../../../../app/typings/ICardData';

export const fetchCards = createAsyncThunk(
  'creditCards/fetchCards',
  async () => {
    const user = getAuth();
    const userFromDB = collection(db, `user_${user.currentUser?.uid}`);
    const cardSnapshot = await getDocs(userFromDB);
    const cardsList = cardSnapshot.docs.map(doc => doc.data() as ICardData);

    return cardsList.filter(el => el.id.split('_')[0] === 'card');  
  }
);