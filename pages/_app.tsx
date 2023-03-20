import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "../styles/globals.css";
import "../styles/style.css";
import Head from "next/head";
import { ColorModeContext, useMode } from "../styles/theme";
import { Theme } from "@emotion/react";
// CssBaseline reset css

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [theme, colorMode] = useMode();
  return (
    <>
      <Head>
        <title>Next Admin Dashboard Design</title>
        <link rel="icon" href="chart-logo.png" />
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme as Theme}>
          <CssBaseline />
          <main className="content">
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
