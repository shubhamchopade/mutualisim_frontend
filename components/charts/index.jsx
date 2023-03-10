import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";
import { Charts, GCharts } from "./Charts";
import useStartSimulator from "./useStartSimulator";

const Home = () => {
  const {
    realtimeData,
    setRealtimeData,
    environment,
    toggleRunSimulator,
    setToggleRunSimulator,
    setDataSSE,
    initialPopulation,
    setInitialPopulation,
  } = useStartSimulator();
  const router = useRouter();

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

export default Home;
