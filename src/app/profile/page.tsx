"use client";
import React from "react";
import styles from "./profile.module.sass";
import { Menu } from "lucide-react";
import { X } from 'lucide-react';
import NavMenu from "../components/nav_menu/nav_menu";


export default function Profile() {
      // Estado pa controla visibilidade di menu
      const [show, setShow] = React.useState(false);

      // Função pa muda visibilidade di menu
      const toggleNavMenu = () => {
        console.log(show)
        setShow(!show);
        console.log(show)
      };

      // Efeito pa controla overflow di corpo di documento ku menu aberto
      React.useEffect(() => {
        document.body.style.overflowY = show ? "hidden" : "scroll";
      });
    
  return (
    <main className={styles.main}>
      {show ? <NavMenu onNavMenuToggle={toggleNavMenu} /> : null}
      <div className={styles.profile}>

      <nav className={styles.nav}>
              <div className={styles.nav_container}>
                <div className={styles.menu}>
                  <Menu size={52} onClick={toggleNavMenu} />
                  <h1 onClick={toggleNavMenu}>MENU</h1>
                </div>
                <div className={styles.stroke}></div>
                <img draggable="false" src="/logo.svg" />
              </div>
      </nav>

      <div className={styles.login}>
          <img src="/logo-dark.svg" className={styles.logo}/>
          <input type="text" className={styles.input}/>
          <input type="text" className={styles.input}/>


      </div>

      </div>
    </main>
  );
}