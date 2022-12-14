import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useSimState } from "../../store/SimProvider";

const URL = "http://18.212.50.53:8080";
// const URL = "http://127.0.0.1:8000";

const Home = () => {
  const {
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
    run,
    setRun,
    glucose,
    adenine,
    lysine,
    adenineProducer,
    adenineCheater,
    lysineProducer,
    lysineCheater,
  } = useSimState();

  const media = {
    glucose,
    adenine,
    lysine,
  };

  const population = {
    adeop: 1,
    lysop: 1,
    adewt: 1,
    lyswt: 1,
    n_adeop: adenineProducer,
    n_lysop: lysineProducer,
    n_adewt: adenineCheater,
    n_lyswt: lysineCheater,
  };

  useEffect(() => {
    let sessionid = sessionStorage.getItem("sessionid");
    const sse = new EventSource(`${URL}/${sessionid}/stream`);

    function handleStream(data) {
      try {
        const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
        if (parsedJSON) {
          setDataSSE(parsedJSON);
        }
      } catch {
        console.log("population >>EMPTY RESPONSE");
      }
    }

    if (toggleRunSimulator) {
      sse.onmessage = (e) => {
        handleStream(e.data);
      };
    } else {
      sse.close();
    }

    sse.onerror = (e) => {
      sse.close();
    };

    if (closeSSE) {
      sse.close();
    }

    return () => {
      sse.close();
    };
  }, [closeSSE, toggleRunSimulator]);

  useEffect(() => {
    let sessionid = sessionStorage.getItem("sessionid");
    const sse = new EventSource(`${URL}/${sessionid}/glucose`);

    function handleStream(data) {
      try {
        const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
        // console.log("glucose >>", parsedJSON);
        if (parsedJSON.length !== 0) {
          setRealtimeGlucose(parsedJSON);
        }
      } catch {
        console.log("glucose >> EMPTY RESPONSE");
      }
    }

    if (toggleRunSimulator) {
      sse.onmessage = (e) => {
        handleStream(e.data);
      };
    } else {
      sse.close();
    }

    sse.onerror = (e) => {
      sse.close();
    };

    if (closeSSE) {
      sse.close();
    }

    return () => {
      sse.close();
    };
  }, [closeSSE, toggleRunSimulator]);

  useEffect(() => {
    let sessionid = sessionStorage.getItem("sessionid");
    const sse = new EventSource(`${URL}/${sessionid}/adenine`);

    function handleStream(data) {
      try {
        const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
        // console.log("adenine >>", parsedJSON);
        if (parsedJSON.length !== 0) {
          setRealtimeAdenine(parsedJSON);
        }
      } catch {
        console.log("adenine >> EMPTY RESPONSE");
      }
    }

    if (toggleRunSimulator) {
      sse.onmessage = (e) => {
        handleStream(e.data);
      };
    } else {
      sse.close();
    }

    sse.onerror = (e) => {
      sse.close();
    };

    if (closeSSE) {
      sse.close();
    }

    return () => {
      sse.close();
    };
  }, [closeSSE, toggleRunSimulator]);

  useEffect(() => {
    let sessionid = sessionStorage.getItem("sessionid");
    const sse = new EventSource(`${URL}/${sessionid}/lysine`);

    function handleStream(data) {
      try {
        const parsedJSON = JSON.parse(data.replaceAll(`'`, `"`));
        // console.log("lysine >>", parsedJSON);
        if (parsedJSON.length > 0) {
          setRealtimeLysine(parsedJSON);
        }
      } catch {
        console.log("lysine >> EMPTY RESPONSE");
      }
    }

    if (toggleRunSimulator) {
      sse.onmessage = (e) => {
        handleStream(e.data);
      };
    } else {
      sse.close();
    }

    sse.onerror = (e) => {
      sse.close();
    };

    if (closeSSE) {
      sse.close();
    }

    return () => {
      sse.close();
    };
  }, [closeSSE, toggleRunSimulator]);

  useEffect(() => {
    const minLen = Math.min(
      realtimeAdenine.length,
      realtimeGlucose.length,
      realtimeLysine.length
    );

    for (let i = 0; i < minLen; i++) {
      setEnvironment([
        ...environment,
        {
          glucose: realtimeGlucose[i],
          adenine: realtimeAdenine[i],
          lysine: realtimeLysine[i],
        },
      ]);
    }
  }, [realtimeAdenine, realtimeLysine, realtimeGlucose]);

  useEffect(() => {
    const payload = {
      population,
      media,
      run,
    };
    let sessionid = sessionStorage.getItem("sessionid");
    if (toggleRunSimulator) {
      axios
        .post(`${URL}/run/${sessionid}`, payload)
        .then((response) => {
          const json = response.data;
          json.responseData.map((data, i) => (data["time"] = i));
          setFinalData(json.responseData);
        })
        .then(() => setToggleRunSimulator(!toggleRunSimulator));
    }
  }, [toggleRunSimulator]);

  /**
   *
   * @returns Array of Population Distribution with species names from arrays of arrays
   */
  const getPopulationDistribution = () => {
    const output = [];
    const iRef = Object.keys(population).splice(0, 4);
    for (let i of iRef) {
      if (population[i] > 1) {
        for (let j = 0; j < population[i]; j++) output.push(`${i}${j + 1}`);
      } else {
        output.push(i);
      }
    }

    return output;
  };

  useEffect(() => {
    const populationDistribution = getPopulationDistribution();
    const specs_distribution = dataSSE && dataSSE.map((s) => s[0]);
    const specs_count = dataSSE && dataSSE.map((s) => s[1]);
    const opArr = specs_distribution
      ? specs_distribution.map((s) =>
          s.map((i) => populationDistribution[i - 1])
        )
      : [];
    const opObj = {};

    for (let i = 0; i < opArr.length; i++) {
      for (let j = 0; j < opArr[i].length; j++) {
        opObj[opArr[i][j]] = specs_count[i][j];
        setRealtimeData([...realtimeData, opObj]);
      }
    }
  }, [dataSSE]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Mutualisim</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full">
        <button
          className="p-3 border rounded border-violet-400 w-full mx-auto"
          onClick={() => setToggleRunSimulator(true)}
        >
          {toggleRunSimulator ? "Running..." : "Run Simulator"}
        </button>
        <p className="mx-auto max-w-4xl my-4">
          The graph below will plot the changing media and population sizes of
          strains in the community. You will also be able to download at table
          with the data
        </p>
        <Charts realtimeData={realtimeData} />
        <GCharts environment={environment} />
      </div>
    </div>
  );
};

export default Home;

const Charts = (props) => {
  const dataKey = Object.keys(props.realtimeData[0] || []);
  return (
    <LineChart
      width={1000}
      height={200}
      data={props.realtimeData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      className="mx-auto mt-4"
    >
      {dataKey.map((d) => (
        <Line type="basis" dataKey={d} stroke="#8884d8" dot={false} />
      ))}
      <CartesianGrid stroke="#3c3c3c" strokeDasharray="5 5" />
      <XAxis dataKey="time" />
      <YAxis domain={[0, 700]} />
      <Tooltip />
    </LineChart>
  );
};

const GCharts = (props) => {
  const dataKey = props.environment || [];
  // console.log(props.realtimeData);

  return (
    <LineChart
      width={1000}
      height={200}
      data={dataKey}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      className="mx-auto"
    >
      <Line type="monotone" dataKey="glucose" stroke="#8884d8" dot={false} />
      <Line type="monotone" dataKey="adenine" stroke="#3384d8" dot={false} />
      <Line type="monotone" dataKey="lysine" stroke="#5524d8" dot={false} />
      <CartesianGrid stroke="#3c3c3c" strokeDasharray="5 5" />
      <XAxis />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
