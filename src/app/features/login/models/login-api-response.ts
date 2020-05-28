import { User } from 'src/app/core/models/user';

export interface LoginApiResponse {
  token: string;
  user: User;
}
