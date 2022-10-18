import { doc, setDoc, getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { ICardData } from '../../../app/typings/ICardData';
import { addCard } from "../../../store/slices/creditCards";

export const useAddCard = () => {
  const dispatch = useDispatch();
  const firestore = getFirestore();
  const { currentUser } = getAuth();

  return async (data: ICardData) => {
    dispatch(addCard(data));
    await setDoc(doc(firestore, `user_${currentUser?.uid}`, `cards_${data.id}`), data);
  };
};