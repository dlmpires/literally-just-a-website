import styles from "./home.module.sass";
import { Menu } from "lucide-react"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <nav>
          <div className={styles.nav_container}>
            <div className={styles.menu}>
              <Menu size={52}/>
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
