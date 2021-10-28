import React from "react";
import styles from "./preview.module.css";
import { useSelector } from "react-redux";

function Preview() {
  const person = useSelector((state) => state.users);
  const children = useSelector((state) => state.children);

  return (
    <div className={styles.preview}>
      <p>Персональные данные</p>
      {person.map((item, index) => {
        return (
          <div key={index}>
            <div>Имя: {item.name}</div>
            <div>Возраст: {item.age}</div>
          </div>
        );
      })}
      <div className={styles.childData}>
        <p>Дети:</p>
        {children.map((child, index) => {
          return (
            <div key={index} className={styles.child}>
              <div>Имя: {child.name}</div>
              <div>Возраст: {child.age}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Preview;
