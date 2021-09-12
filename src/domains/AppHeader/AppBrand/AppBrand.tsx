import React from "react";
import styles from './AppBrand.module.scss'
import brand from '../../../assets/kutang-logo-Orange.png'

const AppBrand: React.FunctionComponent = () => {
  return <div className={styles['brand-container']}>
    <img src={brand} className={styles.logo}></img>
  </div>;
};

export default AppBrand;
