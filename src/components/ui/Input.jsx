import React from "react";
import styles from "./ui.module.css";

function Input({ text, f }) {
  return <input onChange={f} placeholder={text} type="text" className={styles.input} />;
}

export default Input;
