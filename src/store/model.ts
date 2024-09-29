import ProfileModuleState from "@/store/modules/profile";

export interface ProjectStore {
  profile: ProfileModuleState;
}

export interface StoreGetters {
  getters: ProjectStore;
}
