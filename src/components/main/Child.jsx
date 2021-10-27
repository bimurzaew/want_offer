import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import styles from "./main.module.css";
import plus from "../ui/Union.svg";

function Child(props) {
  return (
    <div className={styles.main}>
      <div className={styles.add}>
        <p>Дети(макс.5)</p>
        <Button type="btn-add" text={"Добавить ребенка"} />
      </div>
      <div className={styles.childInfo}>
        <Input text="Имя" />
        <Input text="Возраст" />
        <Button type="btn-delete" text="Удалить" />
      </div>
        <div className={styles.childInfo}>
            <Input text="Имя" />
            <Input text="Возраст" />
            <Button type="btn-delete" text="Удалить" />
        </div>
    </div>
  );
}

export default Child;
