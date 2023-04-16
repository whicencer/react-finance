import { ICardPayload } from "./types/ICardPayload";
import { IAuthPayload } from "./types/ISignupPayload";

export class MainApi {
  private readonly baseUrl = 'https://react-finance-backend-production.up.railway.app';
  private readonly user = localStorage.getItem('user');
  private readonly token = JSON.parse(this.user ?? 'null').token;

  // Auth
  async signup (payload: IAuthPayload) {
    try {
      const body = {
        username: payload.username,
        password: payload.password
      };

      const reponse = await fetch(`${this.baseUrl}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await reponse.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async signin (payload: IAuthPayload) {
    try {
      const body = {
        username: payload.username,
        password: payload.password
      };

      const response = await fetch(`${this.baseUrl}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Cards
  async getCards () {
    try {
      const response = await fetch(`${this.baseUrl}/me/cards`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCard (cardId: string) {
    const formDataBody = new FormData();
    formDataBody.append('card_id', cardId);

    try {
      const response = await fetch(`${this.baseUrl}/me/cards`, {
        method: 'DELETE',
        body: formDataBody,
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async createCard (payload: ICardPayload) {
    try {
      const response = await fetch(`${this.baseUrl}/me/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.token}`
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}