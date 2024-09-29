import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    view: {
      type: String,
      default: "",
    },
  },
});
