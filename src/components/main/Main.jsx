import React from "react";
import Personal from "./Personal";
import Child from "./Child";
import SaveBtn from "../ui/SaveBtn";

function Main(props) {
  return (
    <div className="main">
      <Personal />
      <Child />
      <SaveBtn />
    </div>
  );
}

export default Main;
