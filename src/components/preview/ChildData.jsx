import React from "react";
import styles from './preview.module.css'

function ChildData(props) {
  return (
    <div className={styles.childData}>
      <p>Дети</p>
      <div className={styles.child}>Петя, 900 лет</div>
    </div>
  );
}

export default ChildData;
