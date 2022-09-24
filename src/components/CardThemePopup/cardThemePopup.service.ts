import { getAuth } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../app/config/firebase";

export const changeTheme = async (cardId: string, themeId: number) => {
  const user = getAuth();
  const cardFromDB = collection(db, `user_${user.currentUser?.uid}`);
  
  await setDoc(doc(cardFromDB, `card_${cardId}`), { themeId }, { merge: true });

  setTimeout(() => alert('Card theme was successfully changed!'), 700);
};