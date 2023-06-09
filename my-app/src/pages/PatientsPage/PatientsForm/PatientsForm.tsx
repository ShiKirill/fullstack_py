import React from "react";
import { observer } from "mobx-react";
import Dialog from "@mui/material/Dialog";
import {
  anamnesisStore,
  apStudyStore,
  diseaseStore,
  patientsStore,
} from "stores";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { GenderEnum, genders } from "shared";

import "./PatientsForm.css";

const PatientsForm = () => {
  return (
    <Dialog
      className={"modalWindow"}
      open={patientsStore.isFormVisible}
      onClose={patientsStore.closeForm}
      transitionDuration={0}
    >
      <DialogTitle>
        {patientsStore.patientForm.id
          ? "Редактирование пациента"
          : "Создание пациента"}
      </DialogTitle>

      <DialogContent>
        <div className={"fieldsWrapper"}>
          <TextField
            required
            id="outlined-required"
            label="ФИО"
            value={patientsStore.patientForm.fullName}
            onChange={(event) => {
              patientsStore.patientForm.changeFullName(event.target.value);
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Возраст"
            type={"number"}
            value={patientsStore.patientForm.age}
            onChange={(event) => {
              patientsStore.patientForm.changeAge(+event.target.value);
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Вес"
            type={"number"}
            value={patientsStore.patientForm.weight}
            onChange={(event) => {
              patientsStore.patientForm.changeWeight(+event.target.value);
            }}
          />

          <TextField
            required
            id="outlined-required"
            label="Рост"
            type={"number"}
            value={patientsStore.patientForm.height}
            onChange={(event) => {
              patientsStore.patientForm.changeHeight(+event.target.value);
            }}
          />

          <FormControl>
            <InputLabel id="genderSelect">Гендер</InputLabel>
            <Select
              labelId="genderSelect"
              id="genderSelect"
              label={"Гендер"}
              value={patientsStore.patientForm.gender}
              onChange={(event) => {
                patientsStore.patientForm.changeGender(
                  event.target.value as GenderEnum
                );
              }}
            >
              {Object.keys(genders).map((genderKey: any) => {
                const key = genderKey as GenderEnum;

                return (
                  <MenuItem key={genderKey} value={genderKey}>
                    {genders[key]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="diseaseIdSelect">Заболевание</InputLabel>
            <Select
              labelId="diseaseIdSelect"
              id="diseaseIdSelect"
              label={"Заболевание"}
              value={patientsStore.patientForm.diseaseId ?? ""}
              onChange={(event) => {
                patientsStore.patientForm.changeDiseaseId(+event.target.value!);
              }}
            >
              {diseaseStore.diseaseIds.map((id: number) => {
                return (
                  <MenuItem key={id} value={id}>
                    {`Заболевание с ID ${id}`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="anamnesisIdSelect">Анамнез</InputLabel>
            <Select
              labelId="anamnesisIdSelect"
              id="anamnesisIdSelect"
              label={"Анамнез"}
              value={patientsStore.patientForm.anamnesisId ?? ""}
              onChange={(event) => {
                patientsStore.patientForm.changeAnamnesisId(
                  +event.target.value!
                );
              }}
            >
              {anamnesisStore.anamnesisIds.map((id: number) => {
                return (
                  <MenuItem key={id} value={id}>
                    {`Анамнез с ID ${id}`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <FormControl>
            <InputLabel id="apStudyIdSelect">Исследование АД</InputLabel>
            <Select
              labelId="apStudyIdSelect"
              id="apStudyIdSelect"
              label={"Исследование АД"}
              value={patientsStore.patientForm.apStudyId ?? ""}
              onChange={(event) => {
                patientsStore.patientForm.changeApStudyId(+event.target.value!);
              }}
            >
              {apStudyStore.apStudyIds.map((id: number) => {
                return (
                  <MenuItem key={id} value={id}>
                    {`Исследование АД с ID ${id}`}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={patientsStore.closeForm}>Отмена</Button>
        <Button onClick={patientsStore.onSubmit}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
};
export default observer(PatientsForm);
