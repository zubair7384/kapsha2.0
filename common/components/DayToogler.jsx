import React from "react";
import styles from "../../styles/DayToogler.module.css";

export default function DayMode() {
  const {
    DayMode,
    DMainCircle,
    DCircleOne,
    DCircleTwo,
    DLines,
    DLineOne,
    DLineTwo,
    DLineThree,
    DLineFour,
  } = styles;
  return (
    <div>
      <div className={DayMode}>
        <div className={DMainCircle}>
          <div className={DCircleOne}></div>
          <div className={DCircleTwo}></div>
        </div>
        <div className={DLines}>
          <div className={DLineOne}></div>
          <div className={DLineTwo}></div>
          <div className={DLineThree}></div>
          <div className={DLineFour}></div>
        </div>
      </div>
    </div>
  );
}
