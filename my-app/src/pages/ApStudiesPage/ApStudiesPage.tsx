import { observer } from "mobx-react";
import { useEffect } from "react";
import { apStudyStore, diseaseStore } from "../../stores";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import * as React from "react";
import ApStudiesForm from "./ApStudiesForm";

const ApStudiesPage = () => {
  useEffect(() => {
    apStudyStore.getApStudies();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 100,
    },
    { field: "sapBefore", headerName: "САД-1", width: 140 },
    {
      field: "dapBefore",
      headerName: "ДАД-1",
      width: 140,
    },
    {
      field: "sapAfter",
      headerName: "САД-2",
      width: 140,
    },
    {
      field: "dapAfter",
      headerName: "САД-2",
      width: 140,
    },
    {
      field: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (row) => {
        const onEditClick = () => {
          diseaseStore.showForm(row.row);
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
        <Button variant="contained" onClick={() => apStudyStore.showForm()}>
          Добавить
        </Button>
      </span>

      <DataGrid
        loading={apStudyStore.isPending}
        className={"table"}
        rows={apStudyStore.apStudies}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />

      <ApStudiesForm />
    </div>
  );
};

export default observer(ApStudiesPage);
