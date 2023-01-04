import { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import Dashboard from "../components/dashboard";
import Range from "../components/range";
import Charts from "../components/charts";
import Landing from "./landing";

// TODO
// useContext for state management
// Get input data from user and send it as payload to the API

const Home: NextPage = () => {
  return (
    <div>
      <Landing />
    </div>
  );
};

export default Home;
