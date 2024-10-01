/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

import { ProductsProductResponse } from "@/shared/repository/modules/products/repo";

enum TrashMutation {
  ADD_TRASH = "ADD_TRASH",
}

interface State {
  trash?: [];
}

@Module({
  namespaced: true,
  stateFactory: true,
  name: "trash",
})
export default class TrashModuleState extends VuexModule<State> {
  trash = <ProductsProductResponse[]>[];

  get trashCounter(): number {
    return this.trash.reduce((accumulator, product) => {
      accumulator += product.count;

      return accumulator;
    }, 0);
  }

  @Mutation
  [TrashMutation.ADD_TRASH](product: ProductsProductResponse): void {
    const findItem = this.trash.find((item) => item.id === product.id);

    if (findItem) {
      findItem.count += 1;
    } else {
      this.trash.push({ ...product, count: 1 });
    }
  }
}
