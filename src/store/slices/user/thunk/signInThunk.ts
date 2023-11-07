import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';
import { AuthResponse } from '@store/slices/user/user.typings';

interface LoginPayload {
  username: string;
  password: string;
}

export const signInThunk = createAsyncThunk(
  'userSlice/signInThunk',
  async ({ username, password }: LoginPayload)=> {
    const api = new MainApi();

    return await api.signin({ username, password })
      .then((response: AuthResponse) => {
        if (response.ok) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }

        return { ...response, username };
      })
  }
);