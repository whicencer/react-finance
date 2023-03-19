import { deleteDoc, doc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { db } from '@config/firebase';
import { useAuth } from '@hooks/useAuth';
import { ITransaction } from '@typings/ITransaction';
import { getTransactionsFromDB } from '@services/transactionsService';
import { deleteCard } from '@store/slices/creditCards';
import { getRandomEmoji } from '@utils/getRandomEmoji';

export const useDeleteCard = (id: string) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const deleteCardCallback = async (e: Event) => {
    e.stopPropagation();
    
    await deleteDoc(doc(db, `user_${user.uid}`, `cards_${id}`));
    dispatch(deleteCard(id));
    getTransactionsFromDB().then((data: ITransaction[]) => {
      const deletingCardTransactions = data.filter((transaction) => transaction.balance === id);
      deletingCardTransactions.map((transaction) => {
        deleteDoc(doc(db, `user_${user.uid}`, `transactions_${transaction.id}`));
      });
    });
    toast.success(`${getRandomEmoji()} Card was successfully deleted`);

    // setConfirmActive(false);
  };

  return deleteCardCallback;
};