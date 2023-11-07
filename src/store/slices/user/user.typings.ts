export interface IUserState {
  username: string | null;
  token: string | null;
  isLoading?: boolean;
}

export interface AuthResponse {
  message: string;
  ok: boolean;
  token: string;
  username: string;
}