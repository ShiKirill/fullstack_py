import { makeAutoObservable } from "mobx";
import {
  AnamnesisGetDto,
  AnamnesisPostDto,
  ApStudyGetDto,
  ApStudyPostDto,
  EducationEnum,
} from "../index";

class ApStudyFormModel {
  public id: null | number = null;
  public sapBefore = 0;
  public dapBefore = 0;
  public sapAfter = 0;
  public dapAfter = 0;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public changeSapBefore(sapBefore: number) {
    this.sapBefore = sapBefore;
  }

  public changeDapBefore(dapBefore: number) {
    this.dapBefore = dapBefore;
  }

  public changeSapAfter(sapAfter: number) {
    this.sapAfter = sapAfter;
  }

  public changeDapAfter(dapAfter: number) {
    this.dapAfter = dapAfter;
  }

  public updateFromDto(dto: ApStudyGetDto) {
    this.id = dto.id;
    this.sapBefore = dto.sapBefore;
    this.dapBefore = dto.dapBefore;
    this.sapAfter = dto.sapAfter;
    this.dapAfter = dto.dapAfter;
  }

  public getPutDto(): ApStudyGetDto {
    return {
      id: this.id!,
      sapBefore: this.sapBefore,
      dapBefore: this.dapBefore,
      sapAfter: this.sapAfter,
      dapAfter: this.dapAfter,
    };
  }

  public getPostDto(): ApStudyPostDto {
    return {
      sapBefore: this.sapBefore,
      dapBefore: this.dapBefore,
      sapAfter: this.sapAfter,
      dapAfter: this.dapAfter,
    };
  }

  public deInit() {
    this.id = null;
    this.sapBefore = 0;
    this.dapBefore = 0;
    this.sapAfter = 0;
    this.dapAfter = 0;
  }
}

export default ApStudyFormModel;
