import { createStore, Store } from "vuex";

import { ProjectStore } from "@/store/model";

import { Profile } from "@/store/modules";
import { initializeStore } from "@/shared/repository/instances/store";

const store = (): Store<ProjectStore> => <Store<ProjectStore>>createStore({
    modules: {
      profile: Profile,
    },
  });

initializeStore(store());

export default store;
