import { api } from './api';

export const accountsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    changePassword: builder.mutation({
      query: (formData) => ({
        url: 'accounts/change-password',
        method: 'POST',
        body: formData,
      }),
    }),
    editDetails: builder.mutation({
      query: (formData) => ({
        url: 'accounts/edit-details',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useChangePasswordMutation, useEditDetailsMutation } =
  accountsApi;
