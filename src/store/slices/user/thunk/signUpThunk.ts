import { createAsyncThunk } from '@reduxjs/toolkit';
import { mainApi } from '@services/index';
import { AuthResponse } from '@store/slices/user/user.typings';
import { toast } from 'react-toastify';

interface SignupPayload {
  username: string;
  password: string;
  navigate: (to: string) => void;
}
export const signUpThunk = createAsyncThunk(
  'user/signUpThunk',
  async ({ username, password, navigate }: SignupPayload) => {
    return await mainApi.signup({ username, password })
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