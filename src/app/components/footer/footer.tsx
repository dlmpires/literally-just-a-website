"use client";
import { AtSign, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import styles from "./footer.module.sass";
export default function Rooms() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.column}>
          <h1 className={styles.title}>Acerca de</h1>
          <a>Início</a>
          <a>Localização</a>
          <a>Sobre Nós</a>
          <a>Contactos</a>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Serviços</h1>
          <a>Alojamentos</a>
          <a>Reservar</a>
          <a>Serviços</a>
        </div>
        <div className={styles.column}>
          <h1 className={styles.title}>Outros</h1>
          <a>Aviso Legal</a>
          <a>Perguntas Frequentes</a>
          <a>Política de Privacidade</a>
        </div>

        <img className={styles.logo_name} draggable="false" src="/name.png" alt="Name" />
      </div>
      <hr />
      <div className={styles.socials}>
        <Instagram />
        <Twitter />
        <Facebook />
        <Linkedin />
        <AtSign />
      </div>
      <a className={styles.copyright}>Copyright © 2024 Tranquil Hotels Inc.</a>
    </footer>
  );
}
