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
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
