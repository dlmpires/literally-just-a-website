import React from "react";
import Link from "next/link";
import styles from "./hero.module.sass";
import NavMenu from "../nav_menu/nav_menu";
import { Menu } from "lucide-react"

export default function Hero(props) {
    const [show, setShow] = React.useState(false)

    const toggleNavMenu = () => {
      setShow(!show)
    }

    return (
        <section className={styles.section}>
            {show ? <NavMenu onNavMenuToggle={toggleNavMenu} /> : null}
            <div className={styles.hero}>
                <nav>
                    <div className={styles.nav_container}>
                        <div className={styles.menu}>
                            <Menu size={52} onClick={toggleNavMenu} />
                            <h1>MENU</h1>
                        </div>

                        <div className={styles.stroke}></div>

                        <img draggable="false" src="/logo.svg" />
                    </div>

                    <div className={styles.nav_profile}>
                        <Link href="/profile">MEU PERFIL</Link>
                    </div>
                </nav>

                <div className={styles.container}>
                    <div className={styles.name}>
                        <img draggable="false" src="/name.png" alt="Name" />
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
        </section>
    )
}