import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Charts, GCharts } from "./Charts";
import useStartSimulator from "./useStartSimulator";
import { URL, useSimState } from "../../store/SimProvider";
import axios from "axios";

const Page = () => {
  const { toggleRunSimulator, setToggleRunSimulator, finalResponse } =
    useSimState();
  const {
    realtimeData,
    setRealtimeData,
    environment,
    setDataSSE,
    initialPopulation,
    setInitialPopulation,
  } = useStartSimulator(toggleRunSimulator, setToggleRunSimulator);

  const router = useRouter();

  //  let user download the file in browser
  const downloadCSV = () => {
    let sessionid = sessionStorage.getItem("sessionid");
    axios.get(`${URL}/${sessionid}/csv`).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `mutualism-${new Date().toLocaleString()}.csv`
      );
      document.body.appendChild(link);
      link.click();
    });
  };

  const handleRun = () => {
    if (realtimeData.length > 0) {
      router.reload();
    } else {
      setToggleRunSimulator(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className="w-full">
        <div className="flex">
          <button
            className={`p-3 mt-4 border rounded transform btn border-violet-400 mx-auto ${
              toggleRunSimulator && "disabled pointer-events-none loading"
            }`}
            onClick={handleRun}
          >
            {toggleRunSimulator
              ? "Running"
              : realtimeData.length > 0
              ? "Re-run Simulator"
              : "Run Simulator"}
          </button>
          {/* DOWNLOAD CSV */}
          {!toggleRunSimulator && realtimeData.length > 0 && (
            <button
              className="p-3 mt-4 border rounded transform btn border-violet-400 mx-auto"
              onClick={downloadCSV}
            >
              Download CSV
            </button>
          )}
          <p className="mx-auto max-w-4xl my-4 ml-6">
            The graph below will plot the changing media and population sizes of
            strains in the community. You will also be able to download at table
            with the data
          </p>
        </div>

        <Charts realtimeData={realtimeData} />
        <GCharts environment={environment} />
      </div>
    </div>
  );
};

export default Page;
