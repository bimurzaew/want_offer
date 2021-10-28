import React from "react";
import { useSelector } from "react-redux";

function AboutData(props) {
  const person = useSelector((state) => state.users);
  return (
    <>
      <p>Персональные данные</p>
      {person.map((item, index) => {
        return (
          <h4 key={index}>
            {item.name} {item.lastName} {item.age}
          </h4>
        );
      })}
    </>
  );
}

export default AboutData;
