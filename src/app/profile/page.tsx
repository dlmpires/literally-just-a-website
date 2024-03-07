"use client";
import React from "react";
import styles from "./profile.module.sass";

import Hero from "../components/hero/hero";

export default function Profile() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Meu Perfil" />
      <div className={styles.profile}>
      </div>
    </main>
  );
}
