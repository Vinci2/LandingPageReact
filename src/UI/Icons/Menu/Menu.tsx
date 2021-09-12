import React, { useState } from "react";
import styles from "./Menu.module.scss";

interface props {
  clickCallback: (isOpen: boolean) => void;
  initState?: boolean;
  size?: number;
  color?: string;
}

const Menu: React.FunctionComponent<props> = ({
  clickCallback,
  size = 24,
  initState = false,
  color = "black",
}) => {
  const [isOpen, setIsOpen] = useState(initState);

  const clickHandler = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    clickCallback(newIsOpen);
  };

  const left = isOpen
    ? `${styles.animate} ${styles["move-left"]}`
    : styles.animate;

  const right = isOpen
    ? `${styles.animate} ${styles["move-right"]}`
    : styles.animate;
  return (
    <div
      className={styles.container}
      onClick={clickHandler}
      style={{ height: size, width: size, color }}
    >
      <svg width="100%" viewBox="0 0 400 400">
        <title>Layer 1</title>
        <line
          className={left}
          stroke="currentColor"
          strokeWidth="20"
          id="edge-line"
          y2="100"
          x2="350"
          y1="100"
          x1="50"
          fill="currentColor"
        />
        <line
          className={styles.animate}
          stroke="currentColor"
          strokeWidth="20"
          id="mid-line-1"
          transform={isOpen ? `rotate(${45})` : `rotate(${0})`}
          transform-origin="center"
          y2="200"
          x2="350"
          y1="200"
          x1="50"
          fill="currentColor"
        ></line>
        <line
          className={styles.animate}
          stroke="currentColor"
          strokeWidth="20"
          id="mid-line-2"
          transform={isOpen ? `rotate(${-45})` : `rotate(${0})`}
          transform-origin="center"
          y2="200"
          x2="350"
          y1="200"
          x1="50"
          fill="currentColor"
        />
        <line
          className={right}
          stroke="currentColor"
          strokeWidth="20"
          id="edge-line"
          y2="300"
          x2="350"
          y1="300"
          x1="50"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Menu;
