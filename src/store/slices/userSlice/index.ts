import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserState } from './userSlice.typings';

const initialState: IUserState = {
  displayName: null,
  email: null,
  photoUrl: null,
  uid: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.photoUrl = action.payload.photoUrl;
      state.uid = action.payload.uid;
    }
  }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;