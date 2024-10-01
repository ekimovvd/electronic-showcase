import { createStore, Store } from "vuex";

import { ProjectStore } from "@/store/model";

import { Trash } from "@/store/modules";
import { initializeStore } from "@/shared/repository/instances/store";

const store = (): Store<ProjectStore> => <Store<ProjectStore>>createStore({
    modules: {
      trash: Trash,
    },
  });

initializeStore(store());

export default store;
