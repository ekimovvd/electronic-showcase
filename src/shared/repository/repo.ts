import { AuthProjectRepository } from "./modules/auth";

import ProfileModuleState from "@/store/modules/profile";

export interface ProjectServices {
  authRepository: AuthProjectRepository;

  profileRepo: ProfileModuleState;
}
