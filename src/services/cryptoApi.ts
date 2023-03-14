import { ICoinData } from './types/ICoinData';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from './types/ICryptoData';
import { ICryptoMarkets } from './types/ICryptoMarkets';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query<ICoinData, string>({
      query: (coinName) => `assets/${coinName}`
    }),
    getCryptoCoinsWithLimit: builder.query<ICryptoData, string>({
      query: (limit) => `assets/?limit=${limit}`
    }),
    getCoinInMarkets: builder.query<{data: ICryptoMarkets[]}, string>({
      query: (coinName) => `assets/${coinName.toLowerCase()}/markets?limit=5`
    })
  }),
});

export const { useGetCryptoByNameQuery, useGetCryptoCoinsWithLimitQuery, useGetCoinInMarketsQuery } = cryptoApi;