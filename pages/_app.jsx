import React from "react";
import MyApp from "../components/MyApp.js";
import styles from "../styles/global.css";
import stylesIndex from "../styles/index.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MyApp Component={Component} pageProps={pageProps} />
    </>
  );
}
