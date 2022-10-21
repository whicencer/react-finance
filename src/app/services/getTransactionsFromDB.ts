import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../app/config/firebase";

export const getTransactionsFromDB = async () => {
  const user = getAuth();
  const userFromDB = collection(db, `user_${user.currentUser?.uid}`);
  const transactionSnapshot = await getDocs(userFromDB);
  const transactionsList = transactionSnapshot.docs.map(doc => doc.data());

  return transactionsList.filter(el => el.id.split('_')[0] === 'transaction');
};