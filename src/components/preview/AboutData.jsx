import React from "react";
import { useSelector } from "react-redux";

function AboutData(props) {
  const person = useSelector((state) => state.users);
  return (
    <>
      <p>Персональные данные</p>
      {person.map((item, index) => {
        return (
          <div>
            <div>Имя: {item.name}</div>
            <div>Возраст: {item.age}</div>
          </div>
        );
      })}
    </>
  );
}

export default AboutData;
