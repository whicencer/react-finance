import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../app/config/firebase";

export const getTransactionsFromDB = async () => {
  const user = getAuth();
  const userFromDB = collection(db, `user_${user.currentUser?.uid}`);
  const transactionSnapshot = await getDocs(userFromDB);
  const transactionsList = transactionSnapshot.docs.map(doc => doc.data());

  const transactions = transactionsList.filter(el => el.id.split('_')[0] === 'transaction');
  
  return transactions.map(transaction => {
    return {
      balance: transaction.balance,
      category: transaction.category,
      date: transaction.date.toDate(),
      id: transaction.id,
      note: transaction.note,
      status: transaction.status,
      sum: transaction.sum
    };
  }).reverse();
};