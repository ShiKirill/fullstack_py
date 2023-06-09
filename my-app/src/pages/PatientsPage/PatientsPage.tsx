import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { observer } from "mobx-react";
import { patientsStore } from "../../stores";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

import "./PatientsPage.css";

const PatientsPage = () => {
  const columns: GridColDef[] = [
    { field: "fullName", headerName: "ФИО", width: 200 },
    { field: "age", headerName: "Возраст", width: 140 },
    {
      field: "gender",
      headerName: "Гендер",
      width: 140,
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
        console.log(row);

        return (
          <div className={"customCell"}>
            <IconButton onClick={() => {}}>
              <EditOutlinedIcon />
            </IconButton>
          </div>
        );
      },
    },
  ];

  return (
    <div className={"PatientsPage"}>
      <span>
        <Button variant="contained" onClick={() => {}}>
          Добавить
        </Button>
      </span>

      <DataGrid
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
    </div>
  );
};

export default observer(PatientsPage);
