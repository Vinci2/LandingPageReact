import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import "./App.scss";
import AppHeader from "./domains/AppHeader/AppHeader";
import AppBody from "./domains/AppBody/AppBody";
import AppFooter from "./domains/AppFooter/AppFooter";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ec5800",
    },
    secondary: {
      main: "#13151d",
    },
  },
  shape: {
    borderRadius: 300,
  },
  props: {
    MuiButton: {
      color: "primary",
      variant: "contained",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: 600,
      },
      sizeLarge: {
        padding: "15px 40px",
      },
    },
  },
});

function App() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      setScrolledToTop(!e.target.scrollingElement.scrollTop);
    });
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AppHeader isScrolledToTop={scrolledToTop}></AppHeader>
        <AppBody></AppBody>
        <AppFooter></AppFooter>
      </ThemeProvider>
    </div>
  );
}

export default App;
