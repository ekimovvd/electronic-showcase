/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

import { ProductsProductResponse } from "@/shared/repository/modules/products/repo";

enum TrashMutation {
  ADD_TRASH = "ADD_TRASH",
  REMOVE_TRASH = "REMOVE_TRASH",
  CLEAR_TRASH = "CLEAR_TRASH",
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

  get trashAmount(): number {
    return this.trash.reduce((accumulator, product) => {
      accumulator += product.price * product.count;

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

  @Mutation
  [TrashMutation.REMOVE_TRASH](product: ProductsProductResponse): void {
    const findItem = this.trash.find((item) => item.id === product.id);

    if (findItem) {
      if (findItem.count > 1) {
        findItem.count -= 1;
      } else {
        this.trash.splice(
          this.trash.findIndex((item) => item.id === product.id),
          1
        );
      }
    }
  }

  @Mutation
  [TrashMutation.CLEAR_TRASH](): void {
    this.trash = [];
  }
}
