import React from "react";
import styles from "../../styles/Footer.module.css";

export default function Footer(props) {
  const { AppFooter, CopyRight, Soon, FooterWrapper } = styles;
  return (
    <footer
      className={AppFooter}
      style={
        props.night
          ? { background: "rgba(156, 211, 0, 0.95)" }
          : { background: "rgba(189, 255, 0, 0.95)" }
      }
    >
      <div className={FooterWrapper}>
        <p
          className={CopyRight}
          style={props.night ? { color: "#fff" } : { color: "#000" }}
        >
          Copyright &copy; 2022 - kapsha.io
        </p>
        <p
          className={Soon}
          style={props.night ? { color: "#fff" } : { color: "#000" }}
        >
          Launching Soon!
        </p>
      </div>
    </footer>
  );
}
