import React from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function Child(props) {
  return (
    <div className="main">
      <div className="add">
        <p>Дети(макс.5)</p>
        <Button type="add" text="+ Добавить ребенка" />
      </div>
      <div className="child-info">
        <Input text='Имя'/>
        <Input text='Возраст'/>
        <Button type="delete" text="Удалить" />
      </div>
    </div>
  );
}

export default Child;
