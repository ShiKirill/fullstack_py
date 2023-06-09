import { makeAutoObservable } from "mobx";

class AnamnesisStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new AnamnesisStore();
