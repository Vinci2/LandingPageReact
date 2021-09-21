import React from "react";
import styles from './CompanyDescriptionSection.module.scss'
import cadImg from '../../../assets/cad2.png'
const CompanyDescriptionSection = () => {
  return (
      <section className={styles['main-section']}>
          <div className={styles['columns-container']}>
              <div className={styles['description-container']}>
                  <h2>A Design Agency with a difference</h2>

                  <p>We love to develop innovative new products and technology through a blend of design creativity and engineering excellence.</p>
                  <p>With a highly experienced product design team, who really understand materials and manufacturing, we carefully manage the entire development process to deliver market leading products.</p>
              </div>
              <div className={styles['image-container']}>
                  <img className={styles.image} src={cadImg} alt="Cad image"/>
              </div>
          </div>
      </section>
  );
};

export default CompanyDescriptionSection;
