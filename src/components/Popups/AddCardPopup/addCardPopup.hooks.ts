/* eslint-disable camelcase */
import { MainApi } from '@services/mainApi';
import { addCard } from '@store/slices/creditCards';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { IPayload, IResponse } from './addCardPopup.typings';

export const useAddCard = () => {
  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  return (data: IPayload) => {
    const api = new MainApi();
      api.createCard(data)
        .then((response: IResponse) => {
          if (response.ok) {
            const { balance, card_id, cardName, themeId, user_id } = response.card;

            dispatch(addCard({
              balance,
              card_id,
              cardName,
              themeId,
              user_id,
            }));
            toast.success('Card was created');
          } else {
            toast.error(response.message);
          }
        });
  };
};