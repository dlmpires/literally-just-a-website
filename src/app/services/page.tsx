"use client";
import React from "react";
import Footer from "../components/footer/footer";
import styles from "./services.module.sass";
import Hero from "../components/hero/hero";

export default function Services() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Serviços" />
      <div className={styles.services}>
        <img src="/services/serviceRooftop.png" alt="RoofTop Logo" className={styles.rooftopIMG}/>
      </div>
      <Footer/>
    </main>
  );
}
