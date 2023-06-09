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

  public createPatient() {
    const patientData: PatientPostDto = this.patientForm.getPostDto();

    fetch("http://localhost:8000/patients/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patientData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getPatients();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updatePatient() {
    const patientData = this.patientForm.getPutDto();

    fetch(`http://localhost:8000/patients/${patientData.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(patientData),
    })
      .then((response) => response.json())
      .then((data) => {
        this.getPatients();
        // Обработка ответа после создания пациента
      })
      .catch((error) => {
        console.log(error);
      });
  }

  public onSubmit() {
    try {
      if (this.patientForm.id) {
        this.updatePatient();
      } else {
        this.createPatient();
      }
    } catch (e) {
      console.log(e);
    } finally {
      this.closeForm();
    }
  }

  public showForm = (dto?: PatientGetDto) => {
    if (dto) this.patientForm.updateFromDto(dto);

    this.isFormVisible = true;
  };

  public closeForm = () => {
    this.isFormVisible = false;
    this.patientForm.deInit();
  };
}

export default new PatientsStore();
