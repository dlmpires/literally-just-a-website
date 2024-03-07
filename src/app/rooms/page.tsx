"use client";
import React from "react";
import styles from "./rooms.module.sass";

import Hero from "../components/hero/hero";
import RoomsCarroussel from "../components/rooms_carroussel/rooms_carroussel";

export default function Rooms() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Alojamentos" />
      <div className={styles.rooms}>
        <RoomsCarroussel />
      </div>
    </main>
  );
}
