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
          <Input onChange={handleChangeName} placeholder="Имя" />
          <Input placeholder="Возраст" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.add}>
          <p>Дети(макс.5)</p>
          <Button type="add">Добавить ребенка </Button>
        </div>
        <div className={styles.childInfo}>
          <Input placeholder="Имя" />
          <Input placeholder="Возраст" />
          <Button type="delete">Удалить</Button>
        </div>
        <div className={styles.childInfo}>
          <Input placeholder="Имя" />
          <Input placeholder="Возраст" />
          <Button type="delete">Удалить</Button>
        </div>
      </div>
      <Button type="save">Сохранить</Button>
    </div>
  );
}

export default Main;
