import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../common/components/Header.jsx";
import Main from "../common/components/Main.jsx";
import Footer from "../common/components/Footer.jsx";

export default function Home() {
  const [dark, setDark] = useState(false);
  const handleDark = () => {
    setDark(!dark);
  };
  return (
    <div className={!dark ? styles.AppWrapper : styles.AppDarkWrapper}>
      <Head>
        <title>kapsha - blockchain powered disruptive fashion</title>
        <meta
          name="description"
          content="Kapsha is a blockchain fashion startup. Redefine the legacy of luxury fashion, own and feel NFTs in the real world. Launching soon."
        />
      </Head>
      <Header handleDark={handleDark} night={dark} />
      <Main night={dark} />
      <Footer night={dark} />
    </div>
  );
}
