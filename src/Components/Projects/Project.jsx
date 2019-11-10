import React from "react";
import styles from "./Projects.module.scss";
import ScrollAnimation from "react-animate-on-scroll";

const titleButtons = ["GitHub", "Live Demo"];

const Project = ({ id, imageRef, title, description, tools, link }) => (
  <ScrollAnimation
    animateIn="fadeInDown"
    initiallyVisible={false}
    duration={1}
    delay={100}
    animateOnce
    animatePreScroll
  >
    <div className={styles.projectsItem}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={styles.imgContainer}>
          <img src={imageRef} className={styles.img} alt="projekt"></img>
          <div className={styles.searchIconContainer}>
            <i className={`${styles.searchIcon} ${"fa fa-search-plus"}`}></i>
          </div>
        </div>
      </a>
      <div className={styles.projectContent}>
        <h4 className={styles.projectTitle}>{title}</h4>
        <p className={styles.projectDescription}>{description}</p>
        <p className={styles.projectTools}>{`Narzędzia: ${tools}`}</p>

        {id !== 2 && id !== 1 ? (
          <div className={styles.buttonsContainer}>
            <a
              className={styles.buttonItem}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {titleButtons[0]}
            </a>
            <a
              className={styles.buttonItem}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {titleButtons[1]}
            </a>
          </div>
        ) : (
          <div className={styles.buttonContainer}>
            <a
              className={styles.buttonItem}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {titleButtons[0]}
            </a>
          </div>
        )}
      </div>
    </div>
  </ScrollAnimation>
);
export default Project;
