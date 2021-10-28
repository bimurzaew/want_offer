import React from "react";
import styles from "./button.module.css";

function Button({ type, children, ...props }) {
  return (
    <button
        className={`${styles.btn} ${styles[`btn-${type}`]}`}
        {...props}
    >
      {children}
    </button>
  );
}

export default Button;
