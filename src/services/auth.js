import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/auth/signup',
        method: 'POST',
        body: formData,
      }),
      transformErrorResponse: (response) => response.data?.error,
    }),
    signIn: builder.mutation({
      query: (formData) => ({
        url: '/auth/signin',
        method: 'POST',
        body: formData,
      }),
      transformErrorResponse: (response) => response.data?.error,
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
