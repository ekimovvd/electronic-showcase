import { defineComponent, PropType } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { UIInput, UIButton, UISelect } from "@/components/ui";

import {
  ProductsFilter,
  ProductsProductResponse,
} from "@/shared/repository/modules/products/repo";
import { ProductsFilterFactory } from "@/shared/repository/modules/products/factory";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    UIInput,
    UIButton,
    UISelect,
  },
  props: {
    productsFilter: {
      type: <PropType<ProductsFilter>>Object,
      required: true,
    },
    categories: {
      type: <PropType<string[]>>Array,
      default: () => [],
    },
    products: {
      type: <PropType<ProductsProductResponse[]>>Array,
      default: () => [],
    },
  },
  emits: {
    "update:productsFilter": null,
    "update:products": null,
  },
  data() {
    return {
      isLoading: false,
      productsRepository: this.$projectServices.productsRepository,
    };
  },
  computed: {
    isResetDisabled(): boolean {
      return this.isLoading;
    },

    isApplyDisabled(): boolean {
      const { minPrice, maxPrice } = this.productsFilter;

      return minPrice >= maxPrice || this.isLoading;
    },
  },
  methods: {
    handleMinPrice(minPrice: number): void {
      this.$emit("update:productsFilter", {
        ...this.productsFilter,
        minPrice,
      });
    },

    handleMaxPrice(maxPrice: number): void {
      this.$emit("update:productsFilter", {
        ...this.productsFilter,
        maxPrice,
      });
    },

    async handleReset(): Promise<void> {
      try {
        this.isLoading = true;

        const products = await this.productsRepository.products();

        this.$emit("update:products", products);
        this.$emit("update:productsFilter", ProductsFilterFactory());
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },

    async handleApply(): Promise<void> {
      try {
        this.isLoading = true;

        const { category, minPrice, maxPrice } = this.productsFilter;

        const products = (await this.productsRepository.products()).filter(
          (product) => {
            const matchesCategory = category
              ? product.category === category
              : true;

            const matchesMinPrice =
              minPrice > 0 ? product.price >= minPrice : true;

            const matchesMaxPrice =
              maxPrice > 0 ? product.price <= maxPrice : true;

            return matchesCategory && matchesMinPrice && matchesMaxPrice;
          }
        );

        this.$emit("update:products", products);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
