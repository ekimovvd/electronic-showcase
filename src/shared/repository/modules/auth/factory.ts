import { AuthLoginRequest } from "./repo";

export const AuthLoginRequestFactory = (
  payload: Partial<AuthLoginRequest> = {}
): AuthLoginRequest => {
  return {
    login: payload.login ?? "",
    password: payload.password ?? "",
  };
};
