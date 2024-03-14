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

        <div className={styles.container1}>
          <div className={styles.img1Container}>
            <div className={styles.bgImgDiv} />
            <img alt="S. Jorge Castel" src="about/castel.png" className={styles.bgImg}/>
          </div>

          <div className={styles.info1Container}>
            <h2>Direto do Centro de Lisboa</h2>
            <p>Localizado no centro de Lisboa com acesso à grande cultura e gastronomia lisboeta. 
              Adjacente ao castelo de São Jorge, com vista sobre o Tejo.</p>
            <div>Ver Localização</div>
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}