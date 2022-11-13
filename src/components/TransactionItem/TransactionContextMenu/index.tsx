import React, { useState } from 'react';
import { deleteDoc, doc, getFirestore, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../../../app/config/firebase';
import { useAuth } from '../../../app/hooks/useAuth';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { deleteTransaction } from '../../../store/slices/creditCards';
import { ITransactionContextMenuProps } from './transactionContextMenu.types';
import { ConfirmationPopup } from '../../../shared/ui/ConfirmationPopup';

export const TransactionItemContextMenu: React.FC<ITransactionContextMenuProps> = ({x, y, transaction, currentBalance, isOpen, setIsOpen}) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const firestore = getFirestore();

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const deleteTransactionHandler = () => {
    const resultSum = transaction.status === 'income' ? currentBalance - transaction.sum : currentBalance + transaction.sum;

    dispatch(deleteTransaction(transaction));
    deleteDoc(doc(db, `user_${user.uid}`, `transactions_${transaction.id}`));
    setDoc(doc(firestore, `user_${user.uid}`, `cards_${transaction.balance}`), { balance: resultSum }, { merge: true });
  };

  return (
    <>
      <ContextMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        x={x}
        y={y}
        dropdownList={
          [
            {
              text: 'Delete transaction',
              onClick: () => setIsConfirmActive(true)
            }
          ]
        }
        />
        <ConfirmationPopup
          isActive={isConfirmActive}
          setIsActive={setIsConfirmActive}
          confirmCallback={deleteTransactionHandler}
          confirmText='Are you sure you want to delete the transaction?'
        />
    </>
  );
};