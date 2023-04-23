import { useDispatch } from 'react-redux';
import { signOutUser } from '@store/slices/user';

export const useLogout = () => {
  const dispatch = useDispatch();

  const signOutFunction = async () => {
    localStorage.setItem('user', JSON.stringify(null));
    dispatch(signOutUser());
  };

  return [signOutFunction];
};