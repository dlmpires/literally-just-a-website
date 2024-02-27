'use client'
import React from 'react';
import { Menu } from "lucide-react"
import styles from "./nav.module.sass"

export default function Nav(props) {
    const [menu, setMenu] = React.useState(false) // false - closed / true - open 

    function toggleMenu() {
        setMenu(!menu)
    }
    
    return (
        <nav id="nav" className={styles.nav}>
            <div className={styles.nav_container}>
                <div className={styles.menu}>
                    <Menu size={52} onClick={props.onNavMenuToggle}/>
                    <h1>MENU</h1>
                </div>
                <div className={styles.stroke}></div>
                <img src="/logo.svg" />
            </div>
        </nav>
    )
}