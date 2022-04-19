import React from "react";
import Image from "next/image";
import DayToogler from "./DayToogler";
import NightToogler from "./NightToogler";
import styles from "../../styles/Header.module.css";

export default function Header(props) {
  const {
    Container,
    AppHeader,
    TooltipText,
    AppLogo,
    Tooltip,
    TooglerWrapper,
  } = styles;
  return (
    <div className={Container}>
      <header className={AppHeader}>
        <div className={TooglerWrapper} onClick={props.handleDark}>
          <div className={Tooltip}>
            <>{props.night ? <NightToogler /> : <DayToogler />}</>
            {props.night ? (
              <span
                className={TooltipText}
                style={props.night ? { background: "#fff", color: "#000" } : ""}
              >
                Day
              </span>
            ) : (
              <span className={TooltipText}>Night</span>
            )}
          </div>
        </div>
        {!props.night ? (
          <Image
            width={200}
            height={200}
            src="/nightLogo.svg"
            alt="kapsha"
            className={AppLogo}
            // className="AppLogo w3-animate-fading"
          />
        ) : (
          <Image
            width={200}
            height={200}
            src="/kapshaLogo.svg"
            alt="kapsha"
            className={AppLogo}
            // className="AppLogo w3-animate-fading"
          />
        )}
      </header>
    </div>
  );
}
