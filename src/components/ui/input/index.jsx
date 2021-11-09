import React from "react";
import styles from "./input.module.css";
import propTypes from "prop-types";

function Input({value,...props}) {
  return <input className={styles.input} value={value} {...props} />;
}

Input.propTypes = {
  props: propTypes.object,
};

export default Input;
