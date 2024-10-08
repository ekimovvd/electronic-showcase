import { defineComponent } from "vue";

import { PAGE_NAME } from "./attributes";

import { LoginForm } from "@/components/pages/login";

export default defineComponent({
  name: PAGE_NAME,
  components: {
    LoginForm,
  },
});
