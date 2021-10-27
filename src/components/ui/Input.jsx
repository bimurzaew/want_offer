import React from "react";
import styles from "./ui.module.css";

function Input({ text }) {
  return <input placeholder={text} type="text" className={styles.input} />;
}

export default Input;
