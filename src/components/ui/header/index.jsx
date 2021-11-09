import React from "react";
import { ReactComponent as Logo } from "./Logo_imi_horizontal.svg";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.header}>
      <div className="image">
        <Logo />
      </div>
      <div className={styles.text}>
        <Link to="/">Форма</Link>
        <Link to="/preview">Превью</Link>
      </div>
    </div>
  );
}

export default Header;
