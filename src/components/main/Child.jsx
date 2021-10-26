import React from "react";
import ButtonAdd from "../ui/ButtonAdd";
import Input from "../ui/Input";
import DeleteBtn from "../ui/DeleteBtn";

function Child(props) {
  return (
    <div className="main">
      <div className="add">
          <p>Дети(макс.5)</p>
          <ButtonAdd />
      </div>
        <div className="child-info">
            <Input />
            <Input />
            <DeleteBtn />
        </div>
    </div>
  );
}

export default Child;
