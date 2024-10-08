import { defineComponent } from "vue";

import { COMPONENT_NAME } from "./attributes";

import { DefaultNavbar } from "@/components/layouts/default";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    DefaultNavbar,
  },
});
