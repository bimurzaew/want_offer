import React from "react";
import Personal from "./Personal";
import Child from "./Child";
import Button from "../ui/Button";
import styles from './main.module.css'

function Main(props) {
  return (
    <div className={styles.main}>
      <Personal />
      <Child />
      <Button type="btn-save" text="Сохранить" />
    </div>
  );
}

export default Main;
