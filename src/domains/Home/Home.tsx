import React from "react";
import styles from "./Home.module.scss";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import CompanyDescriptionSection from "./CompanyDescriptionSection/CompanyDescriptionSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <WelcomeSection></WelcomeSection>
      <CompanyDescriptionSection></CompanyDescriptionSection>
    </div>
  );
};

export default Home;
