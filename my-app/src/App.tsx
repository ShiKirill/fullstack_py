import React, { useEffect } from "react";

import { diseaseStore } from "./stores";
import Tabs from "./pages/Tabs";

import "sanitize.css";
import "./App.css";

function App() {
  useEffect(() => {
    diseaseStore.getDiseases();
  }, []);

  return (
    <div className="App">
      <Tabs />
    </div>
  );
}

export default App;
