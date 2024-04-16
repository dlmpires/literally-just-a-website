"use client";
import React, { useState } from "react";
import styles from "./register.module.sass";
import { Menu } from "lucide-react";
import NavMenu from "../components/nav_menu/nav_menu";
import { EyeOff } from 'lucide-react';



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
            <img draggable="false" src="/logo.svg" />
          </div>
        </nav>

        <div className={styles.register}>
          <img src="/logo-dark.svg" className={styles.logo} />
          <div className={styles.txt_field_names}>
            <input type="text" placeholder="Primeiro Nome"/>
            <input type="text" placeholder="Último Nome"/>            
          </div>

          <div className={styles.txt_field}>
            <input type="email" className={styles.input} placeholder="Email"/>
          </div>

          <div className={styles.txt_field_names}>
            <input type="number" placeholder="ISD (3 digitos)"/>
            <input type="text" placeholder="Número de Telefone"/>            
          </div>

          <div className={styles.txt_field_names}>
            <input type="email" className={styles.input} placeholder="Nacionalidade"/>
            <input type="email" className={styles.input} placeholder="Género"/>
          </div>

          <input type="submit" value="Registar" className={styles.inputRegisto} />

          <div className={styles.signup}>Já tens conta? <a href="/profile/">Login!</a></div>
          <div>Ao registrares-te no nosso site, concordas com os nossos<a href="#"> Termos de Serviço</a> e <a href="#">Política de Privacidade</a></div>

        </div>

      </div>
    </main>
  );
}