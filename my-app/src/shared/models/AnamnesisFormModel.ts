import { makeAutoObservable } from "mobx";
import { AnamnesisGetDto, AnamnesisPostDto, EducationEnum } from "../index";

class AnamnesisFormModel {
  public id: null | number = null;
  public education: EducationEnum = EducationEnum.Middle;
  public sleepHours = 0;
  public alcohol = false;
  public smoking = false;
  public sigaretsCount = 0;
  public smokingDuration = 0;
  public physAct = 0;
  public workPlace = "";

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public changeEducation(education: EducationEnum) {
    this.education = education;
  }

  public changeSleepHours(sleepHours: number) {
    this.sleepHours = sleepHours;
  }

  public changeAlcohol(alcohol: boolean) {
    this.alcohol = alcohol;
  }

  public changeSmoking(smoking: boolean) {
    this.smoking = smoking;
  }
  public changeSigaretsCount(sigaretsCount: number) {
    this.sigaretsCount = sigaretsCount;
  }

  public changeSmokingDuration(smokingDuration: number) {
    this.smokingDuration = smokingDuration;
  }

  public changePhysAct(physAct: number) {
    this.physAct = physAct;
  }

  public changeWorkPlace(workPlace: string) {
    this.workPlace = workPlace;
  }

  public updateFromDto(dto: AnamnesisGetDto) {
    this.id = dto.id;
    this.education = dto.education;
    this.sleepHours = dto.sleepHours;
    this.alcohol = dto.alcohol;
    this.smoking = dto.smoking;
    this.sigaretsCount = dto.sigaretsCount;
    this.smokingDuration = dto.smokingDuration;
    this.physAct = dto.physAct;
    this.workPlace = dto.workPlace;
  }

  public getPutDto(): AnamnesisGetDto {
    return {
      id: this.id!,
      education: this.education,
      sleepHours: this.sleepHours,
      alcohol: this.alcohol,
      smoking: this.smoking,
      sigaretsCount: this.sigaretsCount,
      smokingDuration: this.smokingDuration,
      physAct: this.physAct,
      workPlace: this.workPlace,
    };
  }

  public getPostDto(): AnamnesisPostDto {
    return {
      education: this.education,
      sleepHours: this.sleepHours,
      alcohol: this.alcohol,
      smoking: this.smoking,
      sigaretsCount: this.sigaretsCount,
      smokingDuration: this.smokingDuration,
      physAct: this.physAct,
      workPlace: this.workPlace,
    };
  }

  public deInit() {
    this.id = null;
    this.education = EducationEnum.Middle;
    this.sleepHours = 0;
    this.alcohol = false;
    this.smoking = false;
    this.sigaretsCount = 0;
    this.smokingDuration = 0;
    this.physAct = 0;
    this.workPlace = "";
  }
}

export default AnamnesisFormModel;
