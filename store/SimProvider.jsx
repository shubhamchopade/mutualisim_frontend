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
  const [toggleRunSimulator, setToggleRunSimulator] = useState(false);
  const [dataSSE, setDataSSE] = useState([]);
  const [finalData, setFinalData] = useState([]);
  const [realtimeData, setRealtimeData] = useState([]);
  const [realtimeGlucose, setRealtimeGlucose] = useState([]);
  const [realtimeAdenine, setRealtimeAdenine] = useState([]);
  const [realtimeLysine, setRealtimeLysine] = useState([]);
  const [environment, setEnvironment] = useState([
    {
      glucose: 1,
      adenine: 1,
      lysine: 1,
    },
  ]);
  const [closeSSE, setCloseSSE] = useState(false);

  const [adenineProducer, setAdenineProducer] = useState(10);
  const [adenineCheater, setAdenineCheater] = useState(20);
  const [lysineProducer, setLysineProducer] = useState(10);
  const [lysineCheater, setLysineCheater] = useState(20);

  const [species, setSpecies] = useState({
    adeop: 2,
    adewt: 2,
    lysop: 2,
    lyswt: 2,
  });

  const [glucose, setGlucose] = useState(1);
  const [adenine, setAdenine] = useState(1);
  const [lysine, setLysine] = useState(1);

  const [days, setDays] = useState(1);

  const [navToggled, setNavToggled] = useState(false);

  const providerValue = {
    realtimeData,
    setRealtimeData,
    realtimeGlucose,
    setRealtimeGlucose,
    realtimeAdenine,
    setRealtimeAdenine,
    environment,
    setEnvironment,
    realtimeLysine,
    setRealtimeLysine,
    toggleRunSimulator,
    setToggleRunSimulator,
    closeSSE,
    setCloseSSE,
    dataSSE,
    setDataSSE,
    finalData,
    setFinalData,
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
  };

  return (
    <SimStateContext.Provider value={providerValue}>
      {children}
    </SimStateContext.Provider>
  );
};
