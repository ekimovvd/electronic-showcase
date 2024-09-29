import { AxiosInstance } from "axios";

import { AuthLoginRequest } from "./repo";
import { AuthUrlGenerator } from "./url-generator";

export interface AuthProjectRepository {
  login(payload: AuthLoginRequest): Promise<void>;
}

export class AuthHttpRepo implements AuthProjectRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly urlGenerator: AuthUrlGenerator
  ) {}

  async login(payload: AuthLoginRequest): Promise<void> {
    console.log(payload);
    // const { data } = await this.axios.get<
    //   ResponseData<AdminCurrencyShowResponse[]>
    // >(this.urlGenerator.list(this.userId, type));
  }
}
