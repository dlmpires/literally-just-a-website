import { Menu } from "lucide-react"

export default function Footer() {
<nav>
    <div className={styles.nav_container}>
        <div className={styles.menu}>
            <Menu size={52} />
            <h1>MENU</h1>
        </div>

        <div className={styles.stroke}></div>

        <img src="/logo.svg" />
    </div>

</nav>
}