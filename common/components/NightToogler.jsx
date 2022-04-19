import React from "react";
import styles from "../../styles/NightToogler.module.css";

export default function NightMode() {
  const {
    NightMode,
    MainCircle,
    CircleOne,
    CircleTwo,
    Lines,
    LineOne,
    LineTwo,
    LineThree,
    LineFour,
  } = styles;
  return (
    <div>
      <div className={NightMode}>
        <div className={MainCircle}>
          <div className={CircleOne}></div>
          <div className={CircleTwo}></div>
        </div>
        <div className={Lines}>
          <div className={LineOne}></div>
          <div className={LineTwo}></div>
          <div className={LineThree}></div>
          <div className={LineFour}></div>
        </div>
      </div>
    </div>
  );
}
