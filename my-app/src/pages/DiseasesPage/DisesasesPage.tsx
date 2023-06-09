import { observer } from "mobx-react";
import { useEffect } from "react";
import { diseaseStore } from "../../stores";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import * as React from "react";
import DiseasesForm from "./DiseasesForm";
import {
  HypotenseRiskEnum,
  hypotensRisks,
  HypotensStageEnum,
  hypotensStages,
} from "shared";

const DisesasesPage = () => {
  useEffect(() => {
    diseaseStore.getDiseases();
  }, []);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 140,
    },
    { field: "pulse", headerName: "Пульс", width: 200 },
    {
      field: "knowAH",
      headerName: "Осв. АГ",
      width: 140,
      valueGetter: (params) => {
        return params.value ? "+" : "-";
      },
    },
    {
      field: "useHypotensive",
      headerName: "Испол. гипотенз.",
      width: 200,
      valueGetter: (params) => {
        return params.value ? "+" : "-";
      },
    },
    {
      field: "hasDiseases",
      headerName: "Наличие заболеваний",
      width: 140,
      valueGetter: (params) => {
        return params.value ? "+" : "-";
      },
    },
    {
      field: "hypotensStage",
      headerName: "Стадия АГ",
      width: 140,
      valueGetter: (params) => {
        return hypotensStages[params.value as HypotensStageEnum];
      },
    },
    {
      field: "hypotensRisk",
      headerName: "Риск АГ",
      width: 140,
      valueGetter: (params) => {
        return hypotensRisks[params.value as HypotenseRiskEnum];
      },
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
        <Button variant="contained" onClick={() => diseaseStore.showForm()}>
          Добавить
        </Button>
      </span>

      <DataGrid
        loading={diseaseStore.isPending}
        className={"table"}
        rows={diseaseStore.diseases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20]}
      />

      <DiseasesForm />
    </div>
  );
};

export default observer(DisesasesPage);
