export enum ProductsApiRoutes {
  products = "/products",
  categories = "/products/categories",
}

export interface ProductsProjectUrlGenerator {
  products(): string;
  categories(): string;
}

export class ProductsUrlGenerator implements ProductsProjectUrlGenerator {
  products(): string {
    return ProductsApiRoutes.products;
  }

  categories(): string {
    return ProductsApiRoutes.categories;
  }
}
