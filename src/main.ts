import { createApp } from "vue";
import VueBemCn from "vue-bem-cn";
import ClickOutside from "click-outside-vue3";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import "@/assets/styles/main.scss";

import AxiosPlugin from "@/plugins/axios";

import ProjectServicesPlugin from "@/plugins/project-services";

createApp(App)
  .use(store)
  .use(VueBemCn)
  .use(ClickOutside)
  .use(router)
  .use(AxiosPlugin)
  .use(ProjectServicesPlugin)
  .mount("#app");
