import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./main.module.css";
import Input from "../ui/Input";

function Main(props) {
  const [name, setName] = useState();
  console.log(name);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div className="personal">
        <div className="inp">
          <p>Персональные данные</p>
          <Input f={handleChangeName} text="Имя" />
          <Input text="Возраст" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.add}>
          <p>Дети(макс.5)</p>
          <Button type="add" text={"Добавить ребенка"} />
        </div>
        <div className={styles.childInfo}>
          <Input text="Имя" />
          <Input text="Возраст" />
          <Button type="delete" text="Удалить" />
        </div>
        <div className={styles.childInfo}>
          <Input text="Имя" />
          <Input text="Возраст" />
          <Button type="delete" text="Удалить" />
        </div>
      </div>
      <Button type="save" text="Сохранить" />
    </div>
  );
}

export default Main;
