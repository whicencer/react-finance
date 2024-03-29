import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MainApi } from '@services/mainApi';
import { changeCardName } from '@store/slices/creditCards';

interface IResponse {
  message: string;
  ok: boolean;
}

export const useChangeCardName = (id: string) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  return (newName: string) => {
    const api = new MainApi();
      api.changeCardName({ cardId: id, newName, })
        .then((response: IResponse) => {
          if (response.ok) {
            const { message } = response;
            dispatch(changeCardName({ id, newName }));
            toast.success(message);
          } else {
            toast.error(response.message);
          }
        });
  };
};