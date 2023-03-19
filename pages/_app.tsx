import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/style.css";
import Head from "next/head";
import { ColorModeContext, useMode } from "../styles/theme";
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
        <ThemeProvider theme={theme}>
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
