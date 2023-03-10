import React, { useContext, useState } from "react";

// @flow

const SimStateContext = React.createContext();

export const useSimState = () => {
  const state = useContext(SimStateContext);

  if (!state) {
    throw new Error("useAppState must be used within SimStateProvider");
  }

  return state;
};

const env = process.env.NODE_ENV || "development";
export const URL =
  env == "development"
    ? process.env.NEXT_PUBLIC_DEV_API
    : process.env.NEXT_PUBLIC_PROD_API;

export const SimProvider = ({ children }) => {
  const [dataSSE, setDataSSE] = useState([]);

  const [environment, setEnvironment] = useState([
    {
      glucose: 2,
      adenine: 1,
      lysine: 1,
    },
  ]);
  const [closeSSE, setCloseSSE] = useState(false);

  const [initialArr, setInitialArr] = useState([]);

  // Set the initial values for the species
  const [adenineProducer, setAdenineProducer] = useState(10);
  const [adenineCheater, setAdenineCheater] = useState(20);
  const [lysineProducer, setLysineProducer] = useState(10);
  const [lysineCheater, setLysineCheater] = useState(20);

  // Set the initial values for the species dropdown
  const [species, setSpecies] = useState({
    adeop: 2,
    adewt: 2,
    lysop: 2,
    lyswt: 2,
  });

  // Set the initial values for the environment
  const [glucose, setGlucose] = useState(1);
  const [adenine, setAdenine] = useState(1);
  const [lysine, setLysine] = useState(1);

  const [days, setDays] = useState(3);

  const [navToggled, setNavToggled] = useState(false);

  const [realtimeCount, setRealtimeCount] = useState(0);

  const providerValue = {
    environment,
    setEnvironment,
    closeSSE,
    setCloseSSE,
    dataSSE,
    setDataSSE,
    glucose,
    setGlucose,
    adenine,
    setAdenine,
    lysine,
    setLysine,
    adenineProducer,
    setAdenineProducer,
    adenineCheater,
    setAdenineCheater,
    lysineProducer,
    setLysineProducer,
    lysineCheater,
    setLysineCheater,
    navToggled,
    setNavToggled,
    species,
    setSpecies,
    days,
    setDays,
    initialArr,
    setInitialArr,
    realtimeCount,
    setRealtimeCount,
  };

  return (
    <SimStateContext.Provider value={providerValue}>
      {children}
    </SimStateContext.Provider>
  );
};
