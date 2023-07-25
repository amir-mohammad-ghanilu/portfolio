import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2";
import { darkTheme, lightTheme } from "./themes/theme";
function MainLayout({ children, mode }) {
  const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <>
      <CacheProvider value={cacheRTL}>
        {" "}
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              {" "}
              <title> وب سایت | امیر محمد غنی لو </title>
            </Helmet>
            <Grid container sx={{ height: "100vh" }}>
              {children}
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default MainLayout;
