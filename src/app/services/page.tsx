"use client";
import React from "react";
import styles from "./services.module.sass";

import Hero from "../components/hero/hero";

export default function Services() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Serviços" />
      <div className={styles.services}>
      </div>
    </main>
  );
}
