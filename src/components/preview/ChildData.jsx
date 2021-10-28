import React from "react";
import styles from "./preview.module.css";
import {useSelector} from "react-redux";

function ChildData(props) {
    const children = useSelector(state => state.children)
  return (
    <div className={styles.childData}>
      <p>Дети:</p>
        {children.map((child, index) => {
            return <div key={index} className={styles.child}>
                <div>Имя: {child.name}</div>
                <div>Возраст: {child.age}</div>
            </div>
        })}
    </div>
  );
}

export default ChildData;
