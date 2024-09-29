import { App } from "vue";
import { getModule } from "vuex-module-decorators";

import { ProjectServices } from "./repo";

import { AuthHttpRepo, AuthUrlGenerator } from "./modules/auth";

import store from "@/store";
import ProfileModuleState from "@/store/modules/profile";

export default function createProjectServices(context: App): ProjectServices {
  const { $axios } = context.config.globalProperties;
  const $store = store();

  const profileRepo = getModule(ProfileModuleState, $store);

  const authRepository = new AuthHttpRepo($axios, new AuthUrlGenerator());

  return {
    profileRepo,

    authRepository,
  };
}
