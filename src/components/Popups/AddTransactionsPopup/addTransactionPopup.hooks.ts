import { useDispatch } from 'react-redux';
import { addTransactionDB } from './addTransactionPopup.service';
import { addTransaction } from '@store/slices/creditCards';
import { ITransaction } from '@typings/ITransaction';

export const useAddTransaction = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  return (data: ITransaction, balance: number, resolve: () => void, reject: (error: Error) => void) => {
    const createTransactionFunction = async () => {
      addTransactionDB(data, balance);
      dispatch(addTransaction(data));
    };

    createTransactionFunction()
      .then(resolve)
      .catch(reject);
  };
};