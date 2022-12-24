import { api } from './api';

export const accountsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/accounts/sign-up',
        method: 'POST',
        body: formData,
      }),
      transformErrorResponse: (response) => response.data?.error,
    }),
    signIn: builder.mutation({
      query: (formData) => ({
        url: 'accounts/sign-in',
        method: 'POST',
        body: formData,
      }),
      transformErrorResponse: (response) => response.data?.error,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = accountsApi;
