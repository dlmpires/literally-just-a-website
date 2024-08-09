import styles from "./navbar.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Archivo } from '@next/font/google';

const archivo = Archivo({
    weight: ['400', '600'], // Specify the font weights you want to use
    subsets: ['latin'], // Choose the subsets you need
  });
  
  

export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <div className={styles.itemsDiv}>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#about" className={styles.navLink}>About me</a>
            </div>

            <div className={styles.accountDiv}>
                {/* TODO: <FontAwesomeIcon icon="fas fa-search" /> */}
                <FontAwesomeIcon icon={faSearch} className={styles.searchButton}/>
                <button className={styles.accountButton}>Account</button>
            </div>
        </div>
    );
}
