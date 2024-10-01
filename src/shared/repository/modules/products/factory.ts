import { ProductsFilter, ProductsProductResponse } from "./repo";

export const ProductsFilterFactory = (
  payload: Partial<ProductsFilter> = {}
): ProductsFilter => {
  return {
    category: payload.category ?? "",
    minPrice: payload.minPrice ?? 0,
    maxPrice: payload.maxPrice ?? 0,
  };
};

export const ProductProductResponseFactory = (
  payload: Partial<ProductsProductResponse> = {}
): ProductsProductResponse => {
  return {
    id: payload.id ?? 0,
    title: payload.title ?? "",
    price: payload.price ?? 0,
    description: payload.description ?? "",
    category: payload.category ?? "",
    image: payload.image ?? "",
    rating: {
      rate: payload.rating && payload.rating.rate ? payload.rating.rate : 0,
      count: payload.rating && payload.rating.count ? payload.rating.count : 0,
    },
    count: payload.count ?? 0,
  };
};
