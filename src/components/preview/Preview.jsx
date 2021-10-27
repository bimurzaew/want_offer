import React from "react";
import AboutData from "./AboutData";
import styles from "./preview.module.css";
import ChildData from "./ChildData";

function Preview(props) {
  return (
    <div className={styles.preview}>
      <AboutData />
      <ChildData />
    </div>
  );
}

export default Preview;
