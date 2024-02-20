import styles from "./home.module.sass";
import { Menu } from "lucide-react"

const LS = "https://prod.liveshare.vsengsaas.visualstudio.com/join?5045B3F7B28DCB1D51A19323CAC355C3876F"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <nav>
          <div className={styles.nav_container}>
            <div className={styles.menu}>
              <Menu />
              <h1>MENU</h1>  
            </div>

            <div className={styles.stroke}></div>

            <img src="/logo.svg" />
          </div>

          <div className={styles.nav_profile}>
            <a>MEU PERFIL</a>
          </div>
        </nav>

        <div className={styles.container}>
          <div className={styles.name}>
            <img src="/name.png" alt="Name" />
          </div>

          <div className={styles.description}>
            <h2>
              Localizado no coração de Lisboa, o Tranquil Hotel dispõe da alma
              cultural da cidade Lisboeta, desde o Fado à gastronomia.
            </h2>
          </div>

          <div className={styles.book}>
            <div>Data</div>
            <div>Tipo de Quarto</div>
            <div>Hóspedes</div>
            <div>PROCURAR</div>
          </div>

          {/* <a href="./">Home</a>
          <a href="./rooms">Rooms</a>
          <a href="./services">Services</a>
          <a href="./about">About Us</a> */}

          <a href={LS}>asdfhasdifhj</a>
        </div>

        <div className={styles.carroussel}>

        </div>
      </div>
    </main>
  );
}
