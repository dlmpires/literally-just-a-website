"use client";
import React from "react";
import styles from "./about.module.sass";

import Hero from "../components/hero/hero";

export default function About() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Sobre Nós" />
      <div className={styles.about}>
      </div>
    </main>
  );
}
