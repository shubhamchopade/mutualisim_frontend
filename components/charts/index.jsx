import axios from "axios";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

// const URL = "http://18.212.50.53:8080";
const URL = "http://127.0.0.1:8000";

const Home = () => {
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

  useEffect(() => {
    const sse = new EventSource(`${URL}/stream`);

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
    const sse = new EventSource(`${URL}/glucose`);

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
    const sse = new EventSource(`${URL}/adenine`);

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
    const sse = new EventSource(`${URL}/lysine`);

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
    console.group("Environment");
    // console.log("realtimeAdenine", realtimeAdenine);
    // console.log(realtimeLysine);
    // console.log(realtimeGlucose);
    console.log(environment);
    console.groupEnd();

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
    if (toggleRunSimulator) {
      axios
        .post(`${URL}/run`, payload)
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
    // console.log("specs_distribution", specs_count, opArr);
  }, [dataSSE]);

  // console.log(finalData);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Charts realtimeData={realtimeData} />
        <GCharts environment={environment} />
      </div>

      <button
        className="p-3 border rounded border-violet-400"
        onClick={() => setToggleRunSimulator(true)}
      >
        {toggleRunSimulator ? "Running..." : "Run Simulator"}
      </button>
    </div>
  );
};

export default Home;

const Charts = (props) => {
  const dataKey = Object.keys(props.realtimeData[0] || []);
  // console.log(props.realtimeData);

  return (
    <LineChart
      width={1000}
      height={300}
      data={props.realtimeData}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      {dataKey.map((d) => (
        <Line type="monotone" dataKey={d} stroke="#8884d8" />
      ))}
      {/* <Line type="monotone" dataKey="n_adeop" stroke="#8884d8" />
      <Line type="monotone" dataKey="n_lysop" stroke="#3384d8" />
      <Line type="monotone" dataKey="n_adewt" stroke="#5524d8" /> */}
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
      height={300}
      data={dataKey}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
      <Line type="monotone" dataKey="adenine" stroke="#3384d8" />
      <Line type="monotone" dataKey="lysine" stroke="#5524d8" />
      <CartesianGrid stroke="#3c3c3c" strokeDasharray="5 5" />
      <XAxis />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
