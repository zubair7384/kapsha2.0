import React, { useState, useEffect } from "react";
import Image from "next/image";
import DayToogler from "./DayToogler";
import NightToogler from "./NightToogler";
import styles from "../../styles/Header.module.css";

export default function Header(props) {
  const [width, setWidth] = useState(null);
  const {
    Container,
    AppHeader,
    TooltipText,
    AppLogo,
    Tooltip,
    TooglerWrapper,
    MobileToogler,
  } = styles;
  useEffect(() => {
    setWidth(window.innerWidth);
  });

  return (
    <div className={Container}>
      <header className={AppHeader}>
        <div className={TooglerWrapper} onClick={props.handleDark}>
          {width <= 768 ? (
            <div className={MobileToogler}>
              <>
                {props.night ? (
                  <Image
                    width={71}
                    height={71}
                    src="/mobMenuDay.svg"
                    alt="kapsha"
                  />
                ) : (
                  <Image
                    width={71}
                    height={71}
                    src="/mobMenuNight.svg"
                    alt="kapsha"
                  />
                )}
              </>
            </div>
          ) : (
            <div className={Tooltip}>
              <>{props.night ? <NightToogler /> : <DayToogler />}</>
              {props.night ? (
                <span
                  className={TooltipText}
                  style={
                    props.night ? { background: "#fff", color: "#000" } : ""
                  }
                >
                  Day
                </span>
              ) : (
                <span className={TooltipText}>Night</span>
              )}
            </div>
          )}
        </div>
        {!props.night ? (
          <Image
            width={250}
            height={200}
            src="/nightLogo.svg"
            alt="kapsha"
            className={AppLogo}
          />
        ) : (
          <Image
            width={250}
            height={200}
            src="/kapshaLogo.svg"
            alt="kapsha"
            className={AppLogo}
          />
        )}
      </header>
    </div>
  );
}
