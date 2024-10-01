import TrashModuleState from "@/store/modules/trash";

export interface ProjectStore {
  trash: TrashModuleState;
}

export interface StoreGetters {
  getters: ProjectStore;
}
