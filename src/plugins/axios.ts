import { App } from "vue";
import axios from "axios";

import { initializeAxios } from "@/shared/repository/instances/axios";

const axiosPlugin = {
  install: async (app: App) => {
    const $axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        common: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
    });

    initializeAxios($axios);

    $axios.interceptors.request.use(async (config) => {
      return config;
    });

    app.config.globalProperties.$axios = $axios;
  },
};

export default axiosPlugin;
