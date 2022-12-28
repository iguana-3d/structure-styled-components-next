import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeContext";
import GlobalStyle from "../styles/globalStyle";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Zero Lab</title>
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
