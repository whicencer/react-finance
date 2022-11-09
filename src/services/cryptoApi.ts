import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2/assets' }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
});

export const { useGetCryptoByNameQuery } = cryptoApi;