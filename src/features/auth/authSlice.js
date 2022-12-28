import { createSlice } from '@reduxjs/toolkit';
import { accountsApi } from '../../services/accounts';

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
        accountsApi.endpoints.signIn.matchFulfilled,
        (state, { payload }) => {
          state.isAuthenticated = true;
          state.user = payload.user;
        }
      )
      .addMatcher(
        accountsApi.endpoints.signUp.matchFulfilled,
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
