import React from "react";
import { Route, Redirect } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";
import Team from "../Team/Team";
import styles from "./AppBody.module.scss";

const AppBody: React.FunctionComponent = () => {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home"></Redirect>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <div className={styles["sub-pages-container"]}>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/team">
          <Team></Team>
        </Route>
        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>
      </div>
    </>
  );
};

export default AppBody;
