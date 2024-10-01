import { defineComponent, PropType } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { UIButton } from "@/components/ui";
import { ProductsProductResponse } from "@/shared/repository/modules/products/repo";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    UIButton,
  },
  props: {
    products: {
      type: <PropType<ProductsProductResponse[]>>Array,
      default: () => [],
    },
  },
  data() {
    return {
      trashRepo: this.$projectServices.trashRepo,
    };
  },
  methods: {
    handleProduct(product: ProductsProductResponse): void {
      this.trashRepo.ADD_TRASH(product);
    },
  },
});
