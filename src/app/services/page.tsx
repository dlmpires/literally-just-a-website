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

        <div className={styles.rooftopDiv}>
          <img src="/services/serviceRooftop.png" alt="RoofTop Logo" className={styles.rooftopIMG}/>
          <div className={styles.rooftopContainer}>
            <div className={styles.divHeader}>
              <img src="/services/martini.png" alt="Martini Logo" className={styles.martiniIMG}/>
              <h1 className={styles.title}>RoofTop Bar</h1>
            </div>

            <div className={styles.divDescription}>
              <p className={styles.description}>Inserido num ambiente moderno e descontraído, 
                o Rooftop Bar encontra-se aberto ao grande público todos os dias e é a “desculpa” perfeita para saborear uma bebida refrescante,
                refeição ligeira e descontrair em pleno centro da Cidade de Lisboa.</p>
            </div>

            <div className={styles.divExplore}>
                <p className={styles.explorebtn}>Explorar</p>
            </div>
          </div>
        </div>

      </div>

      <Footer/>
    </main>
  );
}