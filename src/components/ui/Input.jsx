import React from "react";
import "./style.css";

function Input({ text }) {
  return <input placeholder={text} type="text" className="input" />;
}

export default Input;
