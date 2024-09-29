export enum AuthApiRoutes {
  login = "",
}

export interface AuthProjectUrlGenerator {
  login(): string;
}

export class AuthUrlGenerator implements AuthProjectUrlGenerator {
  login(): string {
    return AuthApiRoutes.login;
  }
}
