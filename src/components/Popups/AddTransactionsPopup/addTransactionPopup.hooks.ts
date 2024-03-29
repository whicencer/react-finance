import { useDispatch } from 'react-redux';
import { addTransaction } from '@store/slices/creditCards';
import { MainApi } from '@services/mainApi';
import { FormDataState, Response } from './AddTransactionsPopup.typings';
import { toast } from 'react-toastify';

export const useAddTransaction = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  return (data: FormDataState) => {
    const api = new MainApi();

    api.addTransaction(data)
      .then((response: Response) => {
        if (response.ok) {
          const { CreatedAt, balanceId, note, category, id, status, sum } = response.transaction;

          dispatch(addTransaction({
            balanceId,
            category,
            CreatedAt,
            id,
            note,
            status,
            sum
          }));
          toast.success('Transaction was created');
        } else {
          toast.error(response.message);
        }
      });
  };
};