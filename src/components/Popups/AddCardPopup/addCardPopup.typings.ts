export interface IPayload {
  balance: number;
  cardName: string;
  themeId: number;
}

export interface IResponse {
  card:    ICard;
  message: string;
  ok:      boolean;
}

export interface ICard {
  ID:        number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt: null;
  card_id:   string;
  balance:   number;
  cardName:  string;
  themeId:   number;
  user_id:   number;
}