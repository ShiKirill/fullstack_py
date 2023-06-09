export enum GenderEnum {
  Men = 1,
  Women = 2,
}

export const genders: Record<GenderEnum, string> = {
  [GenderEnum.Men]: "мужчина",
  [GenderEnum.Women]: "женщина",
};

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

export enum HypotensStageEnum {
  Unknown = "0",
  First = "1",
  Second = "2",
  Third = "3",
}

export const hypotensStages: Record<HypotensStageEnum, string> = {
  [HypotensStageEnum.Unknown]: "неизвестно",
  [HypotensStageEnum.First]: "первая",
  [HypotensStageEnum.Second]: "вторая",
  [HypotensStageEnum.Third]: "третья",
};

export enum HypotenseRiskEnum {
  Unknown = "0",
  First = "1",
  Second = "2",
  Third = "3",
  Fourth = "4",
}

export const hypotensRisks: Record<HypotenseRiskEnum, string> = {
  [HypotenseRiskEnum.Unknown]: "неизвестно",
  [HypotenseRiskEnum.First]: "низкий",
  [HypotenseRiskEnum.Second]: "средний",
  [HypotenseRiskEnum.Third]: "высокий",
  [HypotenseRiskEnum.Fourth]: "очень высокий",
};

export interface DiseaseGetDto {
  id: number;
  pulse: number;
  knowAH: boolean;
  useHypotensive: boolean;
  hasDiseases: boolean;
  hypotensStage: HypotensStageEnum;
  hypotensRisk: HypotenseRiskEnum;
}

export interface DiseasePostDto {
  pulse: number;
  knowAH: boolean;
  useHypotensive: boolean;
  hasDiseases: boolean;
  hypotensStage: HypotensStageEnum;
  hypotensRisk: HypotenseRiskEnum;
}

export enum EducationEnum {
  Lower = 1,
  Middle = 2,
  PartHigh = 3,
  High = 4,
}

export const educationTypes: Record<EducationEnum, string> = {
  [EducationEnum.Lower]: "ниже среднего",
  [EducationEnum.Middle]: "среднее",
  [EducationEnum.PartHigh]: "н/высшее",
  [EducationEnum.High]: "высшее",
};

export interface AnamnesisGetDto {
  id: number;
  education: EducationEnum;
  sleepHours: number;
  alcohol: boolean;
  smoking: boolean;
  sigaretsCount: number;
  smokingDuration: number;
  physAct: number;
  workPlace: string;
}

export interface AnamnesisPostDto {
  education: EducationEnum;
  sleepHours: number;
  alcohol: boolean;
  smoking: boolean;
  sigaretsCount: number;
  smokingDuration: number;
  physAct: number;
  workPlace: string;
}

export interface ApStudyGetDto {
  id: number;
  sapBefore: number;
  dapBefore: number;
  sapAfter: number;
  dapAfter: number;
}

export interface ApStudyPostDto {
  sapBefore: number;
  dapBefore: number;
  sapAfter: number;
  dapAfter: number;
}
