import React, { useCallback, useState } from "react";
import styles from "./main.module.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPerson } from "../../redux/features/people";
import Input from "../ui/input";
import Button from "../ui/button";

function Main() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [children, setChildren] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeChild = useCallback(
    (e, index) => {
      setChildren(
        children.map((child, idx) => {
          if (index === idx) {
            return {
              ...child,
              [e.target.name]: e.target.value,
            };
          }
          return child;
        })
      );
    },
    [children]
  );

  const handleAddChild = () => {
    setChildren([...children, { name: "", age: "" }]);
  };

  const handleRemoveChild = (index) => {
    setChildren(children.filter((_, idx) => index !== idx));
  };

  const handleSave = () => {
    dispatch(addPerson({ children, age, name }));
    history.push("/preview");
  };

  return (
    <div className={styles.main}>
      <div className="personal">
        <div className="inp">
          <p>Персональные данные</p>
          <Input
            value={name}
            placeholder="Имя"
            type="text"
            onChange={handleChangeName}
          />
          <Input
            value={age}
            placeholder="Возраст"
            type="number"
            onChange={handleChangeAge}
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.add}>
          <p>Дети</p>
          <Button
            type="add"
            onClick={handleAddChild}
            disabled={children.length === 5}
          >
            Добавить ребенка
          </Button>
        </div>
        {children.map((child, index) => {
          return (
            <div key={index} className={styles.childInfo}>
              <Input
                type="text"
                name="name"
                placeholder="Имя"
                value={child.name}
                onChange={(e) => handleChangeChild(e, index)}
              />
              <Input
                name="age"
                type="number"
                placeholder="Возраст"
                value={child.age}
                onChange={(e) => handleChangeChild(e, index)}
              />
              <Button type="delete" onClick={() => handleRemoveChild(index)}>
                Удалить
              </Button>
            </div>
          );
        })}
      </div>
      <Button type="save" onClick={handleSave} disabled={!name && !age}>
        Сохранить
      </Button>
    </div>
  );
}

export default Main;
