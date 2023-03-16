export interface ICryptoMarket {
  exchangeId:    string;
  baseId:        string;
  quoteId:       string;
  baseSymbol:    string;
  quoteSymbol:   string;
  volumeUsd24Hr: string;
  priceUsd:      string;
  volumePercent: string;
}