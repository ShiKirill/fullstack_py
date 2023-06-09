import React from "react";
import { observer } from "mobx-react";
import Dialog from "@mui/material/Dialog";
import { apStudyStore } from "stores";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const ApStudiesForm = () => {
  return (
    <Dialog
      className={"modalWindow"}
      open={apStudyStore.isFormVisible}
      onClose={apStudyStore.closeForm}
      transitionDuration={0}
    >
      <DialogTitle>
        {apStudyStore.apStudyForm.id
          ? "Редактирование исследования АД"
          : "Добавление исследования АД"}
      </DialogTitle>

      <DialogContent>
        <div className={"fieldsWrapper"}>
          <TextField
            required
            label="САД-1"
            type={"number"}
            value={apStudyStore.apStudyForm.sapBefore}
            onChange={(event) => {
              apStudyStore.apStudyForm.changeSapBefore(+event.target.value);
            }}
          />

          <TextField
            required
            label="ДАД-1"
            type={"number"}
            value={apStudyStore.apStudyForm.dapBefore}
            onChange={(event) => {
              apStudyStore.apStudyForm.changeDapBefore(+event.target.value);
            }}
          />

          <TextField
            required
            label="САД-2"
            type={"number"}
            value={apStudyStore.apStudyForm.sapAfter}
            onChange={(event) => {
              apStudyStore.apStudyForm.changeSapAfter(+event.target.value);
            }}
          />

          <TextField
            required
            label="ДАД-2"
            type={"number"}
            value={apStudyStore.apStudyForm.dapAfter}
            onChange={(event) => {
              apStudyStore.apStudyForm.changeDapAfter(+event.target.value);
            }}
          />
        </div>
      </DialogContent>

      <DialogActions>
        <Button onClick={apStudyStore.closeForm}>Отмена</Button>
        <Button onClick={apStudyStore.onSubmit}>Подтвердить</Button>
      </DialogActions>
    </Dialog>
  );
};
export default observer(ApStudiesForm);
