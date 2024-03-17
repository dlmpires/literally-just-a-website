"use client";
import React from "react";
import styles from "./about.module.sass";
import Footer from "../components/footer/footer";
import Hero from "../components/hero/hero";

export default function About() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Sobre Nós" />
      <div className={styles.about}>

          <div className={styles.aboutContainer}>
          <img src="/about/info1.png" className={styles.about1IMG}/>

          <div className={styles.info1Container}>
            <h2 className={styles.title}>Direto do Centro de Lisboa</h2>
            <p className={styles.description}>Localizado no centro de Lisboa com acesso à grande cultura e gastronomia lisboeta. 
              Adjacente ao castelo de São Jorge, com vista sobre o Tejo.</p>
            <a className={styles.loc} href="https://maps.app.goo.gl/eVn5T7TDTtBA39Jm9" target="blank">Ver Localização</a>
          </div>
          </div>

          <div className={styles.aboutContainer}>
          <div className={styles.info2Container}>
            <h2 className={styles.title2}>Valores e Objetivos</h2>
            <p className={styles.description2}>No Grand Tranquil Hotel, temos como objetivo proporcionar-lhe uma experiência
            marcada pelo confordo e pela tranquilidade através dos nosso serviços. Acreditamos que qualquer um tem
            direito a experenciar serenidade sem preocupações.</p>
            <a className={styles.loc} href="/services/">Ver Serviços</a>
          </div>

          <img src="/about/info1.png" className={styles.about2IMG}/>
          </div>

      </div>
      <Footer />
    </main>
  );
}