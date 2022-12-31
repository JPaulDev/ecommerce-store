import { createSlice } from '@reduxjs/toolkit';
import { accountsApi } from '../../services/accounts';
import { authApi } from '../../services/auth';
import { userApi } from '../../services/user';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getUser.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        authApi.endpoints.signUp.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        accountsApi.endpoints.editDetails.matchFulfilled,
        (state, { payload }) => {
          state.user = payload.user;
        }
      );
  },
});

export function selectAuth(state) {
  return state.auth;
}

export default authSlice.reducer;
