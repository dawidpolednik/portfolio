import React from "react";
import style from "./Contact.module.scss";

const TextArea = ({ name, placeholder, value, onChange }) => {
  return (
    <div className={`${style.col}`}>
      <textarea
        name={name}
        className={style.effect}
        rows="15"
        cols="50"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      <span className={style.focusBorder}>
        <i></i>
      </span>
    </div>
  );
};

export default TextArea;
