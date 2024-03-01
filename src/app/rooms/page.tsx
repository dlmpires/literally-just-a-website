"use client";
import React from "react";
import styles from "./rooms.module.sass";

import Nav from "../components/nav/nav";
import NavMenu from "../components/nav_menu/nav_menu";
import RoomCarroussel from "../components/rooms_carroussel/rooms_carroussel";

export default function Rooms() {
  const [show, setShow] = React.useState(false);

  const toggleNavMenu = () => {
    setShow(!show);
  };

  return (
    <main className={styles.main}>
      {show ? <NavMenu onNavMenuToggle={toggleNavMenu} /> : null}
      <div className={styles.hero}>
        <Nav onNavMenuToggle={toggleNavMenu} />
        <div className={styles.title}>
          <h1>Alojamentos</h1>
          <hr />
          <span>
            <h2>Grand</h2>
            <h2>Tranquil</h2>
            <h2>Hotel</h2>
          </span>
        </div>
      </div>
      <div className={styles.rooms}>
        <RoomCarroussel />
      </div>
    </main>
  );
}
