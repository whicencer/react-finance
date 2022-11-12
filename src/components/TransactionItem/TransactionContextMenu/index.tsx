import React, { useState } from 'react';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { ITransactionContextMenuProps } from './transactionContextMenu.types';
import { ConfirmationPopup } from '../../../shared/ui/ConfirmationPopup';
import { useDispatch } from 'react-redux';
import { deleteDoc, doc, setDoc } from 'firebase/firestore';
import { useAuth } from '../../../app/hooks/useAuth';
import { db } from '../../../app/config/firebase';
import { deleteTransaction } from '../../../store/slices/creditCards';
import { toast } from 'react-toastify';
import { getRandomEmoji } from '../../../utils/getRandomEmoji';

export const TransactionItemContextMenu: React.FC<ITransactionContextMenuProps> = ({x, y, transaction, currentBalance, isOpen, setIsOpen}) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const dispatch = useDispatch();
  const { user } = useAuth();

  const deleteTransactionHandler = async () => {
    const resultSum = transaction.status === 'income' ? currentBalance - transaction.sum : currentBalance + transaction.sum;

    dispatch(deleteTransaction(transaction));
    deleteDoc(doc(db, `user_${user.uid}`, `transactions_${transaction.id}`));
    setDoc(doc(db, `user_${user.uid}`, `cards_${transaction.balance}`), { balance: resultSum }, { merge: true });

    toast.success(`${getRandomEmoji()} Transaction was successfully deleted`);
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