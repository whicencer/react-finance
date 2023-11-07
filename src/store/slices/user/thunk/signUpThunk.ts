import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse } from '@store/slices/user/user.typings';
import { toast } from 'react-toastify';
import { MainApi } from '@services/mainApi';

interface SignupPayload {
  username: string;
  password: string;
  navigate: (to: string) => void;
}
export const signUpThunk = createAsyncThunk(
  'user/signUpThunk',
  async ({ username, password, navigate }: SignupPayload) => {
    const api = new MainApi();

    return await api.signup({ username, password })
      .then((response: AuthResponse) => {
        if (response.ok) {
          toast.success(response.message);
          navigate('/signin');
        } else {
          toast.error(response.message);
        }

        return { ...response, username };
      });
  }
);