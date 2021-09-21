import { NavLink } from "react-router-dom";
import styles from "./AppNavigation.module.scss";

import React, { useState } from "react";
import Menu from "../../../UI/Icons/Menu/Menu";

const AppNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCallback = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
  };

  const navLinksStyles = isOpen
    ? `${styles["navigation-container"]} ${styles["navigation-container--open"]}`
    : styles["navigation-container"];

  return (
    <>
      <div className={styles["menu-icon-container"]}>
        <Menu color="white" size={60} clickCallback={toggleCallback}></Menu>
      </div>
      <nav className={navLinksStyles}>
        <NavLink
          activeClassName={styles["link--active"]}
          className={styles.link}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName={styles["link--active"]}
          className={styles.link}
          to="/projects"
        >
          Projects
        </NavLink>
        <NavLink
          activeClassName={styles["link--active"]}
          className={styles.link}
          to="/team"
        >
          Team
        </NavLink>
        <NavLink
          activeClassName={styles["link--active"]}
          className={styles.link}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};

export default AppNavigation;
