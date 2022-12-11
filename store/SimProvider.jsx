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
      glucose: null,
      adenine: 1,
      lysine: 2,
    },
  ]);
  const [closeSSE, setCloseSSE] = useState(false);
  const [population, setPopulation] = useState({
    adeop: 1,
    lysop: 1,
    adewt: 1,
    lyswt: 1,
    n_adeop: 10,
    n_lysop: 10,
    n_adewt: 10,
    n_lyswt: 10,
  });
  const [media, setMedia] = useState({
    glucose: 2,
    adenine: 1,
    lysine: 1,
  });
  const [run, setRun] = useState({
    transfer_p: 0.1,
    days: 1,
  });

  const providerValue = {
    realtimeData,
    setRealtimeData,
    realtimeGlucose,
    setRealtimeGlucose,
    realtimeAdenine,
    setRealtimeAdenine,
    environment,
    setEnvironment,
    media,
    setMedia,
    realtimeLysine,
    setRealtimeLysine,
    toggleRunSimulator,
    setToggleRunSimulator,
    closeSSE,
    setCloseSSE,
    population,
    setPopulation,
    dataSSE,
    setDataSSE,
    finalData,
    setFinalData,
    run,
    setRun,
  };

  return (
    <SimStateContext.Provider value={providerValue}>
      {children}
    </SimStateContext.Provider>
  );
};
