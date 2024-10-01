import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { UIButton } from "@/components/ui";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    UIButton,
  },
  props: {
    isArrange: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    "update:isArrange": null,
  },
  data() {
    return {
      trashRepo: this.$projectServices.trashRepo,
    };
  },
  computed: {
    displayedColumns(): string[] {
      return ["№", "Наименование товара", "Количество", "Цена за ед.", "Итого"];
    },
  },
  methods: {
    handleArrange(): void {
      this.trashRepo.CLEAR_TRASH();

      this.$emit("update:isArrange", true);
    },
  },
});
