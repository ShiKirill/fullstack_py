import { makeAutoObservable } from "mobx";

class ApStudyStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new ApStudyStore();
