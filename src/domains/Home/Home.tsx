import React from "react";
import styles from "./Home.module.scss";
import WelcomeSection from "./WelcomeSection/WelcomeSection";
import CompanyDescriptionSection from "./CompanyDescriptionSection/CompanyDescriptionSection";
import OurServicesSection from "./OurServicesSection/OurServicesSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <WelcomeSection></WelcomeSection>
      <CompanyDescriptionSection></CompanyDescriptionSection>
      <OurServicesSection></OurServicesSection>
    </div>
  );
};

export default Home;
