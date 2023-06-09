import { makeAutoObservable } from "mobx";

class DiseaseStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new DiseaseStore();
