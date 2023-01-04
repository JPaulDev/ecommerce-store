import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: 'auth/sign-up',
        method: 'POST',
        body: formData,
      }),
    }),
    signIn: builder.mutation({
      query: (formData) => ({
        url: 'auth/sign-in',
        method: 'POST',
        body: formData,
      }),
    }),
    signOut: builder.mutation({
      query: () => ({
        url: 'auth/sign-out',
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation } =
  authApi;
