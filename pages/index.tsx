import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Charts from "../components/Charts";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const data1 = [
    { name: "5 min", n_adeop: 10, n_lysop: 20, n_adewt: 0, n_lyswt: 10 },
    { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
    { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
    { name: "10 min", n_adeop: 20, n_lysop: 50, n_adewt: 40, n_lyswt: 60 },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Charts />
      </div>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
