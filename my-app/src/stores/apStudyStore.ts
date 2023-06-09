import { makeAutoObservable } from "mobx";
import { ApStudyGetDto, ApStudyPostDto } from "../shared";
import ApStudyFormModel from "../shared/models/ApStudyFormModel";

class ApStudyStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public isPending = false;

  public apStudies: ApStudyGetDto[] = [];

  public apStudyForm = new ApStudyFormModel();

  public isFormVisible = false;

  public get apStudyIds() {
    return this.apStudies.map((apStudy) => apStudy.id);
  }

  public async getApStudies() {
    try {
      this.isPending = true;

      this.apStudies = await (await fetch("/apstudies/")).json();
    } catch (e) {
      console.log(e);
    } finally {
      this.isPending = false;
    }
  }

  public createApStudy() {
    const apStudyData: ApStudyPostDto = this.apStudyForm.getPostDto();

    fetch("http://localhost:8000/apstudies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apStudyData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getApStudies();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateApStudy() {
    const apStudyData = this.apStudyForm.getPutDto();

    fetch(`http://localhost:8000/apstudies/${apStudyData.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(apStudyData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getApStudies();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public onSubmit() {
    try {
      if (this.apStudyForm.id) {
        this.updateApStudy();
      } else {
        this.createApStudy();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.closeForm();
    }
  }

  public showForm = (dto?: ApStudyGetDto) => {
    if (dto) this.apStudyForm.updateFromDto(dto);

    this.isFormVisible = true;
  };

  public closeForm = () => {
    this.isFormVisible = false;
    this.apStudyForm.deInit();
  };
}

export default new ApStudyStore();
