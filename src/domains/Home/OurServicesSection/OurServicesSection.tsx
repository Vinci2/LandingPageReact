import React from "react";
import styles from "./OurServicesSection.module.scss";
import ServiceCard, { CardConfig } from "./ServiceCard/ServiceCard";
import designIcon from "../../../assets/design-icon.png";
import developIcon from "../../../assets/develop-icon.png";
import manufactureIcon from "../../../assets/manufacture-icon.png";

const commonDesc = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Vel optio iste nostrum? Eos sequi, accusamus natus quas
   asperiores accusantium corrupti rerum error odit cum hic illo iste enim laborum
   nesciunt?`;

const cardsConfig: CardConfig[] = [
  { title: "Design", icon: designIcon, description: commonDesc },
  { title: "Development", icon: developIcon, description: commonDesc },
  { title: "Manufacture", icon: manufactureIcon, description: commonDesc },
];

const OurServicesSection = () => {
  const serviceCards = cardsConfig.map((cardConf, index) => {
    return <ServiceCard key={index} cardConfig={cardConf}></ServiceCard>;
  });

  return (
    <div className={styles["section-background"]}>
      <div className={styles["main-container"]}>
        <div className={styles["section-title-container"]}>
          <h2>Our services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className={styles["services-container"]}>{serviceCards}</div>
      </div>
    </div>
  );
};

export default OurServicesSection;
