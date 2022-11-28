import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.scss";
import "../styles/_app.scss";
import "../styles/ArtDeco.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
