import { makeAutoObservable } from "mobx";
import { DiseaseGetDto, DiseasePostDto } from "../shared";
import { DiseaseFormModel } from "../shared/models";

class DiseaseStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public isPending = false;

  public diseases: DiseaseGetDto[] = [];

  public diseaseForm = new DiseaseFormModel();

  public isFormVisible = false;

  public get diseaseIds() {
    return this.diseases.map((disease) => disease.id);
  }

  public async getDiseases() {
    try {
      this.isPending = true;

      this.diseases = await (await fetch("/diseases/")).json();
    } catch (e) {
      console.log(e);
    } finally {
      this.isPending = false;
    }
  }

  public createDisease() {
    const diseaseData: DiseasePostDto = this.diseaseForm.getPostDto();

    fetch("http://localhost:8000/diseases/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(diseaseData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getDiseases();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateDisease() {
    const diseaseData = this.diseaseForm.getPutDto();

    fetch(`http://localhost:8000/diseases/${diseaseData.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(diseaseData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getDiseases();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public onSubmit() {
    try {
      if (this.diseaseForm.id) {
        this.updateDisease();
      } else {
        this.createDisease();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.closeForm();
    }
  }

  public showForm = (dto?: DiseaseGetDto) => {
    if (dto) this.diseaseForm.updateFromDto(dto);

    this.isFormVisible = true;
  };

  public closeForm = () => {
    this.isFormVisible = false;
    this.diseaseForm.deInit();
  };
}

export default new DiseaseStore();
