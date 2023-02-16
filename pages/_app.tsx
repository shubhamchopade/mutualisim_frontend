import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SimProvider } from "../store/SimProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimProvider>
      <Component {...pageProps} />
    </SimProvider>
  );
}

export default MyApp;
