import { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  return (
    <>
      <Head>
        <title> Twitter Design</title>
        <link rel="icon" href="logo.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
