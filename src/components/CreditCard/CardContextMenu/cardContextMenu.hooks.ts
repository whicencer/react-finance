import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteCard } from '@store/slices/creditCards';
import { getRandomEmoji } from '@utils/getRandomEmoji';
import { MainApi } from '@services/mainApi';

export const useDeleteCard = (id: string) => {
  const dispatch = useDispatch();
  const api = new MainApi();

  const deleteCardCallback = async (e: Event) => {
    e.stopPropagation();
    api.deleteCard(id)
      .then(response => {
        if (response.ok) {
          dispatch(deleteCard(id));
          toast.success(`${getRandomEmoji()} Card was successfully deleted`);
        } else {
          toast.error(response.message);
        }
      });
  };

  return deleteCardCallback;
};