import { defineComponent, PropType } from "vue";

import { COMPONENT_NAME } from "./attributes";

enum Type {
  text = "text",
  password = "password",
  number = "number",
}

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    type: {
      type: <PropType<Type>>String,
      default: Type.text,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  emits: {
    "update:modelValue": null,
  },
  methods: {
    handleValue(event: Event): void {
      const value = (<HTMLInputElement>event.target).value;

      switch (this.type) {
        case Type.number:
          this.$emit("update:modelValue", Number(value));

          break;
        default:
          this.$emit("update:modelValue", value);

          break;
      }
    },
  },
});
