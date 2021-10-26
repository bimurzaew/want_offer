import React from "react";
import logo from "./Logo_imi_horizontal.png";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="text">
        <a href="/">Форма</a>
        <a href="/preview">Превью</a>
      </div>
    </div>
  );
}

export default Header;
