import { AuthLoginRequest } from "./repo";

export const AuthLoginRequestFactory = (
  payload: Partial<AuthLoginRequest> = {}
): AuthLoginRequest => {
  return {
    email: payload.email ?? "",
    password: payload.password ?? "",
  };
};
