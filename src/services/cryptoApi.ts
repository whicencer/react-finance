import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from './types/ICryptoData';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: (name) => `assets/${name}`,
    }),
    getCryptoCoinsWithLimit: builder.query<ICryptoData, string>({
      query: (limit) => `assets/?limit=${limit}`
    }),
  }),
});

export const { useGetCryptoByNameQuery, useGetCryptoCoinsWithLimitQuery } = cryptoApi;