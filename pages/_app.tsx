import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/style.css";
import Head from "next/head";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title>Next Admin Dashboard Design</title>
        <link rel="icon" href="chart-logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
