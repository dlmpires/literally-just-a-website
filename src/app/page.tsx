import styles from "./home.module.sass";
import { Menu } from "lucide-react"

const LS = "https://prod.liveshare.vsengsaas.visualstudio.com/join?31D49708CD6AE7FC9D1FE6823127836BD419";

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
            </h2> </div>


          {/* <a href="./">Home</a>
          <a href="./rooms">Rooms</a>
          <a href="./services">Services</a>
        <a href="./about">About Us</a> */}

          <a href={LS}>asdfhasdifhj</a>
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
