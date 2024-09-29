/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module, Mutation, VuexModule } from "vuex-module-decorators";

enum ProfileMutation {
  UPDATE_PROFILE = "UPDATE_PROFILE",
}

interface State {}

@Module({
  namespaced: true,
  stateFactory: true,
  name: "profile",
})
export default class ProfileModuleState extends VuexModule<State> {
  @Mutation
  [ProfileMutation.UPDATE_PROFILE](): void {}
}
