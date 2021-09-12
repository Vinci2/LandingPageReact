import React, { useState, useEffect } from "react";
import "./App.scss";
import AppHeader from "./domains/AppHeader/AppHeader";
import AppBody from "./domains/AppBody/AppBody";

function App() {
  const [scrolledToTop, setScrolledToTop] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", (e: any) => {
      setScrolledToTop(!e.target.scrollingElement.scrollTop);
    });
  }, []);

  return (
    <div className="App">
      <AppHeader isScrolledToTop={scrolledToTop}></AppHeader>
      <AppBody></AppBody>
    </div>
  );
}

export default App;
