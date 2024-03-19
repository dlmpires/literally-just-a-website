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

        <div className={styles.roofTop}>
          <div className={styles.rooftopDiv}>
            <img src="/services/serviceRooftop.png" alt="RoofTop Image" className={styles.rooftopIMG}/>
            <div className={styles.rooftopContainer}>
              <div className={styles.divHeader}>
                <img src="/services/martini.png" alt="Martini Logo" className={styles.martiniIMG}/>
                <h1 className={styles.title}>RoofTop</h1>
              </div>

              <div className={styles.divDescription}>
                <p className={styles.description}>Inserido num ambiente moderno e descontraído, 
                  o Rooftop Bar encontra-se aberto ao grande público todos os dias e é a “desculpa” perfeita para saborear uma bebida refrescante, 
                  com uma refeição ligeira enquanto descontrai no lindo centro da Cidade de Lisboa.</p>
              </div>

              <div className={styles.divExplore}>Explorar</div>
            </div>
          </div>
        </div>

        <div className={styles.spa}>
        <div className={styles.spaDiv}>
        <div className={styles.spaContainer}>
            <div className={styles.divHeader}>
              <img src="/services/spaLogo.png" alt="Spa Logo" className={styles.martiniIMG}/>
              <h1 className={styles.title}>Spa</h1>
            </div>

            <div className={styles.divDescription}>
              <p className={styles.description}>Alivie o corpo cansado de percorrer as colinas da cidade, 
              com esta revigorante imersão sensorial que presta homenagem aos frutos e fragrâncias de 
              Lisboa através de ingredientes biológicos regionais.</p>
            </div>

            <div className={styles.divExplore}>Explorar</div>
          </div>
          <img src="/services/serviceSpa.png" alt="Spa Image" className={styles.spaIMG}/>
          
        </div>
        </div>

        <div className={styles.roofTop}>
          <div className={styles.rooftopDiv}>
            <img src="/services/serviceCasino.png" alt="Casino Image" className={styles.rooftopIMG}/>
            <div className={styles.rooftopContainer}>
              <div className={styles.divHeader}>
                <img src="/services/casinoLogo.png" alt="Casino Logo" className={styles.martiniIMG}/>
                <h1 className={styles.title}>Casino</h1>
              </div>

              <div className={styles.divDescription}>
                <p className={styles.description}>Centenas de slot machines esperam por si no nosso casino. 
                A diversão está garantida através de 200 jogos que podem ser escolhidos nas nossas máquinas 
                com gráficos e som de alta definição. Venha-se divertir connosco!</p>
              </div>

              <div className={styles.divExplore}>Explorar</div>
            </div>
          </div>
        </div>

      </div>

      <Footer/>
    </main>
  );
}