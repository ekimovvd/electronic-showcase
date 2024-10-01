import { defineComponent } from "vue";

import { PAGE_NAME } from "./attributes";

import { MainFilter, MainProducts } from "@/components/pages/main";

import { ProductsFilterFactory } from "@/shared/repository/modules/products/factory";
import { ProductsProductResponse } from "@/shared/repository/modules/products/repo";

export default defineComponent({
  name: PAGE_NAME,
  components: {
    MainFilter,
    MainProducts,
  },
  data() {
    return {
      products: <ProductsProductResponse[]>[],
      categories: <string[]>[],
      productsFilter: ProductsFilterFactory(),
      productsRepository: this.$projectServices.productsRepository,
    };
  },
  async created(): Promise<void> {
    const [products, categories] = await Promise.all([
      this.productsRepository.products(),
      this.productsRepository.categories(),
    ]);

    this.products = products;
    this.categories = categories;
  },
});
