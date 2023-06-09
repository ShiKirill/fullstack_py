import React from "react";
import { observer } from "mobx-react";
import Dialog from "@mui/material/Dialog";
import { anamnesisStore } from "stores";
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
import { EducationEnum, educationTypes } from "shared";

const AnamnesisesForm = () => {
  return (
    <Dialog
      className={"modalWindow"}
      open={anamnesisStore.isFormVisible}
      onClose={anamnesisStore.closeForm}
      transitionDuration={0}
    >
      <DialogTitle>
        {anamnesisStore.anamnesisForm.id
          ? "Редактирование анамнез"
          : "Добавление анамнеза"}
      </DialogTitle>

      <DialogContent>
        <div className={"fieldsWrapper"}>
          <FormControl>
            <InputLabel id="educationSelect">Стадия АГ</InputLabel>
            <Select
              labelId="educationSelect"
              id="educationSelect"
              label={"Образование"}
              value={anamnesisStore.anamnesisForm.education}
              onChange={(event) => {
                anamnesisStore.anamnesisForm.changeEducation(
                  event.target.value as EducationEnum
                );
              }}
            >
              {Object.keys(educationTypes).map((educationKey: any) => {
                const key = educationKey as EducationEnum;

                return (
                  <MenuItem key={educationKey} value={educationKey}>
                    {educationTypes[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            required
            label="Сон(часов)"
            type={"number"}
            value={anamnesisStore.anamnesisForm.sleepHours}
            onChange={(event) => {
              anamnesisStore.anamnesisForm.changeSleepHours(
                +event.target.value
              );
            }}
          />

          <FormControlLabel
            control={
              <Checkbox checked={anamnesisStore.anamnesisForm.alcohol} />
            }
            onChange={(_, checked) =>
              anamnesisStore.anamnesisForm.changeAlcohol(checked)
            }
            label="Употребление алкоголя"
          />

          <FormControlLabel
            control={
              <Checkbox checked={anamnesisStore.anamnesisForm.smoking} />
            }
            onChange={(_, checked) =>
              anamnesisStore.anamnesisForm.changeSmoking(checked)
            }
            label="Курение"
          />

          <TextField
            required
            label="Количество сигарет"
            type={"number"}
            value={anamnesisStore.anamnesisForm.sigaretsCount}
            onChange={(event) => {
              anamnesisStore.anamnesisForm.changeSigaretsCount(
                +event.target.value
              );
            }}
          />

          <TextField
            required
            label="Продолжительность курения (лет)"
            type={"number"}
            value={anamnesisStore.anamnesisForm.smokingDuration}
            onChange={(event) => {
              anamnesisStore.anamnesisForm.changeSmokingDuration(
                +event.target.value
              );
            }}
          />

          <TextField
            required
            label="Физическая активность (часов в день)"
            type={"number"}
            value={anamnesisStore.anamnesisForm.physAct}
            onChange={(event) => {
              anamnesisStore.anamnesisForm.changePhysAct(+event.target.value);
            }}
          />

          <TextField
            required
            label="Место работы"
            value={anamnesisStore.anamnesisForm.workPlace}
            onChange={(event) => {
              anamnesisStore.anamnesisForm.changeWorkPlace(event.target.value);
            }}
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={anamnesisStore.closeForm}>Отмена</Button>
        <Button onClick={anamnesisStore.onSubmit}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
};
export default observer(AnamnesisesForm);
