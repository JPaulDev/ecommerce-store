import { api } from './api';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: '/auth/signup',
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (response) => response.data?.error,
    }),
  }),
});

export const { useSignUpMutation } = authApi;
