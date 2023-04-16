import { IAuthPayload } from "./types/IAuthPayload";

export class MainApi {
  private readonly baseUrl = 'https://react-finance-backend-production.up.railway.app';

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
}