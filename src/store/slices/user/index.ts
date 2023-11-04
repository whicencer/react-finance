import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './user.typings';
import { signInThunk } from '@store/slices/user/thunk/signInThunk';
import { signUpThunk } from '@store/slices/user/thunk/signUpThunk';

const initialState: IUserState = {
  token: null,
  username: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    signOutUser: (state) => {
      state.token = null;
      state.username = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.pending, state=> {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.username = action.payload.username;

        localStorage.setItem('user', JSON.stringify({ token: state.token, username: state.username }));
      });

    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action: PayloadAction<{ username: string }>) => {
        state.isLoading = false;
        state.username = action.payload.username;
      })
  }
});

export const { setUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;