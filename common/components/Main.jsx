import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Main.module.css";

export default function Main(props) {
  const [night, setNight] = useState(false);
  const nightShift = props.night ? { color: "#9CD300" } : { color: "#000" };
  const {
    Main,
    GreenDay,
    GreenNight,
    BackgroundWrapper,
    AppBackground,
    KapshaImage,
    KapshaText,
    BackgroundText,
    GreenWrapper,
    TextWrapper,
    LaunchingText,
  } = styles;
  return (
    <div className={Main}>
      <div className={BackgroundWrapper}>
        {props.night ? (
          <Image
            width={1353}
            height={1117}
            src="/nightBackground.svg"
            alt="kapsha-background"
            className={AppBackground}
          />
        ) : (
          <Image
            width={1353}
            height={1117}
            src="/kapshaBackground.svg"
            alt="kapsha-background"
            className={AppBackground}
          />
        )}
      </div>
      <div className={BackgroundText}>
        {props.night ? (
          <Image
            width={1600}
            height={246}
            src="/nightKapsha.svg"
            alt="kapsha background"
            className={KapshaImage}
          />
        ) : (
          <Image
            width={1600}
            height={246}
            src="/kapsha.svg"
            alt="kapsha background"
            className={KapshaImage}
          />
        )}

        <div className={GreenWrapper}>
          {props.night ? (
            <Image
              width={436}
              height={436}
              src="/greenLogoNight.svg"
              alt="kapsha-green-logo"
              className={GreenDay}
            />
          ) : (
            <Image
              width={436}
              height={436}
              src="/greenLogoDay.svg"
              alt="kapsha-green-logo"
              className={GreenDay}
            />
          )}
        </div>
        <div className={TextWrapper}>
          <p className={KapshaText} style={nightShift}>
            Blockchain powered fashion startup all set to redefine the legacy of
            luxury brands. Kapsha is innovative and futuristic, launching NFTs
            to the real world.
            <br />
            <br />
            <span className={LaunchingText} style={nightShift}>
              Launching Soon!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
