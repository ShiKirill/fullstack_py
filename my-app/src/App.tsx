import React, { useEffect } from "react";

import { patientsStore } from "./stores";
import Tabs from "./pages/Tabs";

import "./App.css";

function App() {
  useEffect(() => {
    patientsStore.getPatients();
  }, []);

  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
