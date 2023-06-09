import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { observer } from "mobx-react";
import { anamnesisStore } from "stores";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import { useEffect } from "react";
import { EducationEnum, educationTypes } from "../../shared";
import AnamnesisesForm from "./AnamnesisesForm";

const AnamnesisesPage = () => {
  useEffect(() => {
    anamnesisStore.getAnamnesises();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    {
      field: "education",
      headerName: "Образование",
      width: 200,
      valueGetter: (params) => {
        return educationTypes[params.value as EducationEnum];
      },
    },
    { field: "sleepHours", headerName: "Сон (часов)", width: 140 },
    {
      field: "alcohol",
      headerName: "Употребление алкоголя",
      width: 140,
      valueGetter: (params) => {
        return params.value ? "+" : "-";
      },
    },
    {
      field: "smoking",
      headerName: "Курение",
      width: 140,
      valueGetter: (params) => {
        return params.value ? "+" : "-";
      },
    },
    { field: "sigaretsCount", headerName: "Количество сигарет", width: 140 },
    {
      field: "smokingDuration",
      headerName: "Длительность курения",
      width: 140,
    },
    {
      field: "physAct",
      headerName: "Физическая активность (ч/день)",
      width: 140,
    },
    { field: "workPlace", headerName: "Место работы", width: 140 },
    {
      field: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (row) => {
        const onEditClick = () => {
          anamnesisStore.showForm(row.row);
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
        <Button variant="contained" onClick={() => anamnesisStore.showForm()}>
          Добавить
        </Button>
      </span>

      <DataGrid
        loading={anamnesisStore.isPending}
        className={"table"}
        rows={anamnesisStore.anamnesises}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />

      <AnamnesisesForm />
    </div>
  );
};

export default observer(AnamnesisesPage);
