import React from "react";
import styles from './ui.module.css'

function Button({ type, text }) {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>;
}

export default Button;
