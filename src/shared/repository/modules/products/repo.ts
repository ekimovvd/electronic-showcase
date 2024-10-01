export interface ProductsFilter {
  category: string;
  minPrice: number;
  maxPrice: number;
}

export interface ProductsProductResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  count: number;
}
