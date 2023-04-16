import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './user.typings';

const initialState: IUserState = {
  token: null,
  username: null,
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
  }
});

export const { setUser, signOutUser } = userSlice.actions;
export default userSlice.reducer;