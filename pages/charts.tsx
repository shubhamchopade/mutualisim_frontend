import { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const Charts = dynamic(() => import("../components/charts/Charts"), {
  ssr: false,
});

const Chartss: NextPage = () => {
  return <Charts />;
};

export default Chartss;
