import { createSlice } from '@reduxjs/toolkit';

type User = {
  name: string;
};

export type UserSliceState = {
  data: User | null;
};

const initialState: UserSliceState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
