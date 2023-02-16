import React, { useEffect } from "react";
import Dashboard from "../components/dashboard";
import Charts from "../components/charts";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../components/nav";

const Simulator = () => {
  useEffect(() => {
    let data = sessionStorage.getItem("sessionid");

    if (!data) {
      sessionStorage.setItem("sessionid", uuidv4());
    }
  }, []);

  return (
    <div className="flex">
      <Navbar />
      <Dashboard />
      <Charts />
    </div>
  );
};

export default Simulator;
