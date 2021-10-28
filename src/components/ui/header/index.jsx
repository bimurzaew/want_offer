import React from "react";
import {ReactComponent as Logo} from "./Logo_imi_horizontal.svg";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <div className="image">
          <Logo />
      </div>
      <div className={styles.text}>
        <a href="/">Форма</a>
        <a href="/preview">Превью</a>
      </div>
    </div>
  );
}

export default Header;
