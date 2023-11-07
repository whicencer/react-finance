import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { MainApi } from '@services/mainApi';
import { changeCardTheme } from '@store/slices/creditCards';
import { getRandomEmoji } from '@utils/getRandomEmoji';
import { ThemesId } from '@typings/ThemesIdEnum';

interface IResponse {
  message: string;
  ok: boolean;
}

export const useChangeCardTheme = (id: string) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  return (themeId: ThemesId) => {
    const api = new MainApi();
      api.changeCardTheme({ cardId: id, newTheme: themeId })
        .then((response: IResponse) => {
          if (response.ok) {
            const { message } = response;
            dispatch(changeCardTheme({ id, themeId }));
            toast.success(getRandomEmoji()+message);
          } else {
            toast.error(response.message);
          }
        });
  };
};