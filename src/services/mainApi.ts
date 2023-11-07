import { ICardPayload } from "./types/ICardPayload";
import { IAuthPayload } from "./types/ISignupPayload";
import { ITransactionPayload } from "./types/ITransactionPayload";
import { ThemesId } from '@typings/ThemesIdEnum';

export class MainApi {
  private readonly baseUrl = 'https://react-finance-api.onrender.com';
  private readonly user = localStorage.getItem('user');
  private readonly token = JSON.parse(this.user ?? 'null')?.token;

  async checkToken () {
    try {
      const response = await fetch(`${this.baseUrl}/auth/check`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
      });
      const data = await response.text();
      if (data === 'True') {
        return true;
      } else {
        localStorage.setItem('user', JSON.stringify(null));
        location.reload();
        return false;
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Auth
  async signup (payload: IAuthPayload) {
    try {
      const body = {
        username: payload.username,
        password: payload.password
      };

      const response = await fetch(`${this.baseUrl}/auth/signup`, {
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
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }
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
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }

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
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }

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

  async changeCardName ({ cardId, newName }: { cardId: string, newName: string }) {
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }

    const formDataBody = new FormData();
    formDataBody.append('card_id', cardId);
    formDataBody.append('card_name', newName);

    try {
      const response = await fetch(`${this.baseUrl}/me/cards/updateName`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
        body: formDataBody,
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async changeCardTheme ({ cardId, newTheme }: { cardId: string, newTheme: ThemesId }) {
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }

    const formDataBody = new FormData();
    formDataBody.append('card_id', cardId);
    formDataBody.append('theme_id', String(newTheme));

    try {
      const response = await fetch(`${this.baseUrl}/me/cards/updateTheme`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
        body: formDataBody
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  // Transaction
  async getTransactions () {
    const isTokenValid = this.checkToken();
    if (!isTokenValid) {
      localStorage.setItem('user', 'null');
    }

    try {
      const response = await fetch(`${this.baseUrl}/me/transactions`, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async addTransaction (payload: ITransactionPayload) {
    const isTokenValid = this.checkToken();
    if (!isTokenValid)
      localStorage.setItem('user', 'null');

    try {
      const response = await fetch(`${this.baseUrl}/me/transactions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteTransaction (transactionId: string) {
    const isTokenValid = this.checkToken();
    if (!isTokenValid)
      localStorage.setItem('user', 'null');

    const formDataBody = new FormData();
    formDataBody.append('transaction_id', transactionId);

    try {
      const response = await fetch(`${this.baseUrl}/me/transactions`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.token}`
        },
        body: formDataBody
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
