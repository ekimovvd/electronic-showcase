import { App } from "vue";
import { getModule } from "vuex-module-decorators";

import { ProjectServices } from "./repo";

import { AuthHttpRepo, AuthUrlGenerator } from "./modules/auth";
import { ProductsHttpRepo, ProductsUrlGenerator } from "./modules/products";

import store from "@/store";
import TrashModuleState from "@/store/modules/trash";

export default function createProjectServices(context: App): ProjectServices {
  const { $axios } = context.config.globalProperties;
  const $store = store();

  const trashRepo = getModule(TrashModuleState, $store);

  const authRepository = new AuthHttpRepo($axios, new AuthUrlGenerator());
  const productsRepository = new ProductsHttpRepo(
    $axios,
    new ProductsUrlGenerator()
  );

  return {
    trashRepo,

    authRepository,
    productsRepository,
  };
}
