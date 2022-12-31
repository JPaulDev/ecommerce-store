import { api } from './api';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({ url: '/user/userinfo' }),
    }),
  }),
});

export const { useGetUserQuery } = userApi;
