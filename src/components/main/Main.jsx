import React, { useState } from "react";
import Button from "../ui/Button";
import styles from "./main.module.css";
import Input from "../ui/Input";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Main(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [children, setChildren] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };

  const handleChangeChild = (e, index) => {
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
  };

  const handleAddChild = () => {
    setChildren([...children, { name: "", age: "" }]);
  };

  const handleRemoveChild = (index) => {
    setChildren(children.filter((_, idx) => index !== idx));
  };

  const handleSave = () => {
    dispatch({ type: "children/add", payload: children });
    dispatch({ type: "person/add", payload: { name, age } });
    history.push("/preview");
  };
  return (
    <div className={styles.main}>
      <div className="personal">
        <div className="inp">
          <p>Персональные данные</p>
          <Input
              placeholder="Имя"
              type="text"
              onChange={handleChangeName}
          />
          <Input
            placeholder="Возраст"
            type="number"
            onChange={handleChangeAge}
          />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.add}>
          <p>Дети(макс.5)</p>
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
      <Button type="save" onClick={handleSave} disabled={!name || !age}>
        Сохранить
      </Button>
    </div>
  );
}

export default Main;
