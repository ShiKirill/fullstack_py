import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import PatientsPage from "../PatientsPage";
import DisesasesPage from "../DiseasesPage";
import AnamnesisesPage from "../AnamnesisesPage";
import ApStudiesPage from "../ApStudiesPage";

const Tabs = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Таблица пациентов" value="1" />
              <Tab label="Таблица заболеваний" value="2" />
              <Tab label="Таблица анамнезов" value="3" />
              <Tab label="Таблица исследований АД" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <PatientsPage />
          </TabPanel>
          <TabPanel value="2">
            <DisesasesPage />
          </TabPanel>
          <TabPanel value="3">
            <AnamnesisesPage />
          </TabPanel>
          <TabPanel value="4">
            <ApStudiesPage />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default Tabs;
