import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { UIButton } from "@/components/ui";

const MAX_RANDOM_NUMBER = 10000;

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
  computed: {
    displayedOrderNumber(): number {
      return Math.floor(Math.random() * MAX_RANDOM_NUMBER);
    },
  },
  methods: {
    handleClose(): void {
      this.$emit("update:isArrange", false);
    },
  },
});
