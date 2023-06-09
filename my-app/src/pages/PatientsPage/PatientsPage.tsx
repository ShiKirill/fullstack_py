import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { observer } from "mobx-react";
import {
  anamnesisStore,
  apStudyStore,
  diseaseStore,
  patientsStore,
} from "stores";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PatientsForm from "./PatientsForm";

import "./PatientsPage.css";
import { useEffect } from "react";
import {
  GenderEnum,
  genders,
  HypotensStageEnum,
  hypotensStages,
} from "../../shared";

const PatientsPage = () => {
  useEffect(() => {
    patientsStore.getPatients();
    diseaseStore.getDiseases();
    apStudyStore.getApStudies();
    anamnesisStore.getAnamnesises();
  }, []);

  const columns: GridColDef[] = [
    { field: "fullName", headerName: "ФИО", width: 200 },
    { field: "age", headerName: "Возраст", width: 140 },
    {
      field: "gender",
      headerName: "Гендер",
      width: 140,
      valueGetter: (params) => {
        return genders[params.value as GenderEnum];
      },
    },
    {
      field: "height",
      headerName: "Высота",
      width: 140,
    },
    { field: "weight", headerName: "Вес", width: 140 },
    {
      field: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (row) => {
        const onEditClick = () => {
          patientsStore.showForm(row.row);
        };

        return (
          <div className={"customCell"}>
            <IconButton onClick={onEditClick}>
              <EditOutlinedIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <div className={"CommonPage"}>
      <span>
        <Button variant="contained" onClick={() => patientsStore.showForm()}>
          Добавить
        </Button>
      </span>

      <DataGrid
        loading={patientsStore.isPending}
        className={"table"}
        rows={patientsStore.patients}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />

      <PatientsForm />
    </div>
  );
};

export default observer(PatientsPage);
