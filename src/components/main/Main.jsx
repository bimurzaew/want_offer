import React from "react";
import Personal from "./Personal";
import Child from "./Child";
import Button from "../ui/Button";

function Main(props) {
  return (
    <div className="main">
      <Personal />
      <Child />
      <Button type="save" text="Сохранить" />
    </div>
  );
}

export default Main;
