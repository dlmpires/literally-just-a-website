'use client'
import React from 'react';
import Link from 'next/link';
import { X } from "lucide-react"
import styles from "./nav_menu.module.sass"

export default function NavMenu(props) {
    const [menu, setMenu] = React.useState(false) // false - closed / true - open 

    return (
        <div id="nav_menu" className={`${styles.nav_menu} ${menu ? styles.open : ''} `}>
            <div className={styles.nav_toggler}>
                <X size={52} onClick={props.onNavMenuToggle} />
                <h1>MENU</h1>
            </div>

            <div className={styles.nav_links}>
                <Link href="/">Início</Link>
                <Link href="/rooms">Alojamentos</Link>
                <Link href="/services">Serviços</Link>
                <Link href="/about">Sobre Nós</Link>
            </div>
        </div>
    )
}
