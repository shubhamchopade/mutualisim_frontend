import styles from "../../styles/Home.module.css";
import { Charts, GCharts } from "./Charts";
import useStartSimulator from "./useStartSimulator";

const Home = () => {
  const {
    realtimeData,
    environment,
    toggleRunSimulator,
    setToggleRunSimulator,
  } = useStartSimulator();

  return (
    <div className={styles.container}>
      <div className="w-full">
        <button
          className="p-3 mt-4 border rounded border-violet-400 w-full mx-auto"
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
