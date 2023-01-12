import React, { useEffect } from "react";
import Dashboard from "../components/dashboard";
import Charts from "../components/charts";
import { v4 as uuidv4 } from "uuid";

const Simulator = () => {
  useEffect(() => {
    let data = sessionStorage.getItem("sessionid");

    if (!data) {
      sessionStorage.setItem("sessionid", uuidv4());
    }
  }, []);

  return (
    <div>
      <Dashboard />
      <Charts />
    </div>
  );
};

export default Simulator;
