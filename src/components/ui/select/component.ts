import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    option: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  emits: {
    "update:option": null,
  },
  methods: {
    handleOption(event: Event): void {
      this.$emit("update:option", (<HTMLSelectElement>event.target).value);
    },
  },
});
