import React from "react";
import Input from "../ui/Input";
import "./style.css";

function Personal(props) {
  return (
    <div className="personal">
      <div className="inp">
        <p>Персональные данные</p>
        <Input text="Имя" />
        <Input text="Возраст" />
      </div>
    </div>
  );
}

export default Personal;
