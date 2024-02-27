'use client'
import React from "react";
import Link from "next/link";
import styles from "./home.module.sass";
import { Menu } from "lucide-react"
import NavMenu from "./components/nav_menu/nav_menu";

export default function Home() {
  const [show, setShow] = React.useState(false)

  const toggleNavMenu = () => {
    setShow(!show)
  }

  return (
    <main className={styles.main}>
      {show ? <NavMenu onNavMenuToggle={toggleNavMenu}/> : null}
      <div className={styles.hero}>
        <nav>
          <div className={styles.nav_container}>
            <div className={styles.menu}>
              <Menu size={52} onClick={toggleNavMenu} />
              <h1>MENU</h1>  
            </div>

            <div className={styles.stroke}></div>

            <img draggable="false" src="/logo.svg" />
          </div>

          <div className={styles.nav_profile}>
            <Link href="/profile">MEU PERFIL</Link>
          </div>
        </nav>

        <div className={styles.container}>
          <div className={styles.name}>
            <img draggable="false" src="/name.png" alt="Name" />
          </div>

          <div className={styles.description}>
            <h2>
              Localizado no coração de Lisboa, o Tranquil Hotel dispõe da alma
              cultural da cidade Lisboeta, desde o Fado à gastronomia.
            </h2> 
          </div>
        </div>

        <div className={styles.carroussel}>

        </div>
        <div className={styles.book}>
          <div>Data</div>
          <div>Tipo de Quarto</div>
          <div>Hóspedes</div>
          <div className={styles.search}>PROCURAR</div>
        </div>
      </div>
    </main>
  );
}
