import { getAuth } from 'firebase/auth';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { ITransaction } from '@typings/ITransaction';

export const addTransactionDB = (data: ITransaction, currentBalance: number) => {
  const { currentUser } = getAuth();
  const firestore = getFirestore();
  
  if (data.status === 'expense' && currentBalance < data.sum) {
    throw new Error('Not enough money');
  } else {
    const resultSum = data.status === 'income' ? currentBalance + data.sum : currentBalance - data.sum;
    setDoc(doc(firestore, `user_${currentUser?.uid}`, `cards_${data.balance}`), { balance: resultSum }, { merge: true });
    setDoc(doc(firestore, `user_${currentUser?.uid}`, `transactions_${data.id}`), data);
  }
};