import { createAsyncThunk } from '@reduxjs/toolkit';
import { MainApi } from '@services/mainApi';
import { toast } from 'react-toastify';
import { redirect } from 'react-router-dom';
import { AuthResponse } from '@store/slices/user/user.typings';
import { mainApi } from '@services/index';

interface LoginPayload {
  username: string;
  password: string;
}

export const signInThunk = createAsyncThunk(
  'userSlice/signInThunk',
  async ({ username, password }: LoginPayload)=> {

    return await mainApi.signin({ username, password })
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