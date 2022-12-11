import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/nav";
import { SimProvider } from "../store/SimProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimProvider>
      <div>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </SimProvider>
  );
}

export default MyApp;
