"use client";
import React from "react";
import Footer from "../components/footer/footer";
import styles from "./services.module.sass";
import Hero from "../components/hero/hero";

// Komponenti Serviços
export default function Services() {
  return (
    <main className={styles.main}>
      <Hero main={false} page="Serviços" />
      <div className={styles.services}>

        <div className={styles.service}>
          <div className={`${styles.img} ${styles.rooftop}`}/>
          <div className={styles.info}>
            <div className={styles.header}>
              <img src="/services/martini.png" alt="Martini Logo" className={styles.logo} />
              <h1 className={styles.title}>RoofTop</h1>
            </div>
            <div className={styles.description}>
              <p>Inserido num ambiente moderno e descontraído,
                o Rooftop Bar encontra-se aberto ao público diariamente e é a desculpa perfeita para saborear uma bebida refrescante,
                com uma refeição ligeira enquanto descontrai no lindo centro da Cidade de Lisboa.</p>
            </div>
            <div className={styles.explore}>Explorar</div>
          </div>
        </div>

        <div className={styles.service}>
          <div className={styles.info}>
              <div className={styles.header}>
                <img src="/services/spaLogo.png" alt="Spa Logo" className={styles.logo} />
                <h1 className={styles.title}>Spa</h1>
              </div>
              <div className={styles.description}>
                <p>Alivie o corpo cansado de percorrer as colinas da cidade,
                  com esta revigorante imersão sensorial que presta homenagem aos frutos e fragrâncias de
                  Lisboa através de ingredientes biológicos regionais.</p>
              </div>
              <div className={styles.explore}>Explorar</div>
          </div>
          <div className={`${styles.img} ${styles.spa}`}/>
        </div>

        <div className={styles.service}>
          <div className={`${styles.img} ${styles.casino}`} />
          <div className={styles.info}>
              <div className={styles.header}>
                <img src="/services/casinoLogo.png" alt="Casino Logo" className={styles.logo} />
                <h1 className={styles.title}>Casino</h1>
              </div>

              <div className={styles.description}>
                <p>Centenas de slot machines esperam por si no nosso casino.
                  A diversão está garantida através de 200 jogos que podem ser escolhidos nas nossas máquinas
                  com gráficos e som de alta definição. Venha-se divertir connosco!</p>
              </div>

              <div className={styles.explore}>Explorar</div>
            </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}