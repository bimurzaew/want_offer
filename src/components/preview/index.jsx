import React from "react";
import styles from "./preview.module.css";
import { useSelector } from "react-redux";

function Preview() {
  const person = useSelector((state) => state.users);
  const children = useSelector((state) => state.children);

  return (
    <div className={styles.preview}>
      {person.length === 0 ? (
        <h2 className={styles.info}>Нет добавленных пользователей</h2>
      ) : (
        <>
          <p>Персональные данные</p>
          {person.map((item, index) => {
            return (
              <div key={index}>
                <div className={styles.desc}>Имя: {item.name}</div>
                <div >Возраст: {item.age}</div>
              </div>
            );
          })}
          <div className={styles.childData}>
            <p>Дети:</p>
            {children.length === 0 ? (
              <h3>бездетный человек</h3>
            ) : (
              <>
                {children.map((child, index) => {
                  return (
                    <div key={index} className={styles.child}>
                      <div className={styles.desc}>Имя: {child.name}</div>
                      <div>Возраст: {child.age}</div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Preview;
