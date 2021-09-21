import React from "react";
import styles from "./AppFooter.module.scss";

const AppFooter: React.FunctionComponent = () => {
  return (
    <footer>
      <div className={styles["main-container"]}>
        <div className={styles["company-details"]}>
          <h3> Kutang Ltd </h3>
          <p>
            Registered office: ENTERPRISE HOUSE THE COURTYARD, OLD COURT HOUSE
            ROAD, BROMBOROUGH
          </p>
          <p>
            WIRRAL, CH62 4UE, Registered in England and Wales. Registration
            number 12213681
          </p>
        </div>
        <div className={styles['contact-us']}>
          <h3> Contact us</h3>
          <p> Email: info@kutang.co.uk </p>
          <p> Phone: +44(0)7736273601 </p>
          <p> Address: 1 Springhill Cottage, Chilton, Buckinghamshir</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
