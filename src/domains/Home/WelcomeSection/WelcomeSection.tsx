import React from "react";
import { Button } from "@material-ui/core";
import styles from "./WelcomeSection.module.scss";
import { useHistory } from "react-router";

const WelcomeSection = () => {
  const history = useHistory();

  const contactUsClickHandler = () => {
    history.push('/contact-us')
    console.log('event CLick');
    
  }
  return (
    <header className={styles["image-container"]}>
      <div className={styles.overlay}></div>
      <section className={styles["welcome-container"]}>
        <h1>Kutang Designe</h1>
        <p>
          Let us help you to develop next <strong>great</strong> products
        </p>
        <Button size="large" onClick={contactUsClickHandler}>Contact Us</Button>
      </section>
    </header>
  );
};

export default WelcomeSection;
