"use client";
import React, { useState } from "react";
import styles from "./profile.module.sass";
import { Menu } from "lucide-react";
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

      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');


      const handleUserNameChange = (event) => {
        setUsername(event.target.value)
      }

      const handlePassWordChange = (event) => {
        setPassword(event.target.value)
      }

    
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

      <div className={styles.login}>
      <img src="/logo-dark.svg" className={styles.logo}/>
          <div className={styles.txt_field}>
            <input type="text" className={styles.input} value={username} onChange={handleUserNameChange} onBlur={() => setShowLabel(username.length === 0)}/>
            <label className={username.length > 0 ? styles.hide : ''}>Nome de Usuário ou Gmail</label>
          </div>
          
          <div className={styles.txt_field}>
            <input type="password" className={styles.input} value={password} onChange={handlePassWordChange} onBlur={() => setShowLabel(password.length === 0)}/>
            <label className={password.length > 0 ? styles.hide : ''}>Palavra Passe</label>
          </div>
          
          <div className={styles.rememberMe}>
            <input type="checkbox" />
            <label>Lembrar-me</label>
          </div>

          <input type="submit" value="Login" className={styles.inputLogin}/>

          <div className={styles.signup}>Ainda não és membro? <a href="#">Regista-te!</a></div>
          <div>Ao registrares-te no nosso site, concordas com os nossos<a href="#"> Termos de Serviço</a> e <a href="#">Política de Privacidade</a></div>

      </div>

      </div>
    </main>
  );
}