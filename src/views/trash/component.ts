import { defineComponent } from "vue";

import { PAGE_NAME } from "./attributes";

import { TrashEmpty, TrashOrder, TrashModal } from "@/components/pages/trash";

type Component = typeof TrashEmpty | typeof TrashOrder;

export default defineComponent({
  name: PAGE_NAME,
  components: {
    TrashEmpty,
    TrashOrder,
    TrashModal,
  },
  data() {
    return {
      isArrange: false,
      trashRepo: this.$projectServices.trashRepo,
    };
  },
  computed: {
    displayedComponent(): Component {
      if (this.trashRepo.trashCounter) {
        return TrashOrder;
      }

      return TrashEmpty;
    },
  },
});
