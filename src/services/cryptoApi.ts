import { ICoinData } from './types/ICoinData';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICryptoData } from './types/ICryptoData';
import { ICryptoMarket } from 'app/typings/ICryptoMarket';

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
    getCoinInMarkets: builder.query<{data: ICryptoMarket[]}, string>({
      query: (coinName) => `assets/${coinName}/markets?limit=20`
    })
  }),
});

export const { useGetCryptoByNameQuery, useGetCryptoCoinsWithLimitQuery, useGetCoinInMarketsQuery } = cryptoApi;