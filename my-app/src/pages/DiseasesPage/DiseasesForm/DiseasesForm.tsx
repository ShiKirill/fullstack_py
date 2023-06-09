import React from "react";
import { observer } from "mobx-react";
import Dialog from "@mui/material/Dialog";
import { diseaseStore } from "stores";
import {
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  HypotenseRiskEnum,
  hypotensRisks,
  HypotensStageEnum,
  hypotensStages,
} from "shared";

const DiseasesForm = () => {
  return (
    <Dialog
      className={"modalWindow"}
      open={diseaseStore.isFormVisible}
      onClose={diseaseStore.closeForm}
      transitionDuration={0}
    >
      <DialogTitle>
        {diseaseStore.diseaseForm.id
          ? "Редактирование заболевания"
          : "Добавление заболевания"}
      </DialogTitle>

      <DialogContent>
        <div className={"fieldsWrapper"}>
          <TextField
            required
            label="Пульс"
            type={"number"}
            value={diseaseStore.diseaseForm.pulse}
            onChange={(event) => {
              diseaseStore.diseaseForm.changePulse(+event.target.value);
            }}
          />

          <FormControlLabel
            control={<Checkbox checked={diseaseStore.diseaseForm.knowAH} />}
            onChange={(_, checked) =>
              diseaseStore.diseaseForm.changeKnowAH(checked)
            }
            label="Осведомлённость об АГ"
          />

          <FormControlLabel
            control={
              <Checkbox checked={diseaseStore.diseaseForm.useHypotensive} />
            }
            onChange={(_, checked) =>
              diseaseStore.diseaseForm.changeUseHypotensive(checked)
            }
            label="Приём гипотензивных средств"
          />

          <FormControlLabel
            control={
              <Checkbox checked={diseaseStore.diseaseForm.hasDiseases} />
            }
            onChange={(_, checked) =>
              diseaseStore.diseaseForm.changeHasDiseases(checked)
            }
            label="Наличие заболеваний (ССЗ, ЦВЗ, СД...)"
          />

          <FormControl>
            <InputLabel id="hypotensStageSelect">Стадия АГ</InputLabel>
            <Select
              labelId="hypotensStageSelect"
              id="hypotensStageSelect"
              label={"Стадия АГ"}
              value={diseaseStore.diseaseForm.hypotensStage}
              onChange={(event) => {
                diseaseStore.diseaseForm.changeHypotensStage(
                  event.target.value as HypotensStageEnum
                );
              }}
            >
              {Object.keys(hypotensStages).map((hypotensStageKey: any) => {
                const key = hypotensStageKey as HypotensStageEnum;

                return (
                  <MenuItem key={hypotensStageKey} value={hypotensStageKey}>
                    {hypotensStages[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="hypotensRiskSelect">Риск АГ</InputLabel>
            <Select
              labelId="hypotensRiskSelect"
              id="hypotensRiskSelect"
              label={"Риск АГ"}
              value={diseaseStore.diseaseForm.hypotensRisk}
              onChange={(event) => {
                diseaseStore.diseaseForm.changeHypotensRisk(
                  event.target.value as HypotenseRiskEnum
                );
              }}
            >
              {Object.keys(hypotensRisks).map((hypotensRiskKey: any) => {
                const key = hypotensRiskKey as HypotenseRiskEnum;

                return (
                  <MenuItem key={hypotensRiskKey} value={hypotensRiskKey}>
                    {hypotensRisks[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={diseaseStore.closeForm}>Отмена</Button>
        <Button onClick={diseaseStore.onSubmit}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
};
export default observer(DiseasesForm);
