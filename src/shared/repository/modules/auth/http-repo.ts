import { AxiosInstance } from "axios";

import { AuthLoginRequest, AuthLoginResponse } from "./repo";
import { AuthUrlGenerator } from "./url-generator";

import { DELAY } from "@/shared/constants/constants";

export interface AuthProjectRepository {
  login(payload: AuthLoginRequest): Promise<AuthLoginResponse>;
}

export class AuthHttpRepo implements AuthProjectRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly urlGenerator: AuthUrlGenerator
  ) {}

  async login({
    email,
    password,
  }: AuthLoginRequest): Promise<AuthLoginResponse> {
    const token = btoa(`${email}:${password}`);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          token,
        });
      }, DELAY);
    });
  }
}
