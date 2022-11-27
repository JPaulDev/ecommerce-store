import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: '/api',
    timeout: 10000,
  }),
  endpoints: () => ({}),
});
