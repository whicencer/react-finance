import { getAuth } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { changeCardName } from '@store/slices/creditCards';

export const useChangeCardName = (id: string) => {
  const dispatch = useDispatch();
  const { items: cards } = useTypedSelector(state => state.creditCards.cards);
  const firestore = getFirestore();
  const { currentUser } = getAuth();

  // eslint-disable-next-line no-unused-vars
  return (newName: string, resolve: () => void, reject: (error: Error) => void) => {
    const changeNameFunction = async () => {
      if (cards.find(card => card.cardName === newName)) {
        throw new Error(`Card with name ${newName} already exists`);
      } else if (newName.length <= 0 || newName.length >= 20) {
        throw new Error(`Card name length should be more than 0 and less then 20`);
      } else {
        dispatch(changeCardName({ id, newName }));
        await setDoc(doc(firestore, `user_${currentUser?.uid}`, `cards_${id}`), { cardName: newName }, { merge: true });
      }
    };

    changeNameFunction()
      .then(resolve)
      .catch(reject);
  };
};