import { doc, setDoc, getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../app/hooks/useTypedSelector';
import { ICardData } from '../../../app/typings/ICardData';
import { addCard } from "../../../store/slices/creditCards";

export const useAddCard = () => {
  const dispatch = useDispatch();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const firestore = getFirestore();
  const { currentUser } = getAuth();

  return async (data: ICardData) => {
    if (cards.find(card => card.cardName === data.cardName)) {
      throw new Error(`Card with name ${data.cardName} already exists`);
    } else {
      dispatch(addCard(data));
      await setDoc(doc(firestore, `user_${currentUser?.uid}`, `cards_${data.id}`), data);
    }
  };
};