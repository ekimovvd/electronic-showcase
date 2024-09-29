import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  emits: {
    "update:modelValue": null,
  },
  methods: {
    handleValue(event: Event): void {
      this.$emit("update:modelValue", (<HTMLInputElement>event.target).value);
    },
  },
});
