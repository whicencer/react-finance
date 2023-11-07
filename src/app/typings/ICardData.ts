import { ThemesId } from '@typings/ThemesIdEnum';

export interface ICardData {
  balance: number;
  cardName: string;
  card_id: string;
  themeId: ThemesId;
  user_id: number;
}