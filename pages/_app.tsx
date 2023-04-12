import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SimProvider } from "../store/SimProvider";
import Footer from "../components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SimProvider>
      <Component {...pageProps} />
      <Footer />
    </SimProvider>
  );
}

export default MyApp;
