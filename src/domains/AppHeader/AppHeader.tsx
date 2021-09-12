import React, { useEffect, useState } from "react";
import AppBrand from "./AppBrand/AppBrand";
import AppNavigation from "./AppNavigation/AppNavigation";
import styles from "./AppHeader.module.scss";
import { useHistory } from "react-router";

interface props {
  isScrolledToTop: boolean;
}

const AppHeader: React.FunctionComponent<props> = ({ isScrolledToTop }) => {
  const history = useHistory();
  const [isOnHome, setIsOnHome] = useState(true);

  useEffect(() => {
    const unregisterHistoryListener = history.listen((location) => {
      setIsOnHome(isOnHomeRoute(location));
    });
    return () => unregisterHistoryListener();
  }, []);

  const isOutOfTopClass =
    isScrolledToTop && isOnHome ? styles["home-header"] : "";

  const isAnimated = isOnHome ? styles.animate : "";

  return (
    <div
      className={`${styles["header-container"]} ${isOutOfTopClass} ${isAnimated} `}
    >
      <AppBrand></AppBrand>
      <AppNavigation></AppNavigation>
    </div>
  );
};

export default AppHeader;

const isOnHomeRoute = (location: any) => {
  return location.pathname === "/home";
};
