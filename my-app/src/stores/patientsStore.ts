import { makeAutoObservable } from "mobx";
import { PatientGetDto, PatientPostDto } from "../shared";
import { PatientFormModel } from "../shared/models";

class PatientsStore {
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public isPending = false;

  public patients: PatientGetDto[] = [];

  public patientForm = new PatientFormModel();

  public isFormVisible = false;

  public async getPatients() {
    try {
      this.isPending = true;

      this.patients = await (await fetch("/patients/")).json();
    } catch (e) {
      console.log(e);
    } finally {
      this.isPending = false;
    }
  }

  public createPatient(patientData: PatientPostDto) {
    // const patientData: PatientPostDto = {};

    fetch("http://localhost:8000/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public showForm = (dto?: PatientGetDto) => {
    this.isFormVisible = true;
  };

  public closeForm = () => {
    this.isFormVisible = false;
  };
}

export default new PatientsStore();
