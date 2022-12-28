import { api } from './api';

export const accountsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (formData) => ({
        url: '/accounts/sign-up',
        method: 'POST',
        body: formData,
      }),
    }),
    signIn: builder.mutation({
      query: (formData) => ({
        url: 'accounts/sign-in',
        method: 'POST',
        body: formData,
      }),
    }),
    changePassword: builder.mutation({
      query: (formData) => ({
        url: 'accounts/change-password',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useSignInMutation,
  useChangePasswordMutation,
} = accountsApi;
