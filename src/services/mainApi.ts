import { ISignupPayload } from "./types/ISignupPayload";

export class MainApi {
  private readonly baseUrl = 'https://react-finance-backend-production.up.railway.app';

  async signup (payload: ISignupPayload) {
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
}