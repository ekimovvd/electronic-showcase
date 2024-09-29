import { App } from "vue";
import axios from "axios";

import { initializeAxios } from "@/shared/repository/instances/axios";

const axiosPlugin = {
  install: async (app: App) => {
    const $axios = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
      headers: {
        common: {
          "X-Requested-With": "XMLHttpRequest",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      },
      withXSRFToken: true,
      withCredentials: true,
    });

    initializeAxios($axios);

    $axios.interceptors.request.use(async (config) => {
      return config;
    });

    $axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { response } = error;
        const { data } = response;

        return Promise.reject(data);
      }
    );

    app.config.globalProperties.$axios = $axios;
  },
};

export default axiosPlugin;
