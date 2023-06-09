export enum GenderEnum {
  Men = 1,
  Women = 2,
}

export interface PatientGetDto {
  id: number;
  age: number;
  fullName: string;
  gender: number;
  height: number;
  weight: number;
  anamnesisId: number;
  apStudyId: number;
  diseaseId: number;
}

export interface PatientPostDto {
  age: number;
  fullName: string;
  gender: number;
  height: number;
  weight: number;
  anamnesisId: number;
  apStudyId: number;
  diseaseId: number;
}
