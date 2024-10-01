import { AuthProjectRepository } from "./modules/auth";
import { ProductsProjectRepository } from "./modules/products";

import TrashModuleState from "@/store/modules/trash";

export interface ProjectServices {
  authRepository: AuthProjectRepository;
  productsRepository: ProductsProjectRepository;

  trashRepo: TrashModuleState;
}
