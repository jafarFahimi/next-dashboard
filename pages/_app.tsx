import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material"; // CssBaseline reset css
import "../styles/style.css";
import Head from "next/head";
import { ColorModeContext, useMode } from "../styles/theme";
import { Theme } from "@emotion/react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [theme, colorMode]: any = useMode();

  return (
    <>
      <Head>
        <title>Admin Dashboard Design</title>
        <link rel="icon" href="chart-logo.png" />
      </Head>

      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme as Theme}>
          <ProSidebarProvider>
            <CssBaseline />
            <div className="app">
              <Sidebar />
              <main className="content">
                <Navbar />
                <Component {...pageProps} />
              </main>
            </div>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
