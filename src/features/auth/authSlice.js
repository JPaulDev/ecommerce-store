import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    signIn(state, action) {
      const { user } = action.payload;

      state.user = user;
      state.isAuthenticated = true;
    },
    signOut(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export function selectAuth(state) {
  return state.auth;
}

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
