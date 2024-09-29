import { Store } from "vuex";

import { ProjectStore } from "@/store/model";

let $store: Store<ProjectStore>;

export function initializeStore(storeInstance: Store<ProjectStore>): void {
  $store = storeInstance;
}

export { $store };
