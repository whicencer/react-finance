import React, { useState } from 'react';
import ContextMenu from '../../../shared/ui/Dropdown/ContextMenu';
import { ITransactionContextMenuProps } from './transactionContextMenu.typings';
import { ConfirmationPopup } from '../../../shared/ui/ConfirmationPopup';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../../store/slices/creditCards';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';

export const TransactionItemContextMenu: React.FC<ITransactionContextMenuProps> = ({x, y, transaction, isOpen, setIsOpen}) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const dispatch = useDispatch();

  const deleteTransactionHandler = async () => {
    const api = new MainApi();

    api.deleteTransaction(transaction.id)
      .then(response => {
        if (!response.ok) {
          toast.error(response.message);
        } else {
          dispatch(deleteTransaction(transaction));
          toast.success(response.message);
        }
      });
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