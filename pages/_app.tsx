import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/_app.css";
import "../styles/ArtDeco.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
