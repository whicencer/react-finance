import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (name) => `assets/${name}`,
    }),
    getCryptoCoins: builder.query({
      query: () => `assets`
    }),
  }),
});

export const { useGetCryptoByNameQuery, useGetCryptoCoinsQuery } = cryptoApi;