import { makeAutoObservable } from "mobx";
import { AnamnesisGetDto, AnamnesisPostDto } from "../shared";
import { AnamnesisFormModel } from "../shared/models";

class AnamnesisStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public isPending = false;

  public anamnesises: AnamnesisGetDto[] = [];

  public anamnesisForm = new AnamnesisFormModel();

  public isFormVisible = false;

  public get anamnesisIds() {
    return this.anamnesises.map((anamnesis) => anamnesis.id);
  }

  public async getAnamnesises() {
    try {
      this.isPending = true;

      this.anamnesises = await (await fetch("/anamnesises/")).json();
    } catch (e) {
      console.log(e);
    } finally {
      this.isPending = false;
    }
  }

  public createAnamnesis() {
    const anamnesisData: AnamnesisPostDto = this.anamnesisForm.getPostDto();

    fetch("http://localhost:8000/anamnesises/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(anamnesisData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getAnamnesises();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateAnamnesis() {
    const anamnesisData = this.anamnesisForm.getPutDto();

    fetch(`http://localhost:8000/anamnesises/${anamnesisData.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(anamnesisData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getAnamnesises();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public onSubmit() {
    try {
      if (this.anamnesisForm.id) {
        this.updateAnamnesis();
      } else {
        this.createAnamnesis();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.closeForm();
    }
  }

  public showForm = (dto?: AnamnesisGetDto) => {
    if (dto) this.anamnesisForm.updateFromDto(dto);

    this.isFormVisible = true;
  };

  public closeForm = () => {
    this.isFormVisible = false;
    this.anamnesisForm.deInit();
  };
}

export default new AnamnesisStore();
