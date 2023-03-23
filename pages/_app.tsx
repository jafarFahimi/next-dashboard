import { AppProps } from "next/app";
import { Container, CssBaseline, ThemeProvider } from "@mui/material"; // CssBaseline reset css
import "../styles/style.css";
import Head from "next/head";
import { ColorModeContext, useMode } from "../styles/theme";
import { Theme } from "@emotion/react";
import Navbar from "../components/layout/Navbar";
import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [theme, colorMode]: any = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

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
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Navbar setIsSidebar={setIsSidebar} />
                <Container>
                  <Component {...pageProps} />
                </Container>
              </main>
            </div>
          </ProSidebarProvider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
