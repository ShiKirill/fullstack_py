import { makeAutoObservable } from "mobx";
import { GenderEnum, PatientGetDto } from "../index";

class PatientFormModel {
  public id: number | null = null;
  public age = 0;
  public fullName = "";
  public gender: GenderEnum = GenderEnum.Men;
  public height = 0;
  public weight = 0;
  public anamnesisId = 0;
  public apStudyId = 0;
  public diseaseId = 0;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public changeFullName(fullName: string) {
    this.fullName = fullName;
  }

  public changeAge(age: number) {
    this.age = age;
  }

  public changeGender(gender: GenderEnum) {
    this.gender = gender;
  }

  public changeHeight(height: number) {
    this.height = height;
  }
  public changeWeight(weight: number) {
    this.weight = weight;
  }

  public changeAnamnesisId(anamnesisId: number) {
    this.anamnesisId = anamnesisId;
  }

  public changeApStudyId(apStudyId: number) {
    this.apStudyId = apStudyId;
  }

  public changeDiseaseId(diseaseId: number) {
    this.diseaseId = diseaseId;
  }

  public updateFromDto(dto: PatientGetDto) {
    this.id = dto.id;
    this.age = dto.age;
    this.fullName = dto.fullName;
    this.gender = dto.gender;
    this.height = dto.height;
    this.weight = dto.weight;
    this.anamnesisId = dto.anamnesisId;
    this.apStudyId = dto.apStudyId;
    this.diseaseId = dto.diseaseId;
  }

  public getPutDto() {
    return {
      id: this.id,
      age: this.age,
      fullName: this.fullName,
      gender: this.gender,
      height: this.height,
      weight: this.weight,
      anamnesisId: this.anamnesisId,
      apStudyId: this.apStudyId,
      diseaseId: this.diseaseId,
    };
  }

  public getPostDto() {
    return {
      age: this.age,
      fullName: this.fullName,
      gender: this.gender,
      height: this.height,
      weight: this.weight,
      anamnesisId: this.anamnesisId,
      apStudyId: this.apStudyId,
      diseaseId: this.diseaseId,
    };
  }
}

export default PatientFormModel;
