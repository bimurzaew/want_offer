import React from "react";
import AboutData from "./AboutData";
import "./style.css";
import ChildData from "./ChildData";

function Preview(props) {
  return (
    <div className="preview">
      <AboutData />
      <ChildData />
    </div>
  );
}

export default Preview;
