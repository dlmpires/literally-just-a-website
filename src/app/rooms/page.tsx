import styles from "./rooms.module.sass"
import { Menu } from "lucide-react";

export default function Rooms() {
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
        </nav>
        <div className={styles.title}>
          <h1>Alojamenteos</h1>
          <hr />
          <span>
            <h2>Grand</h2>
            <h2>Tranquil</h2>
            <h2>Hotel</h2>
          </span>
        </div>
      </div>
    </main>
  );
}
