import React from "react";
import styles from "./ui.module.css";

function Input(props) {
  return <input type="text" className={styles.input} {...props}/>;
}

export default Input;
