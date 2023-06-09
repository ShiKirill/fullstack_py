import { makeAutoObservable } from "mobx";
import {
  DiseaseGetDto,
  DiseasePostDto,
  HypotenseRiskEnum,
  HypotensStageEnum,
} from "../index";

class DiseaseFormModel {
  public id: null | number = null;
  public pulse = 0;
  public knowAH = false;
  public useHypotensive = false;
  public hasDiseases = false;
  public hypotensStage = HypotensStageEnum.Unknown;
  public hypotensRisk = HypotenseRiskEnum.Unknown;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  public changePulse(pulse: number) {
    this.pulse = pulse;
  }

  public changeKnowAH(knowAH: boolean) {
    this.knowAH = knowAH;
  }

  public changeUseHypotensive(useHypotensive: boolean) {
    this.useHypotensive = useHypotensive;
  }

  public changeHasDiseases(hasDiseases: boolean) {
    this.hasDiseases = hasDiseases;
  }
  public changeHypotensStage(hypotensStage: HypotensStageEnum) {
    this.hypotensStage = hypotensStage;
  }

  public changeHypotensRisk(hypotensRisk: HypotenseRiskEnum) {
    this.hypotensRisk = hypotensRisk;
  }

  public updateFromDto(dto: DiseaseGetDto) {
    this.id = dto.id;
    this.pulse = dto.pulse;
    this.knowAH = dto.knowAH;
    this.useHypotensive = dto.useHypotensive;
    this.hasDiseases = dto.hasDiseases;
    this.hypotensStage = dto.hypotensStage;
    this.hypotensRisk = dto.hypotensRisk;
  }

  public getPutDto(): DiseaseGetDto {
    return {
      id: this.id!,
      pulse: this.pulse,
      knowAH: this.knowAH,
      useHypotensive: this.useHypotensive,
      hasDiseases: this.hasDiseases,
      hypotensStage: this.hypotensStage,
      hypotensRisk: this.hypotensRisk,
    };
  }

  public getPostDto(): DiseasePostDto {
    return {
      pulse: this.pulse,
      knowAH: this.knowAH,
      useHypotensive: this.useHypotensive,
      hasDiseases: this.hasDiseases,
      hypotensStage: this.hypotensStage,
      hypotensRisk: this.hypotensRisk,
    };
  }

  public deInit() {
    this.id = null;
    this.pulse = 0;
    this.knowAH = false;
    this.useHypotensive = false;
    this.hasDiseases = false;
    this.hypotensStage = HypotensStageEnum.Unknown;
    this.hypotensRisk = HypotenseRiskEnum.Unknown;
  }
}

export default DiseaseFormModel;
