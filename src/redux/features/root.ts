import userReducer, { UserSliceState } from './userSlice';

export const rootReducers = {
  user: userReducer,
};

export type RootState = {
  user: UserSliceState;
};
