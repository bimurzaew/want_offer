import React from "react";
import styles from "./input.module.css";
import propTypes from "prop-types";

function Input(props) {
  return <input className={styles.input} {...props}/>;
}

Input.propTypes = {
  ...props:
}

export default Input;
