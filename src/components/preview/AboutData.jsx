import React from "react";
import { useSelector } from "react-redux";
import ChildData from "./ChildData";

function AboutData(props) {
  const person = useSelector((state) => state.users);
  return (
    <>
      <p>Персональные данные</p>
      {person.map((item) => {
        return (
          <h4 key={item.id}>
            {item.name} {item.lastName} {item.age}
          </h4>
        );
      })}
      <ChildData />
    </>
  );
}

export default AboutData;
