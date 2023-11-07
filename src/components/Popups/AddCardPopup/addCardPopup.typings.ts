import { ThemesId } from '@typings/ThemesIdEnum';

export interface IPayload {
  balance: number;
  cardName: string;
  themeId: ThemesId;
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
  themeId:   ThemesId;
  user_id:   number;
}