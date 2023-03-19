import { doc, setDoc, getFirestore } from '@firebase/firestore';
import { getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { ICardData } from '@typings/ICardData';
import { addCard } from '@store/slices/creditCards';

export const useAddCard = () => {
  const dispatch = useDispatch();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const firestore = getFirestore();
  const { currentUser } = getAuth();

  // eslint-disable-next-line no-unused-vars
  return (data: ICardData, resolve: () => void, reject: (error: Error) => void) => {
    const createCardFunction = async () => {
      if (cards.find(card => card.cardName === data.cardName)) {
        throw new Error(`Card with name ${data.cardName} already exists`);
      } else {
        dispatch(addCard(data));
        await setDoc(doc(firestore, `user_${currentUser?.uid}`, `cards_${data.id}`), data);
      }
    };

    createCardFunction()
      .then(resolve)
      .catch(reject);
  };
};