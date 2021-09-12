import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import mainBackground from "../../../assets/main-background.jpg";
import styles from "./WelcomeSection.module.scss";
import React from "react";

const WelcomeSection = () => {
  return (
    <header className={styles["image-container"]}>
      <div className={styles.overlay}></div>
      <section className={styles['welcome-container']}>
        <h1 className={styles['main-title']}> Kutang Designe</h1>
        <p>Let us help you to develop great products</p>
      </section>
    </header>
  );
};

export default WelcomeSection;
