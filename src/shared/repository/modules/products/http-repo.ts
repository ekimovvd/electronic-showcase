import { AxiosInstance } from "axios";

import { ProductsUrlGenerator } from "./url-generator";
import { ProductsProductResponse } from "./repo";
import { ProductProductResponseFactory } from "./factory";

export interface ProductsProjectRepository {
  products(): Promise<ProductsProductResponse[]>;
  categories(): Promise<string[]>;
}

export class ProductsHttpRepo implements ProductsProjectRepository {
  constructor(
    private readonly axios: AxiosInstance,
    private readonly urlGenerator: ProductsUrlGenerator
  ) {}

  async products(): Promise<ProductsProductResponse[]> {
    const { data } = await this.axios.get<ProductsProductResponse[]>(
      this.urlGenerator.products()
    );

    return data.map((item) => ProductProductResponseFactory(item));
  }

  async categories(): Promise<string[]> {
    const { data } = await this.axios.get<string[]>(
      this.urlGenerator.categories()
    );

    return data;
  }
}
