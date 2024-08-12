'use client'
import styles from "./navbar.module.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Archivo } from '@next/font/google';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const archivo = Archivo({
    weight: ['400', '600'], // Specify the font weights you want to use
    subsets: ['latin'], // Choose the subsets you need
});
const server_url = process.env.NEXT_PUBLIC_SERVER_URL



export default function Navbar() {
    const [message, setMessage] = useState()
    const router = useRouter()

    const handleLogout = async () => {
        const res = await fetch(`${server_url}/logout`, {
            method: 'GET',
            credentials: 'include'
        })
        const data = await res.text();
        setMessage(data);
        if(res.ok) {
            console.log('logout triggered frontend')
            router.push('/')
        } else {
            
        }
    }

    return (
        <div className={`${styles.navBar} ${archivo.className}`}>
            <div className={styles.itemsDiv}>
                <a href="#home" className={styles.navLink}>Home</a>
                <a href="#projects" className={styles.navLink}>Projects</a>
                <a href="#about" className={styles.navLink}>About me</a>
            </div>

            <button onClick={handleLogout}>logout</button>
            <div className={styles.accountDiv}>
                <FontAwesomeIcon icon={faSearch} className={styles.searchButton} />
                <a className={styles.accountButton} href="/auth/register"><span>Account</span></a>
            </div>
        </div>
    );
}
