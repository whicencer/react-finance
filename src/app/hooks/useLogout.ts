import { useDispatch } from 'react-redux';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { signOutUser } from '../../store/slices/userSlice';

export const useLogout = () => {
  const dispatch = useDispatch();

  const signOutFunction = async () => {
    await signOut(auth);
    dispatch(signOutUser());
  };

  return [signOutFunction];
};