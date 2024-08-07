import styles from "./navbar.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar() {
    return (
        <div className={styles.navBar}>
            <a href="#home" className={styles.navlink}>Home</a>
            <a href="#projects" className={styles.navlink}>Projects</a>
            <a href="#about" className={styles.navlink}>About me</a>
            {/* TODO: <FontAwesomeIcon icon="fas fa-search" /> */}
            <button className={styles.accountButton}>Account</button>
        </div>
    );
}
