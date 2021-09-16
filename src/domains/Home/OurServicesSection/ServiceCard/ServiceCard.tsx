import React from "react";
import styles from "./ServiceCard.module.scss";

export interface CardConfig {
  title: string;
  icon: string;
  description: string;
}

interface props {
  cardConfig: CardConfig;
}

const ServiceCard: React.FunctionComponent<props> = (props) => {
  return (
    <div className={styles["main-container"]}>
      <img className={styles.icon} src={props.cardConfig.icon} alt="" />
      <h3>{props.cardConfig.title}</h3>
      <p className={styles.description}>{props.cardConfig.description}</p>
    </div>
  );
};

export default ServiceCard;
